import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import * as bodyParser from "express";
import WebSocket, { WebSocketServer } from "ws";
import annotationRoutes from "./src/routes/annotation.js";
import liveDocumentRoutes from "./src/routes/liveDocument.js";
import authRoutes from "./src/routes/auth.js";
import prescriptionRoutes from "./src/routes/prescription.js";
import comparisonRoutes from "./src/routes/comparison.js";
import managementRoutes from "./src/routes/management/index.js";
import notificationRoutes from "./src/routes/notification.js";
import { createOrUpdateAnnotation } from "./src/controllers/annotation.js";
import { createNotification } from "./src/controllers/notification.js";
import { validJWTNeeded } from "./src/middlewares/auth.middleware.js";

// env
dotenv.config();

// config app
const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Adjust as needed
  res.header("Access-Control-Expose-Headers", "Content-Range");
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "500000gb" }));
app.use(bodyParser.urlencoded({ limit: "500000gb", extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/api/auth", authRoutes);
app.use("/api/document", validJWTNeeded, liveDocumentRoutes);
app.use("/api/annotations", validJWTNeeded, annotationRoutes);
app.use("/api/prescription", validJWTNeeded, prescriptionRoutes);
app.use("/api/comparisons", validJWTNeeded, comparisonRoutes);
app.use("/api/management", validJWTNeeded, managementRoutes);
app.use("/api/notification", validJWTNeeded, notificationRoutes);

// Connect to WebSocket client
const wss = new WebSocketServer({
  port: 3381,
});
wss.on("connection", (ws) => {
  // When message is received from client
  ws.on("message", (data, isBinary) => {
    const message = isBinary ? data : data.toString();
    const parsedData = JSON.parse(message);
    if (parsedData.event === "annotation") {
      const documentId = JSON.parse(message).documentId;
      const annotationId = JSON.parse(message).annotationId;
      const userId = JSON.parse(message).userId;
      let xfdfString = JSON.parse(message).xfdfString;

      // Prepare statement to sanitize input
      createOrUpdateAnnotation(documentId, annotationId, xfdfString, userId);

      wss.clients.forEach((client) => {
        // Broadcast to every client except for the client where the message came from
        if (client.readyState === WebSocket.OPEN && ws !== client) {
          client.send(message);
        }
      });
    } else if (parsedData.event === "notification") {
      const ownerId = JSON.parse(message).userId;
      const content = JSON.parse(message).content;
      const action = JSON.parse(message).action;
      const unread = JSON.parse(message).unread;
      createNotification(ownerId, JSON.stringify(content), action, unread).then(
        () => {
          wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
              client.send("refresh");
            }
          });
        },
      );
    }
  });
});

const API_PORT = process.env.API_PORT || 3333;
const API_HOST = process.env.API_HOST || "localhost";
app.listen(API_PORT, API_HOST, () => {
  console.info(`Listening at http://${API_HOST}:${API_PORT}`);
});

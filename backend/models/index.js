import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import SectionModel from "./Section.model.js";
import SubsectionModel from "./Subsection.model.js";
import LiveDocumentModel from "./LiveDocument.model.js";
import AnnotationModel from "./Annotation.model.js";
import UserModel from "./User.model.js";
import TokenModel from "./Token.model.js";
import PlanModel from "./Plan.model.js";
import FixedPlanModel from "./FixedPlan.model.js";
import StageModel from "./Stage.model.js";
import PlanTypeModel from "./PlanType.model.js";
import GenerationLogModel from "./GenerationLog.model.js";
import RoleModel from "./Role.model.js";
import PrescriptionModel from "./Prescription.model.js";
import PrintRequestModel from "./PrintRequest.model.js";
import ComparisonModel from "./Comparison.model.js";
import ProhibitedWordModel from "./ProhibitedWord.model.js";
import SubPlanTypeModel from "./SubPlanType.model.js";
import NotificationModel from "./Notification.model.js";
import PaperSizeModel from "./PaperSize.model.js";

export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    seederStorage: dbConfig.seederStorage,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  },
);

export const Section = SectionModel(sequelize, Sequelize);
export const Subsection = SubsectionModel(sequelize, Sequelize);
export const LiveDocument = LiveDocumentModel(sequelize, Sequelize);
export const Annotation = AnnotationModel(sequelize, Sequelize);
export const User = UserModel(sequelize, Sequelize);
export const Token = TokenModel(sequelize, Sequelize);
export const Plan = PlanModel(sequelize, Sequelize);
export const FixedPlan = FixedPlanModel(sequelize, Sequelize);
export const Stage = StageModel(sequelize, Sequelize);
export const PlanType = PlanTypeModel(sequelize, Sequelize);
export const PaperSize = PaperSizeModel(sequelize, Sequelize);
export const GenerationLog = GenerationLogModel(sequelize, Sequelize);
export const Role = RoleModel(sequelize, Sequelize);
export const Prescription = PrescriptionModel(sequelize, Sequelize);
export const PrintRequest = PrintRequestModel(sequelize, Sequelize);
export const Comparison = ComparisonModel(sequelize, Sequelize);
export const ProhibitedWord = ProhibitedWordModel(sequelize, Sequelize);
export const SubPlanType = SubPlanTypeModel(sequelize, Sequelize);
export const Notification = NotificationModel(sequelize, Sequelize);

Comparison.belongsTo(Plan, {
  as: "plan",
  foreignKey: "planId",
});
User.belongsTo(Section, {
  as: "section",
  foreignKey: "sectionId",
});
User.belongsTo(Subsection, {
  as: "subsection",
  foreignKey: "subsectionId",
});
FixedPlan.belongsTo(Section, {
  as: "section",
  foreignKey: "sectionId",
});
FixedPlan.belongsTo(Subsection, {
  as: "subsection",
  foreignKey: "subsectionId",
});
FixedPlan.belongsTo(PlanType, {
  as: "plan_type",
  foreignKey: "planTypeId",
});
FixedPlan.belongsTo(SubPlanType, {
  as: "subPlan_type",
  foreignKey: "subPlanTypeId",
});
FixedPlan.belongsTo(PaperSize, {
  as: "paper_size",
  foreignKey: "paperSizeId",
});
Notification.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
LiveDocument.belongsTo(Plan, {
  as: "plan",
  foreignKey: "planId",
});
Annotation.belongsTo(LiveDocument, {
  as: "live_document",
  foreignKey: "documentId",
});
Annotation.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
Plan.belongsTo(PlanType, {
  as: "plan_type",
  foreignKey: "planTypeId",
});
Plan.belongsTo(Section, {
  as: "section",
  foreignKey: "sectionId",
});
Plan.belongsTo(Subsection, {
  as: "subsection",
  foreignKey: "subsectionId",
});
Plan.belongsTo(SubPlanType, {
  as: "subPlan_type",
  foreignKey: "subPlanTypeId",
});
Plan.belongsTo(PaperSize, {
  as: "paper_size",
  foreignKey: "paperSizeId",
});
Prescription.belongsTo(Plan, {
  as: "plan",
  foreignKey: "planId",
});
Prescription.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
PrintRequest.belongsTo(Plan, {
  as: "plan",
  foreignKey: "planId",
});
Token.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
User.belongsTo(Role, {
  as: "role",
  foreignKey: "roleId",
});
Plan.hasMany(Prescription);
Plan.hasMany(LiveDocument);
Plan.hasMany(Comparison);

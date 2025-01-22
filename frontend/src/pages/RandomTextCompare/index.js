import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import "./style.css";

const RandomTextCompare = () => {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [differences, setDifferences] = useState("");

  const { t } = useTranslation();
  const getLocaleString = (key) => t(key);

  const getContent1 = (e) => {
    try {
      let file = e.target.files[0];

      if (file) {
        setContent1("");
        readTextByLines(file, function (line) {
          setContent1((prevContent) => prevContent + line);
        });
      } else {
        console.log("Text file1 is not selected.");
      }
    } catch (err) {
      console.log("err=>", err);
    }
  };

  const getContent2 = (e) => {
    try {
      let file = e.target.files[0];
      if (file) {
        setContent2("");
        readTextByLines(file, function (line) {
          setContent2((prevContent) => prevContent + line);
        });
      } else {
        console.log("Text file2 is not selected.");
      }
    } catch (err) {
      console.log("err=>", err);
    }
  };

  const readTextByLines = (file, forEachLine) => {
    const CHUNK_SIZE = 1024;
    const decoder = new TextDecoder();
    let offset = 0;
    let results = "";
    const fr = new FileReader();
    const seek = () => {
      if (offset >= file.size) {
        forEachLine(results);
        return;
      }
      const slice = file.slice(offset, offset + CHUNK_SIZE);
      fr.readAsArrayBuffer(slice);
    };
    fr.onload = function () {
      results += decoder.decode(fr.result, { stream: true });
      const lines = results.split("\n");
      results = lines.pop();

      for (let i = 0; i < lines.length; ++i) {
        forEachLine(lines[i] + "\n");
      }
      offset += CHUNK_SIZE;
      seek();
    };
    fr.onerror = function (err) {
      throw err;
    };
    seek();
  };

  const compareTexts = (t1, t2) => {
    const words1 = t1.split("\n");
    const words2 = t2.split("\n");

    const result = [];
    let i = 0;
    let j = 0;

    while (i < words1.length || j < words2.length) {
      const word1 = words1[i];
      const word2 = words2[j];

      if (word1 === word2) {
        result.push(
          <span key={`common-${i}`} className="text-black">
            {word1}{" "}
          </span>,
        );
        i++;
        j++;
      } else {
        if (
          i < words1.length &&
          (!words2.includes(word1) || word1 !== words2[j])
        ) {
          result.push(
            <span key={`removed-${i}`} className="text-red-500">
              {word1}{" "}
            </span>,
          );
          i++;
        }

        if (
          j < words2.length &&
          (!words1.includes(word2) || word2 !== words1[i])
        ) {
          result.push(
            <span key={`added-${j}`} className="text-green-500">
              {word2}{" "}
            </span>,
          );
          j++;
        }
      }
    }

    return result;
  };

  useEffect(() => {
    setDifferences(compareTexts(content1, content2));
  }, [content1, content2]);

  return (
    <div className="h-full">
      <Box className="ml-7 my-5">
        <Typography variant="h5">
          {getLocaleString("text_comparison_page_title")}
        </Typography>
      </Box>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md mx-4 h-[calc(100%-5.5rem)]">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="py-2 mb-2">
              <label className="upload-text px-4 py-2" htmlFor="text_input_1">
                {getLocaleString("common_select_file")}
              </label>
              <input
                type="file"
                name="text_input_1"
                id="text_input_1"
                accept=".txt"
                onChange={getContent1}
                style={{ display: "none" }}
              />
            </div>
            <div className="bg-white p-3 rounded">
              <h3 className="font-semibold mb-3 text-black px-2">
                {getLocaleString("common_text")} 1:
              </h3>
              <textarea
                className="w-full text-black font-medium h-[calc(50vh-12rem)] overflow-auto px-2 py-1 border-2 border-gray-400 rounded-md"
                value={content1}
                onChange={(e) => setContent1(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className="py-2 mb-2">
              <label className="upload-text px-4 py-2" htmlFor="text_input_2">
                {getLocaleString("common_select_file")}
              </label>
              <input
                type="file"
                name="text_input_2"
                id="text_input_2"
                accept=".txt"
                onChange={getContent2}
                style={{ display: "none" }}
              />
            </div>
            <div className="bg-white p-3 rounded">
              <h3 className="font-semibold mb-3 text-black px-2">
                {getLocaleString("common_text")} 2:
              </h3>
              <textarea
                className="w-full text-black font-medium h-[calc(50vh-12rem)] overflow-auto px-2 py-1 border-2 border-gray-400 rounded-md"
                value={content2}
                onChange={(e) => setContent2(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white p-3 rounded">
          <h3 className="font-semibold mb-3 text-black px-2">
            {getLocaleString("common_difference")}:
          </h3>
          <Typography className="font-medium h-[calc(50vh-12rem)] overflow-auto px-2 py-1">
            {differences}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RandomTextCompare;

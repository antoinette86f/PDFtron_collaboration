import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import WebViewer from "@pdftron/webviewer";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { startLoading, finishLoading } from "../../redux/actions";
import { SpinnerContainer } from "../../components/SpinnerContainer";
import { Typography } from "@mui/material";

const RandomPDFCompare = () => {
  const { t } = useTranslation();
  const viewerRef = useRef(null);
  const [instance, setInstance] = useState(null);
  const { language } = i18next;
  const dispatch = useDispatch();
  const [isUploaded, setIsUploaded] = useState(false);
  const [isComparing, setIsComparing] = useState(false);

  useEffect(() => {
    const initViewer = async () => {
      try {
        const instance = await WebViewer(
          {
            path: "/webviewer/lib",
            fullAPI: true,
            licenseKey: "demo:1733762057552:7ed577b4030000000021c2547b221caaa8034b12df9500f1a11ef76a43",
          },
          viewerRef.current
        );

        setInstance(instance);
        const { UI, Core } = instance;
        UI.setLanguage(language);
        UI.enableFeatures([UI.Feature.ComparePages]);
        UI.disableFeatures([UI.Feature.Annotations]);
        UI.enterMultiViewerMode();

        // Track document loading
        UI.addEventListener(UI.Events.MULTI_VIEWER_READY, () => {
          const [documentViewer1, documentViewer2] = Core.getDocumentViewers();

          const checkDocuments = () => {
            const shouldCompare = documentViewer1.getDocument() && documentViewer2.getDocument();
            setIsUploaded(shouldCompare);
          };

          documentViewer1.addEventListener('documentLoaded', checkDocuments);
          documentViewer2.addEventListener('documentLoaded', checkDocuments);
          documentViewer1.addEventListener('documentUnloaded', checkDocuments);
          documentViewer2.addEventListener('documentUnloaded', checkDocuments);
        });

      } catch (error) {
        console.error("Error initializing WebViewer:", error);
      }
    };
    initViewer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (instance) {
      instance.UI.setLanguage(language);
    }
  }, [instance, language]);

  const handleCompare = async () => {
    if (!instance || !isUploaded || isComparing) return;

    try {
      setIsComparing(true);
      dispatch(startLoading());
      const { Core } = instance;
      const [documentViewer1, documentViewer2] = Core.getDocumentViewers();

      // Start semantic comparison
      const { diffCount } = await documentViewer1.startSemanticDiff(documentViewer2);
      dispatch(finishLoading());
      setIsComparing(false);

    } catch (error) {
      console.error("Error during semantic comparison:", error);
      setIsComparing(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-3">
        <div className="flex items-center justify-between mx-7 my-5">
          <div className="flex items-center">
            <Typography variant="h5">
              {t("PDF_comparison_page_title")}
            </Typography>
          </div>

          <button
            onClick={handleCompare}
            disabled={!isUploaded || isComparing}
            className={`px-4 py-2 rounded-md font-medium transition-colors
              ${isUploaded && !isComparing
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isComparing ? t("common_in_progress_of_comparison") : t("modal_compare_documents")}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div ref={viewerRef} className="h-[calc(100vh-200px)]" />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {t("common_table_status")}:
          </span>
          <span className={`text-sm font-medium ${isUploaded ? 'text-green-600' : 'text-amber-600'}`}>
            {isComparing
              ? t("common_footer_in_progress_of_comparison")
              : isUploaded
                ? t("common_ready_to_compare")
                : t("common_waiting_for_documents")}
          </span>
        </div>
      </div>
      <SpinnerContainer />
    </div>
  );
};

export default RandomPDFCompare;
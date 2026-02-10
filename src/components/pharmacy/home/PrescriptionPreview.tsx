import { useState } from "react";
import type { Prescription } from "@/types/order";

function ReportIssueDialog({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reason: string, details: string) => void;
}) {
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  if (!isOpen) return null;

  const reasons = [
    "Prescription image is unclear",
    "Prescription is expired",
    "Medication name or dosage is unclear",
    "Missing requires information",
    "Other",
  ];

  const handleSubmit = () => {
    if (selectedReason) {
      onSubmit(selectedReason, details);
      setSelectedReason("");
      setDetails("");
      onClose();
    }
  };

  const handleCancel = () => {
    setSelectedReason("");
    setDetails("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">
          Reason for request new prescription
        </h2>

        <div className="space-y-3 mb-4">
          {reasons.map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="reason"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {reason}
              </span>
            </label>
          ))}
        </div>

        {selectedReason === "Other" && (
          <div className="mb-4">
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Please describe why the prescription is unclear"
              maxLength={250}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-1">{details.length}/250 characters</p>
          </div>
        )}

        <div className="flex flex-col gap-2 mt-6">
          <button
            onClick={handleSubmit}
            disabled={!selectedReason}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
          <button
            onClick={handleCancel}
            className="w-full py-3 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export function PrescriptionPreview({
  prescriptions,
}: {
  prescriptions: Prescription[];
}) {
  const [selectedPrescription, setSelectedPrescription] =
    useState<Prescription | null>(null);

  const mainPrescription = prescriptions[0];

  if (!mainPrescription) {
    return (
      <div className="text-center py-8 text-gray-500">
        No prescriptions available
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <div
          className="relative rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
          onClick={() => setSelectedPrescription(mainPrescription)}
        >
          <img
            src={mainPrescription.imageUrl}
            alt="Prescription"
            className="w-full h-auto object-contain transition-transform group-hover:scale-105"
          />
          {mainPrescription.reviewed && (
            <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1.5 shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {prescriptions.length > 1 && (
          <div className="grid grid-cols-4 gap-2">
            {prescriptions.slice(1, 5).map((prescription) => (
              <div
                key={prescription.id}
                onClick={() => setSelectedPrescription(prescription)}
                className="cursor-pointer rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-colors overflow-hidden aspect-square"
              >
                <img
                  src={prescription.imageUrl}
                  alt="Prescription"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedPrescription && (
        <PrescriptionViewer
          prescription={selectedPrescription}
          onClose={() => setSelectedPrescription(null)}
        />
      )}
    </>
  );
}

export function PrescriptionViewer({
  prescription,
  onClose,
  orderNumber,
  customerName,
}: {
  prescription: Prescription;
  onClose: () => void;
  orderNumber?: string;
  customerName?: string;
}) {
  const [zoom, setZoom] = useState(50);
  const [rotation, setRotation] = useState(0);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 25));
  const handleRotate = () => setRotation((prev) => (prev + 90) % 360);
  const handleFitToScreen = () => {
    setZoom(50);
    setRotation(0);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = prescription.imageUrl;
    link.download = `prescription-${prescription.id}.jpg`;
    link.click();
  };

  const handleReportIssue = (reason: string, details: string) => {
    // Handle the report submission here
    console.log("Report submitted:", { reason, details, prescriptionId: prescription.id });
    // You can add your API call or state management logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col">
      <div className="bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">
            Order #{orderNumber}
          </span>
          <span className="font-semibold text-gray-900">
            {customerName}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download
          </button>
          <button 
            onClick={() => setIsReportDialogOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Report Issue
          </button>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Close"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-hidden bg-gray-900 relative">
        <div className="w-full h-full flex items-center justify-center p-8">
          <img
            src={prescription.imageUrl}
            alt="Prescription"
            className="max-w-full max-h-full object-contain transition-all duration-300 shadow-2xl rounded-lg"
            style={{
              transform: `scale(${zoom / 50}) rotate(${rotation}deg)`,
              transformOrigin: "center",
            }}
          />
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg flex items-center gap-1 px-2 py-2">
          <button
            onClick={handleZoomOut}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Zoom Out"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>

          <div className="px-4 py-1 min-w-[60px] text-center">
            <span className="text-sm font-medium text-gray-700">{zoom}%</span>
          </div>

          <button
            onClick={handleZoomIn}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Zoom In"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>

          <div className="w-px h-6 bg-gray-300 mx-1" />

          <button
            onClick={handleFitToScreen}
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            Fit To Screen
          </button>
        </div>
      </div>

      {prescription.reviewed && (
        <div className="bg-gray-800 px-6 py-3 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-green-400">Reviewed</span>
            {prescription.reviewedBy && (
              <span>
                by {prescription.reviewedBy}
                {prescription.reviewedAt &&
                  ` on ${new Date(prescription.reviewedAt).toLocaleDateString()}`}
              </span>
            )}
          </div>
        </div>
      )}

      <ReportIssueDialog
        isOpen={isReportDialogOpen}
        onClose={() => setIsReportDialogOpen(false)}
        onSubmit={handleReportIssue}
      />
    </div>
  );
}

export default PrescriptionPreview;

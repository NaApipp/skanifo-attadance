"use client";

import { useEffect } from "react";

type failedLoginProps = {
  open: boolean;
  title?: string;
  message?: string;
  buttonText?: string;
  onButtonClick?: () => void; // biasanya "Try Again"
  onClose?: () => void;       // klik overlay / tekan ESC
};

export default function FailedLogin({
  open,
  title = "FAILED",
  message = "Login failed, please try again!",
  buttonText = "Try Again",
  onButtonClick,
  onClose,
}: failedLoginProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={() => onClose?.()} // klik luar -> tutup
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()} // klik card -> jangan tutup
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-500">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold tracking-wide text-red-600">
            {title}
          </h2>

          <p className="mt-2 text-sm text-blue-500">{message}</p>

          <button
            type="button"
            className="mt-6 w-48 rounded-xl bg-blue-600 py-2.5 text-white shadow hover:bg-blue-700 active:scale-[0.99]"
            onClick={onClose}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

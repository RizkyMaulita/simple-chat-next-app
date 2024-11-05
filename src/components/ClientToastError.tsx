"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientToastError() {
  const searchParams = useSearchParams();
  const errors = searchParams.get("errors")?.split(",") || [];
  const [showToast, setShowToast] = useState(errors.length != 0);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  if (!showToast) return null;

  return (
    <div className="toast toast-top toast-end">
      {errors.map((err, idx) => (
        <div
          key={idx}
          className="alert alert-error transition-opacity duration-500 ease-out animate-in fade-in"
          onClick={() => setShowToast(false)}
        >
          <span>{err}</span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect } from "react";

function isEditable(target: EventTarget | null) {
  return (
    target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
  );
}

export default function CopyGuard() {
  useEffect(() => {
    const block = (event: Event) => event.preventDefault();
    const blockClipboard = (event: ClipboardEvent) => {
      if (!isEditable(event.target)) event.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("copy", blockClipboard);
    document.addEventListener("cut", blockClipboard);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("copy", blockClipboard);
      document.removeEventListener("cut", blockClipboard);
    };
  }, []);

  return null;
}

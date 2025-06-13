"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface UIInputProps {
  placeholder?: string;
  value?: string;
  warning?: boolean;
  className?: string;
  onUpdate?: (value: string) => void;
}

export default function UIInput({ placeholder, value = "", className = '', warning = false, onUpdate }: UIInputProps) {
  const [textInput, setTextInput] = useState(value);

  // useEffect(() => {
  //   setTextInput(value);
  // }, [value]);

  useEffect(() => {
    onUpdate?.(textInput);
  }, [textInput]);

  return (
    <input
      style={warning ? { border: "1.5px solid #E53935" } : {}}
      className={clsx(
        `ui-input w-full bg-section_bg_color text-text_color box-border h-[48px] rounded-[12px] border-none px-[16px] text-[17px] outline-none placeholder:opacity-60 ${className}`
      )}
      placeholder={placeholder}
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
    />
  );
}
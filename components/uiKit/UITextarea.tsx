"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface UITextAreaProps {
  placeholder?: string;
  value?: string;
  warning?: boolean;
  className?: string;
  onUpdate?: (value: string) => void;
}

export default function UITextArea({ placeholder, className = '', value = "", warning = false, onUpdate }: UITextAreaProps) {
  const [textInput, setTextInput] = useState(value);

  // useEffect(() => {
  //   setTextInput(value);
  // }, [value]);

  useEffect(() => {
    onUpdate?.(textInput);
  }, [textInput]);

  return (
    <textarea
      style={warning ? { border: "1.5px solid #E53935" } : {}}
      className={clsx(
        "ui-input w-full resize-none pt-[10px] bg-section_bg_color text-text_color box-border  rounded-[12px] border-none px-[16px] text-[17px] outline-none placeholder:opacity-60"
      ) + " " + className}
      placeholder={placeholder}
      value={textInput}
      onChange={(e) => setTextInput(e.target.value)}
    />
  );
}
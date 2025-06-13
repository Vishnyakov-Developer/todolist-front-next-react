"use client";
import { useEffect } from "react";
import { useTelegram } from "@/lib/useTelegram";

interface Props {
  text: string;
  onClick: () => void;
}

export function MainButton({ text, onClick }: Props) {
  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;
    tg.MainButton.setText(text);
    tg.MainButton.show();
    tg.MainButton.onClick(onClick);

    return () => {
      tg.MainButton.offClick(onClick);
      tg.MainButton.hide();
    };
  }, [tg, text, onClick]);

  return null;
}
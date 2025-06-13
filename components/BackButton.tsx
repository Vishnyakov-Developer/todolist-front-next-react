"use client";
import { useEffect } from "react";
import { useTelegram } from "@/lib/useTelegram";

interface Props {
  onClick: () => void;
}

export function BackButton({ onClick }: Props) {
  const tg = useTelegram();

  useEffect(() => {
    if (!tg) return;
    tg.BackButton.show();
    tg.BackButton.onClick(onClick);

    return () => {
      tg.BackButton.offClick(onClick);
      tg.BackButton.hide();
    };
  }, [tg, onClick]);

  return null;
}
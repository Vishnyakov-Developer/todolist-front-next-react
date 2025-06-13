"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTelegram } from "@/lib/useTelegram";

interface MainButtonConfig {
  text: string;
  onClick: () => void;
}

const TelegramMainButtonContext = createContext<{
  setMainButton: (config: MainButtonConfig | null) => void;
}>({ setMainButton: () => {} });

export const useTelegramMainButton = () =>
  useContext(TelegramMainButtonContext);

export function TelegramMainButtonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tg = useTelegram();

  const [text, setText] = useState<string | null>(null);
  const onClickRef = useRef<() => void>(() => {});
  const lastHandlerRef = useRef<() => void | null>(null);

  useEffect(() => {
    if (!tg) return;

    if (!text) {
      tg.MainButton.hide();
      if (lastHandlerRef.current) tg.MainButton.offClick(lastHandlerRef.current);
      lastHandlerRef.current = null;
      return;
    }

    tg.MainButton.setText(text);
    tg.MainButton.show();

    const handler = () => {
      onClickRef.current?.();
    };

    if (lastHandlerRef.current) tg.MainButton.offClick(lastHandlerRef.current);
    tg.MainButton.onClick(handler);
    lastHandlerRef.current = handler;

    return () => {
      if (lastHandlerRef.current) {
        tg.MainButton.offClick(lastHandlerRef.current);
        lastHandlerRef.current = null;
      }
    };
  }, [text, tg]);

  const setMainButton = (config: MainButtonConfig | null) => {
    if (!config) {
      setText(null);
      onClickRef.current = () => {};
    } else {
      setText(config.text);
      onClickRef.current = config.onClick;
    }
  };

  return (
    <TelegramMainButtonContext.Provider value={{ setMainButton }}>
      {children}
    </TelegramMainButtonContext.Provider>
  );
}

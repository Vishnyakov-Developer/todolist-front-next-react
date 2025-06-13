
import { useEffect, useState } from "react";

declare global {
  interface Window {
    // @ts-ignore
    Telegram: {};
  }
}

export function useTelegram() {
  const [tg, setTg] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      setTg(window.Telegram.WebApp);
    }
  }, []);

  return tg;
}

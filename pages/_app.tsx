import "@/styles/globals.css";
import type { AppProps } from "next/app";
import requestValidate from "../requests/requestValidate";
import { ToasterProvider } from "@/lib/ToasterContext";
import { Provider } from 'react-redux';
import { store } from '@/store';

declare global {
  // interface Window {
  //   Telegram?: {
  //     WebApp?: {
  //       initData?: string;
  //     };
  //   };
  // }
  
  var Telegram: {
    WebApp?: {
      initData?: string;
    };
  };
}

export default function App({ Component, pageProps }: AppProps) {
  requestValidate({initData: globalThis?.Telegram?.WebApp?.initData});  
  return <ToasterProvider>
    <script src="https://telegram.org/js/telegram-web-app.js"/>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ToasterProvider>
}

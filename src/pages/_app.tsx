import "@/styles/reset.scss";
import "@/styles/globals.scss";
import type {AppProps} from "next/app";
import {ptSans} from "@/styles/fonts";

export default function App({Component, pageProps}: AppProps) {
  return (
    <div className={ptSans.className}>
      <Component {...pageProps} />
    </div>
  );
}

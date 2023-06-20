import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import OffsetObserver from "../utils/offset-observer";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <SizeObserver>
        <OffsetObserver>
          <Component {...pageProps} />
          <Analytics />
        </OffsetObserver>
      </SizeObserver>
    </ScrollObserver>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import OffsetObserver from "../utils/offset-observer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <SizeObserver>
        <OffsetObserver>
          <Component {...pageProps} />
        </OffsetObserver>
      </SizeObserver>
    </ScrollObserver>
  );
}

export default MyApp;

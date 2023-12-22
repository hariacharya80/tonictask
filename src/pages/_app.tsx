import { ThemeProvider } from "@/components/resuables/theme-provider";
import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />{" "}
      </ThemeProvider>
    </Provider>
  );
}

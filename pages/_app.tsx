import { AppProps } from 'next/app';
import ThemeProvider from '@src/theme/ThemeProvider';
import GlobalStyle from "@src/theme/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

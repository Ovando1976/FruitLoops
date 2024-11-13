// pages/_app.tsx
import type { AppProps } from 'next/app'; // Import the AppProps type
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) { // Use the AppProps type
  return <Component {...pageProps} />;
}

export default MyApp;
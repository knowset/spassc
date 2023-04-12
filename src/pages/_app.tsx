import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Loading } from '../components/Loading';

// next: 13.2.4

export default function App({ Component, pageProps }: AppProps) {
  const loading = Loading();

  if (loading) {
    return loading;
  }

  return (
    <>
    <Component {...pageProps} />;
    </>
  );
}

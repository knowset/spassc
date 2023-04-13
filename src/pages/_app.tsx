import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"

interface CustomAppProps extends AppProps {
  adminProps? : {
    update?: boolean;
    delete?: boolean;
    toggleUpdate?: any;
    toggleDelete?: any;
  }
}

export default function App({ Component, pageProps, adminProps }: CustomAppProps) {
  return (
    <>
    <Component {...pageProps} {...adminProps} />
    </>
  );
}

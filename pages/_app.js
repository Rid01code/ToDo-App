import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (<>
    <Head>
      <title>
        To Do
      </title>
    </Head>
    <Component {...pageProps} />
  </>);
}

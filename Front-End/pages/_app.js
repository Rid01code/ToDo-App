import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../Store';

export default function App({ Component, pageProps }) {
  return (<>
    <Head />
    <Provider store={store}>
      <Component {...pageProps} />

    </Provider>
    
  </>);
}

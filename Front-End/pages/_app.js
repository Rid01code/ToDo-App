import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../Store'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import LogIn from './LogIn';
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (<>
    <Head />
    <Provider store={store}>
      <Component {...pageProps} />

    </Provider>
    
  </>);
}

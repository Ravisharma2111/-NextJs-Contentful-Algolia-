// _app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.scss'; // Import your global SCSS styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
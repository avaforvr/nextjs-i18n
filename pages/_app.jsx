import App from 'next/app';
import { appWithTranslation } from 'utils/i18n';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    appProps.pageProps.namespacesRequired = appProps.pageProps.namespacesRequired || ['common'];
    return { ...appProps }
}

export default appWithTranslation(MyApp);

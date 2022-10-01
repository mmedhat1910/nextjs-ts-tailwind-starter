import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <div dir={locale === 'en' ? 'ltr' : 'rtl'}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);

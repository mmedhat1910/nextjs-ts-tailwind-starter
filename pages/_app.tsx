import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (
      window.localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setLoading(false);
  }, []);

  return (
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(MyApp);

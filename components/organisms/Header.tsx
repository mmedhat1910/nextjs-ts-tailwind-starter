import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <header>
      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="ar">🇪🇬 Arabic</option>
      </select>

      <style jsx>{`
        a {
          margin-right: 0.5rem;
        }

        a.active {
          color: blue;
        }

        nav {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </header>
  );
};

export default Header;

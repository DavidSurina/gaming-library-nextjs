import React, { Fragment } from "react";
import Head from "next/head";

interface RootLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Gaming library</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal app to learn Next.js13 Tailwind css and Firebase/Firestore"
        />
      </Head>
      <main>{children}</main>
    </Fragment>
  );
}

export default MainLayout;

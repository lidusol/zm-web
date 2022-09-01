import React from "react";
import Head from "next/head";
import Script from "next/script";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          ZM TRADING S.C &#8211; We Prosper Together, We Prosper on Purpose
        </title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;

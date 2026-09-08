import Script from "next/script";
import { doctor } from "@/data/doctor";

export default function GoogleAnalytics() {
  const gadsId = doctor.gadsId || "AW-16510998828";
  const gaId = doctor.ga4Id || "G-KYL44SW6R7";
  const gtmId = doctor.gtmId || "GTM-5VLKT6Q9";

  return (
    <>
      {/* Google Tag Manager (noscript) - Colocado justo después del <body> de apertura */}
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}

      {/* Etiqueta Google Ads */}
      {gadsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gadsId}`}
            strategy="beforeInteractive"
          />
          <Script id="google-ads" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gadsId}');
            `}
          </Script>
        </>
      )}

      {/* Etiqueta Google Analytics */}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="beforeInteractive"
          />
          <Script id="google-analytics" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {/* Etiqueta head Google Tag Manager */}
      {gtmId && (
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}
    </>
  );
}


import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

const SEO = ({
  title = "VIP Protocol Services Kenya | Executive Protection & Event Security - Sir Ole VVIP",
  description = "Leading VIP protocol, executive protection, corporate security, and event management company in Kenya. Professional bodyguard services, VIP transport, diplomatic protocol, and close protection in Nairobi. ISO certified security solutions.",
  keywords = "VIP protocol services Kenya, executive protection Nairobi, bodyguard services Kenya, corporate security Nairobi, VIP transport Kenya, close protection officer Kenya, event security services, diplomatic protocol Kenya, presidential security Kenya, VIP security company Nairobi, executive protection services, professional bodyguard Kenya, security services Nairobi, VIP escort services, corporate event security Kenya, high profile security Kenya, personal protection Kenya, security consultancy Kenya, risk assessment services Kenya, threat analysis Kenya",
  image = "https://sirolevvipprotocol.com/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png",
  url = "https://sirolevvipprotocol.com/",
  type = "website",
  schemaData
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sir Ole VVIP Protocol Ltd" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Language and Location */}
      <meta name="language" content="en" />
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="geo.position" content="-1.286389;36.817223" />
      <meta name="ICBM" content="-1.286389, 36.817223" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:site_name" content="Sir Ole VVIP Protocol Ltd" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />
      <meta name="expires" content="never" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Schema Data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

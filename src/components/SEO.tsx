
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
  title = "Sir Ole VVIP Protocol Ltd - Premier Luxury Protocol & VIP Services in Nairobi",
  description = "Leading luxury protocol, VIP security, ushering, and hospitality company in Nairobi. Offering distinguished event management, diplomatic protocol, and premium concierge services with unmatched sophistication.",
  keywords = "VIP protocol services Nairobi, luxury event management Kenya, diplomatic protocol services, VIP security Nairobi, corporate event ushering, premium hospitality services, luxury concierge Kenya",
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
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

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

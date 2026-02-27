import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_URL = 'https://growright.sourojit.com';
const DEFAULT_TITLE = 'GrowRight – Child Development Tracker';
const DEFAULT_DESCRIPTION =
  'Track your child\'s development milestones, activities, vaccinations, and compare school syllabi across CBSE, ICSE, and IB boards. Free for ages 0–5.';

export default function SEO({ title, description, path }: SEOProps) {
  const pageTitle = title ? `${title} | GrowRight` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonical = path ? `${BASE_URL}${path}` : undefined;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      {canonical && <meta property="og:url" content={canonical} />}
    </Helmet>
  );
}

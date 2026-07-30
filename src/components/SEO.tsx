import { Helmet } from "react-helmet-async";
import React from "react";

export const SITE_URL = "https://azmisal.in";

type Props = {
    title: string;
    description?: string;
    url?: string;
    image?: string;
    canonical?: string;
    jsonLd?: Record<string, any> | null;
};

function absoluteUrl(pathOrUrl: string) {
    if (/^https?:\/\//i.test(pathOrUrl)) {
        return pathOrUrl;
    }

    return new URL(pathOrUrl, SITE_URL).toString();
}

export default function SEO({ title, description, url = "/", image = "/og-image.png", canonical, jsonLd = null }: Props) {
    const absoluteCanonical = canonical ? absoluteUrl(canonical) : undefined;
    const absolutePageUrl = absoluteUrl(url);
    const absoluteImage = absoluteUrl(image);

    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={absolutePageUrl} />
            <meta property="og:image" content={absoluteImage} />
            <meta name="twitter:card" content="summary_large_image" />
            {absoluteCanonical && <link rel="canonical" href={absoluteCanonical} />}
            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
}

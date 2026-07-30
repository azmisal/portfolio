import { Helmet } from "react-helmet-async";
import React from "react";

type Props = {
    title: string;
    description?: string;
    url?: string;
    image?: string;
    canonical?: string;
    jsonLd?: Record<string, any> | null;
};

export default function SEO({ title, description, url = "/", image = "/og-image.png", canonical, jsonLd = null }: Props) {
    return (
        <Helmet>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            <meta property="og:title" content={title} />
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            {canonical && <link rel="canonical" href={canonical} />}
            {jsonLd && (
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            )}
        </Helmet>
    );
}

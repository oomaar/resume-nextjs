import Head from "next/head";

export const HeadTag = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>

            {/* Favicon */}
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

            {/* Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
    );
};
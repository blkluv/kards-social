import Head from 'next/head';
import React from 'react';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Color } from '../../constants/Colors';
import { TPageLayout } from '../../constants/Types/Page.types';

export default function Layout({
    title,
    description,
    robots,
    children,
}: TPageLayout) {
    const { t } = useTranslation('components');
    return (
        <>
            <Head>
                <title>
                    {title ? `${title} - Kards` : 'Kards: Socially Social'}
                </title>

                <link
                    rel="manifest"
                    href="/app.webmanifest"
                    type="application/manifest+json"
                />

                <meta name="application-name" content="Kards" />
                <meta name="theme-color" content={Color.Tint} />

                <link rel="apple-touch-icon" href="/images/icon_192x192.png" />

                <meta name="charset" content="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, minimum-scale=1"
                />
                <meta name="robots" content={robots ?? 'index, follow'} />

                <meta
                    name="title"
                    content={
                        title ? `${title} - Kards` : 'Kards: Socially Social'
                    }
                />

                <meta
                    name="og:title"
                    content={
                        title ? `${title} - Kards` : 'Kards: Socially Social'
                    }
                />
                <meta name="og:type" content="website" />
                <meta name="og:url" content="https://healxyz.com/" />
                <meta
                    name="og:image"
                    itemProp="image primaryImageOfPage"
                    content="https://healxyz.com/Logo.png"
                />
                <meta
                    name="og:site_name"
                    content={
                        title ? `${title} - Kards` : 'Kards: Socially Social'
                    }
                />

                <meta
                    name="twitter:title"
                    content={
                        title ? `${title} - Kards` : 'Kards: Socially Social'
                    }
                />
                <meta name="twitter:card" content="summary" />

                <meta
                    name="description"
                    content={
                        description ??
                        'Kards is an open social media platform, free from abusive data harvesting and damaging algorithms. Join the waitlist now!'
                    }
                />
                <meta
                    name="og:description"
                    content={
                        description ??
                        'Kards is an open social media platform, free from abusive data harvesting and damaging algorithms. Join the waitlist now!'
                    }
                />
                <meta
                    name="twitter:description"
                    content={
                        description ??
                        'Kards is an open social media platform, free from abusive data harvesting and damaging algorithms. Join the waitlist now!'
                    }
                />
            </Head>
            <div id="app-container">{children}</div>
            <footer>
                &copy; {`${new Date().getFullYear()} `}
                <Link href="https://theopensource.company">
                    The Open Source Company
                </Link>
                , {t('layout.footer.all-rights-reserved')}.
            </footer>
        </>
    );
}

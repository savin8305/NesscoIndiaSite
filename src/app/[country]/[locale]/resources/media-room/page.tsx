import Pages from "@/components/media-room/Pages";
import { MediaRoomItem } from "@/components/media-room/types/constant";
import { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
const apiUrl = "https://jsondatafromhostingertosheet.nesscoindustries.com/";
const locales = ["en", "fr", "nl", "de", "es", "hi", "ta"] as const;
type Props = {
  params: { locale: string };
};
// Revalidate every 60 seconds (or any time period you prefer)
export const revalidate = 60;
// Fetch home data based on the locale
async function fetchmediaRoomData(locale: string): Promise<MediaRoomItem | null> {
  try {
    const res = await fetch(`${apiUrl}${locale}/mediaroom.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    const fallbackRes = await fetch(`${apiUrl}en/mediaroom.json`, {
      cache: "no-store", // Ensures no caching for the fallback as well
    });
    const data = await fallbackRes.json();
    return data;
  }
}

// Dynamically generate metadata using the fetched SEO data
export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // Fallback to "en" if the locale isn't supported
  if (!locales.includes(locale as any)) {
    locale = "en";
  }

  const mediaRoomData = await fetchmediaRoomData(locale);

  if (!mediaRoomData) {
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "default, keywords",
      openGraph: {
        title: "Default OG Title",
        description: "Default OG Description",
        images: [
          {
            url: "/default-image.webp",
            alt: "Default Image Alt",
          },
        ],
      },
      robots: "index, follow",
      alternates: {
        canonical: "https://www.default.com",
      },
      twitter: {
        card: "summary_large_image",
        site: "@DefaultTwitter",
        title: "Default Twitter Title",
        description: "Default Twitter Description",
      },
    };
  }

  const seoData = mediaRoomData?.MediaRoom[0]?.mediaRoomSeoData;

  return {
    title: seoData?.title,
    description: seoData?.description,
    keywords: seoData?.keywords,
    openGraph: {
      title: seoData?.openGraph?.title,
      description: seoData?.openGraph?.description,
      images: seoData?.openGraph?.images?.map(
        (image: { url: string; alt: string }) => ({
          url: image.url,
          alt: image.alt,
        })
      ),
    },
    robots: seoData?.robots,
    alternates: {
      canonical: seoData?.alternates?.canonical,
    },
  };
}

// Home component rendering the MainLayout with fetched data
export default async function about({ params: { locale } }: Props) {
  // Set default locale if not in supported list
  if (!locales.includes(locale as any)) {
    locale = "en"; // Fallback to English
  }

  // Set the locale for the request
  unstable_setRequestLocale(locale);

  // Fetch home data based on the locale
  const mediaRoomData = await fetchmediaRoomData(locale);

  // Fetch translations based on the locale
  const t = await getTranslations({ locale });

  if (!mediaRoomData) {
    return <p>{t("failedToLoadData")}</p>;
  }

  return (
    <main>
      <Pages mediaRoomData={mediaRoomData}/>
    </main>
  );
}

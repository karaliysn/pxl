import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KARALIYSINN — Creative Portfolio",
  description:
    "KARALIYSINN — A cinematic creative portfolio showcasing video production, photography, and digital craft.",
  keywords: ["portfolio", "creative", "video production", "photography", "digital", "KARALIYSINN"],
  openGraph: {
    title: "KARALIYSINN — Creative Portfolio",
    description: "Cinematic creative portfolio showcasing video production, photography, and digital craft.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}

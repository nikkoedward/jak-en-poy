import { Barlow_Semi_Condensed } from "next/font/google";
import "@styles/globals.css";
import { ReduxProvider } from "@redux/provider";

const barlow = Barlow_Semi_Condensed({
  style: "normal",
  fallback: ["Arial"],
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jak En Poy",
  description: "Rock, Paper and Scissors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/jakenpoy.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={`${barlow.className} bg-gradient-radial bg-blue-main`}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

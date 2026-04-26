import { Geist, Geist_Mono, Zen_Maru_Gothic, Noto_Sans_JP } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-zen-maru-gothic',
});

export const notoSansJp = Noto_Sans_JP({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: "--font-noto-sans-jp-font",
});

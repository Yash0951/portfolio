import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Meena — Product, Programs & Technology",
  description: "Yash Meena works across product management, program execution and technology to turn messy problems into clear, buildable directions.",
};

export const viewport: Viewport = {
  themeColor: "#11120f",
  colorScheme: "dark light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}


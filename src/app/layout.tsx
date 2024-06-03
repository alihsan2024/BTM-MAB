import "@/styles/globals.css";

import { Metadata } from "next";
import { Provider } from "react-redux";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import HeaderTop from "@/components/Headers/HeaderTop";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", fontSans.className)}>
        <Providers>
          <HeaderTop />
          {children}
          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}

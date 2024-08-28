import "./globals.css";
import "@uploadthing/react/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toast-provider";

import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { ConfettiProvider } from "@/components/providers/confetti-providers";
// import Footer from "./(dashboard)/_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atsatra Learning System",
  description:"The Learning Management System that holds the weight of your knowledge",
  icons: [
		{
			url: '/logo.svg',
			href: '/logo.svg'
		}
	]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <ConfettiProvider />
          <ToastProvider />
          {children}
          
        </body>
      </html>
    </ClerkProvider>
  );
}

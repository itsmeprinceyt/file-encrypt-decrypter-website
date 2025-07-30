import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loader from "../(components)/Loader";

export const metadata: Metadata = {
  metadataBase: new URL('https://file-encrypt-decrypter-website.vercel.app/'),
  title: "File Encrypter / Decrypter by ItsMe Prince",
  description:   "A powerful offline tool to securely encrypt and decrypt any file using AES-256-GCM encryption. No data leaves your machine.",
  applicationName: "File Encrypter / Decrypter",
  authors: [{ name: "ItsMe Prince", url: "https://github.com/itsmeprince" }],
  creator: "ItsMe Prince",
  keywords: [
    "AES-256",
    "file encryption",
    "file decryption",
    "GCM",
    "offline security tool",
    "secure file transfer",
    "privacy",
    "encryption app"
  ],
  icons: {
    icon: "/logo-png.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased select-none`}>
        <Suspense fallback={<Loader/>}>
        {children}
        </Suspense>
      </body>
    </html>
  );
}

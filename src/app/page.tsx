"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, PlayCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center p-5 py-10"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Footer */}

      <Link
        href="https://portfolio-itsmeprince.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs">
        Made by 💙 @itsmeprinceyt
      </Link>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-5  max-w-6xl w-full">

        {/* Logo */}
        <div className="w-full max-w-md">
          <Image
            src="/logo-png.png"
            alt="App Logo"
            width={500}
            height={500}
            className="object-contain rounded-xl transition-transform duration-1000 hover:scale-110 animate-float"
          />
        </div>

        {/* Glass Card Content */}
        <div className="w-full max-w-2xl bg-white/0 border border-white/20 backdrop-blur-md shadow-2xl text-white rounded-xl p-5">
          <div className="p-5 space-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              File Encrypter / Decrypter
            </h1>

            <p className="leading-relaxed tracking-wide text-white/80 text-xs">
              File Encrypter & Decrypter wraps any file in bank‑grade AES‑256‑GCM security with a single click.<br /><br />
              Pick Encrypt or Decrypt, choose your file, set a password, and the app does the rest—no command‑line fuss.<br /><br />
              Everything runs locally, so your data never leaves your machine. Share the resulting “.prince” file confidently and unlock it just as easily.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="https://www.dropbox.com/scl/fo/0tr3x1bifvo2g18yq8zku/ABWyAsNld_nXTPmNdtXGsUw?rlkey=axk51504gb378ahjajhgceefj&st=8keenkhp&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-3 py-1.5 text-lime-950 font-semibold rounded-md bg-gradient-to-r from-lime-500 to-lime-600 border border-lime-600 hover:border-lime-500 shadow-xl hover:shadow-lime-600/30 shadow-lime-600/20 transition-all duration-300 "
              >
                <Download className="w-4 h-4" />
                Download
              </Link>

              <Link
                href="https://www.youtube.com/watch?v=e7MSCbvnSZs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-3 py-1.5 text-white font-semibold rounded-md bg-gradient-to-r from-blue-700 to-blue-900 border border-blue-700 hover:border-blue-600 shadow-xl hover:shadow-blue-600/30 shadow-blue-600/20 transition-all duration-300"
              >
                <PlayCircle className="w-4 h-4" />
                Watch Video
              </Link>

              <Link
                href="https://github.com/itsmeprinceyt/file-encrypt-decrypter-website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-3 py-1.5 text-white font-semibold rounded-md bg-gradient-to-r from-stone-800 to-stone-900 border border-stone-800 hover:border-stone-700 shadow-xl hover:shadow-stone-600/30 shadow-stone-600/20 transition-all duration-300"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </Link>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

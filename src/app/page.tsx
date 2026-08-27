"use client";
import Image from "next/image";
import Link from "next/link";
import { Download, LucidePlay, Lock, ShieldCheck, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Divider from "../(components)/Divider";

const features = [
  {
    icon: ShieldCheck,
    title: "AES-256-GCM",
    desc: "Authenticated encryption, no shortcuts.",
  },
  {
    icon: Lock,
    title: "Password protected",
    desc: "You decide your own password to encrypt.",
  },
  {
    icon: Cpu,
    title: "Runs locally",
    desc: "No servers, no uploads, no tracking. Everything in your control.",
  },
];

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-center p-5 py-16 text-stone-200"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 max-w-6xl w-full">
        {/* Logo */}
        <Link
          href="https://www.youtube.com/watch?v=e7MSCbvnSZs"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs md:max-w-md shrink-0 group"
        >
          <Image
            src="/logo-png.png"
            alt="File Encrypter & Decrypter logo"
            width={500}
            height={500}
            className="object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-rotate-1"
          />
        </Link>

        {/* Glass Card Content */}
        <div className="w-full max-w-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/40 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-sky-600">
              <Lock className="w-3 h-3" />
              Local-first file encryption
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              File Encrypter / Decrypter
            </h1>
          </div>

          <p className="leading-relaxed text-sm text-stone-300/90">
            Wraps any file in bank-grade AES-256-GCM security with a single
            click. Pick Encrypt or Decrypt, choose your file, set a password —
            the app does the rest, no command-line fuss.
          </p>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-3 space-y-1.5"
              >
                <Icon className="w-4 h-4 text-sky-400" />
                <p className="text-xs font-semibold text-stone-100">{title}</p>
                <p className="text-[11px] leading-snug text-stone-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-stone-400 leading-relaxed border-l-2 border-sky-500/40 pl-3">
            Everything runs on your machine — your data never leaves it. Share
            the resulting{" "}
            <code className="text-stone-300 font-mono">.prince</code> file
            confidently and unlock it just as easily.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="https://github.com/itsmeprinceyt/file-encrypt-decrypter/releases/tag/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-sky-950 font-semibold rounded-md bg-gradient-to-r from-sky-500 to-sky-600 border border-sky-600 hover:border-sky-400 shadow-lg hover:shadow-sky-600/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Download className="w-4 h-4" />
              Download
            </Link>

            <Link
              href="https://www.youtube.com/watch?v=e7MSCbvnSZs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-red-700 to-red-900 border border-red-700 hover:border-red-500 shadow-lg hover:shadow-red-600/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <LucidePlay className="w-4 h-4" />
              Watch Video
            </Link>

            <Divider />

            <Link
              href="https://github.com/itsmeprinceyt/file-encrypt-decrypter-website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-white/5 border border-white/15 hover:border-white/30 hover:bg-white/10 shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <FaGithub className="w-4 h-4" />
              Website Repo
            </Link>

            <Link
              href="https://github.com/itsmeprinceyt/file-encrypt-decrypter/tree/main/electron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-white/5 border border-white/15 hover:border-white/30 hover:bg-white/10 shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <FaGithub className="w-4 h-4" />
              Software Repo
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Link
        href="https://www.itsmeprince.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-10 text-xs text-stone-400 hover:text-stone-200 transition-colors"
      >
        Made by @itsmeprinceyt
      </Link>
    </main>
  );
}

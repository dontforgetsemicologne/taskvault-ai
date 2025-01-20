import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaskVault AI",
  description: "Decentralized To-Do Application with AI Integration is a dApp merging blockchain security with AI-driven task management. Built with Next.js, Nest.js, and Solidity, it offers secure task storage, smart contract verification, and AI-powered prioritization. Manage tasks, track progress, and boost productivity effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

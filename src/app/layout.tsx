import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latent Know",
  description:
    "El cuaderno de notas público donde extraigo la teoría de los últimos papers de IA y la pongo a prueba con código real.",
  keywords: ["IA", "Papers", "Machine Learning", "Deep Learning", "AI Research"],
  authors: [{ name: "Latent Know" }],
  openGraph: {
    title: "Latent Know",
    description: "Teoría de papers de IA + práctica con código real.",
    url: "https://latentknow.com",
    siteName: "Latent Know",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latent Know",
    description: "Teoría de papers de IA + práctica con código real.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "@/styles/globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "700"],
});

// Note: When the local font file is added, we can enable next/font/local here.

export const metadata: Metadata = {
  title: "COGNIZANCE 26 - AI & Robotics Event",
  description:
    "Join us for the ultimate AI and Robotics event featuring cutting-edge technology, expert speakers, and innovative competitions.",
  keywords: [
    "AI",
    "Robotics",
    "Technology",
    "Innovation",
    "Conference",
    "COGNIZANCE",
  ],
  authors: [{ name: "COGNIZANCE Team" }],
  creator: "COGNIZANCE Team",
  publisher: "COGNIZANCE",
  openGraph: {
    title: "COGNIZANCE 26 - AI & Robotics Event",
    description:
      "Join us for the ultimate AI and Robotics event featuring cutting-edge technology, expert speakers, and innovative competitions.",
    type: "website",
    locale: "en_US",
    siteName: "COGNIZANCE 26",
  },
  twitter: {
    card: "summary_large_image",
    title: "COGNIZANCE 26 - AI & Robotics Event",
    description:
      "Join us for the ultimate AI and Robotics event featuring cutting-edge technology, expert speakers, and innovative competitions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="theme-color" content="#0a0e23" />
        <meta name="color-scheme" content="dark" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-deep-space text-star-white font-rajdhani">
          {/* Background Effects */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-deep-space via-void-black to-deep-space" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-electric-purple/10 rounded-full blur-3xl" />
            <div className="absolute top-40 right-32 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-cyber-pink/10 rounded-full blur-3xl" />

            {/* Matrix Rain Effect */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-matrix-green text-xs font-mono"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                >
                  <div className="matrix-rain">
                    {Math.random() > 0.5 ? "1" : "0"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10">{children}</div>

          {/* Floating Robo Assistant removed as requested */}

          {/* Cyberpunk Grid Lines */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 247, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 247, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Floating Particles */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-neon-blue rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}

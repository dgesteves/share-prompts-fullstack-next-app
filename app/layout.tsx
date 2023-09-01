import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Discover and share AI prompts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

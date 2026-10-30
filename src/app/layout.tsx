import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "SLOT — Your Movie. Your Time. Your SLOT.",
  description: "Discover movies, compare participating theatres and explore advance movie slot reservations with SLOT.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="slot-footer">
          SLOT · Your Movie. Your Time. Your SLOT.
          <span>Demo listings only — real theatre inventory and payments are not connected yet.</span>
        </footer>
      </body>
    </html>
  );
}

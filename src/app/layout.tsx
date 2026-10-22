import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
export const metadata:Metadata={title:"SLOT — Your seat to every story",description:"Discover movies, theatres and advance booking benefits with SLOT."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<footer className="slot-footer">SLOT · Your seat to every story. <span>Demo listings only — no real tickets or payments.</span></footer></body></html>}
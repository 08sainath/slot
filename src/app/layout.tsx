<<<<<<< HEAD
<<<<<<< HEAD
import type { Metadata } from "next";import "./globals.css";import Header from "@/components/Header";
export const metadata:Metadata={title:"SLOT — Find your next show",description:"A premium movie ticket booking demo"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}<footer className="wrap muted" style={{paddingTop:50,paddingBottom:35,fontSize:12}}>SLOT · Demo booking experience. Listings, availability and prices are sample data only.</footer></body></html>}
=======
=======
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da
import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/Header";
export const metadata:Metadata={title:"SLOT — Your seat to every story",description:"Discover movies and book your next big-screen moment with SLOT. Demo experience with sample listings."};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="en"><body><Header/>{children}<footer className="site-footer"><div className="footer-brand">SLOT<span>.</span></div><p>Your seat to every story.</p><div className="footer-note">SLOT DEMO · Sample listings only · No real tickets or payments</div><div className="footer-bottom"><span>© 2026 SLOT. Built for the love of cinema.</span><span><a href="/admin">Admin demo</a><span className="footer-sep">/</span><a href="/">Back to home</a></span></div></footer></body></html>;
}
<<<<<<< HEAD
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da
=======
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da

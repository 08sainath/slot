import Link from "next/link";
import {ArrowLeft} from "lucide-react";
export default function NotFound(){return <main className="inner-page not-found-page"><span className="section-kicker"><span>404</span> OFF SCRIPT</span><h1>This scene<br/><span className="serif-word">is missing.</span></h1><p>The page you're looking for isn't in this cut.</p><Link href="/" className="button button-primary"><ArrowLeft size={16}/> Back to home</Link></main>;}

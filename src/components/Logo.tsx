import Link from "next/link";
export default function Logo() {
  return <Link href="/" aria-label="SLOT home" className="brand-mark"><span className="brand-symbol" aria-hidden="true">S</span><span className="brand-word">SLOT<span className="brand-dot">.</span></span></Link>;
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Search, Menu, X, Ticket, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";
export default function Header() {
 const [query,setQuery]=useState("");const [menuOpen,setMenuOpen]=useState(false);const [cityOpen,setCityOpen]=useState(false);const [city,setCity]=useState("Hyderabad");
 return <header className="site-header"><div className="header-inner"><Logo/>
 <button className="city-picker" onClick={()=>setCityOpen(!cityOpen)} aria-expanded={cityOpen}><MapPin size={16}/><span>{city}</span><ChevronDown size={14}/></button>
 {cityOpen&&<div className="city-menu">{["Hyderabad","Bengaluru","Mumbai","Chennai"].map(name=><button key={name} onClick={()=>{setCity(name);setCityOpen(false);}}>{name}{city===name?" ✓":""}</button>)}</div>}
 <form className="search-form" action="/"><Search size={18}/><input name="q" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search movies, theatres..." aria-label="Search movies and theatres"/><button type="submit" aria-label="Search"><Search size={16}/></button></form>
 <nav className={`main-nav ${menuOpen?"nav-open":""}`} aria-label="Main navigation"><Link href="/#movies" onClick={()=>setMenuOpen(false)}>Movies</Link><Link href="/#experience" onClick={()=>setMenuOpen(false)}>Experiences</Link><Link href="/admin" onClick={()=>setMenuOpen(false)}>Admin demo</Link></nav>
 <Link href="/#movies" className="header-cta"><Ticket size={16}/><span>Book tickets</span></Link><button className="mobile-menu" aria-label={menuOpen?"Close menu":"Open menu"} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
 </div></header>;
}

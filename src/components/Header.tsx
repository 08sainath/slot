<<<<<<< HEAD
'use client';import Link from 'next/link';import {Search,MapPin,Ticket} from 'lucide-react';import {useState} from 'react';
export default function Header(){const [q,setQ]=useState('');return <header style={{borderBottom:'1px solid #22252c',position:'sticky',top:0,zIndex:20,background:'rgba(8,9,12,.94)',backdropFilter:'blur(12px)'}}><div className="wrap" style={{height:76,display:'flex',alignItems:'center',gap:24}}><Link href="/" style={{fontSize:28,fontWeight:950,letterSpacing:2}}><span className="accent">S</span>LOT</Link><div className="muted" style={{display:'flex',alignItems:'center',gap:7,fontSize:13}}><MapPin size={16}/><span>Hyderabad</span></div><form action="/" style={{flex:1,display:'flex',maxWidth:540,background:'#171920',borderRadius:999,padding:'0 14px',alignItems:'center',gap:10}}><Search size={17} className="muted"/><input name="q" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search movies, theatres..." style={{background:'transparent',border:0,outline:0,color:'white',width:'100%',padding:'12px 0'}}/></form><nav style={{display:'flex',gap:18,fontSize:14}}><Link href="/">Movies</Link><Link href="/admin">Admin</Link></nav><Link className="btn secondary" href="/"><Ticket size={16}/> <span style={{marginLeft:7}}>Explore</span></Link></div></header>}
=======
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
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da

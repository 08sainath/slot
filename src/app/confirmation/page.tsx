<<<<<<< HEAD
<<<<<<< HEAD
'use client';import {useEffect,useState} from 'react';import Link from 'next/link';
export default function Confirmation(){const [b,setB]=useState<any>(null);useEffect(()=>{try{setB(JSON.parse(localStorage.getItem('slotBooking')||'null'))}catch{}},[]);return <main className="wrap" style={{maxWidth:650,textAlign:'center',paddingTop:80}}><div className="accent" style={{fontSize:42}}>✓</div><h1 style={{fontSize:38}}>Demo booking confirmed</h1><p className="muted">This confirmation is for the SLOT prototype only. It is not a real ticket or payment receipt.</p>{b&&<div className="panel" style={{padding:24,textAlign:'left',marginTop:30}}><b>{b.movie}</b><p className="muted">{b.theatre} · {b.time}</p><p>Seats: {b.seats.join(', ')}</p><h2>₹{b.total}</h2><div className="muted" style={{fontSize:12}}>Sample reference: SLOT-DEMO-001</div></div>}<Link className="btn" href="/" style={{marginTop:25}}>Back to SLOT</Link></main>}
=======
=======
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da
"use client";
import {Suspense} from "react";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {Check,ArrowRight,Ticket,MapPin} from "lucide-react";
import {movies,theatres} from "@/lib/movies";
function ConfirmationContent(){
 const params=useSearchParams();const movie=movies.find(item=>item.id===params.get("movie"))??movies[0];const theatre=theatres.find(item=>item.id===params.get("theatre"))??theatres[0];const seats=(params.get("seats")??"").split(",").filter(Boolean);const code=params.get("code")??"SLT-DEMO-0001";
 return <main className="inner-page confirmation-page"><div className="confirmation-card"><div className="confirmation-icon"><Check size={30}/></div><span className="section-kicker centered-kicker">THAT'S A WRAP</span><h1>Your night is<br/><span className="serif-word">in the making.</span></h1><p className="confirmation-lead">You've completed the SLOT demo booking flow.</p><div className="confirmation-ticket"><div className="confirmation-ticket-top"><span>SLOT<span className="brand-dot">.</span></span><span className="sample-chip"><span/> DEMO ONLY</span></div><div className="confirmation-ticket-movie"><img src={movie.image} alt=""/><div><b>{movie.title}</b><span>{params.get("date")??"Today"} · {params.get("time")??"6:45 PM"}</span></div></div><div className="confirmation-ticket-details"><div><span><MapPin size={13}/> THEATRE</span><b>{theatre.name}</b><small>{theatre.area}, Hyderabad</small></div><div><span><Ticket size={13}/> SEATS</span><b>{seats.join(", ")||"Not selected"}</b><small>{seats.length} {seats.length===1?"seat":"seats"}</small></div></div><div className="confirmation-code"><span>DEMO REFERENCE</span><b>{code}</b></div></div><div className="confirmation-warning"><b>Not a real ticket.</b> No payment was taken and no theatre seat was reserved. This reference is generated only to demonstrate the SLOT checkout experience.</div><Link href="/" className="button button-primary confirmation-home">Back to SLOT <ArrowRight size={17}/></Link></div></main>;
}
export default function ConfirmationPage(){return <Suspense fallback={<main className="inner-page"><p className="section-kicker">PREPARING CONFIRMATION…</p></main>}><ConfirmationContent/></Suspense>;}
<<<<<<< HEAD
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da
=======
>>>>>>> 6bb5be0b888de08543eff06a8937fb3db6c676da

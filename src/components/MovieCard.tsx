import Link from "next/link";
import {Star,Clock3} from "lucide-react";
import type {Movie} from "@/lib/movies";
export default function MovieCard({movie,index=0}:{movie:Movie;index?:number}) {
 return <Link className="movie-card" href={`/movie/${movie.id}`} style={{animationDelay:`${index*70}ms`}}><div className="poster-wrap"><img src={movie.image} alt={`${movie.title} poster`} className="movie-poster" loading="lazy"/><span className="poster-rating"><Star size={13} fill="currentColor"/> {movie.rating}</span><span className="poster-format">2D</span><div className="poster-overlay"><span>View showtimes ↗</span></div></div><div className="movie-meta"><h3>{movie.title}</h3><p>{movie.genre}</p><div className="movie-foot"><span>{movie.language}</span><span><Clock3 size={12}/> {movie.duration}</span></div></div></Link>;
}

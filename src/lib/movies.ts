export type Movie = {
  id: string; title: string; tagline: string; language: string; duration: string;
  genre: string; rating: string; certificate: string; image: string; backdrop: string;
  accent: string; price: number; description: string;
};
// Illustrative listings only; this project does not use a live movie feed.
export const movies: Movie[] = [
  {id:"devara",title:"Devara: Part 1",tagline:"Fear is a weapon",language:"Telugu",duration:"2h 58m",genre:"Action • Drama",rating:"8.1",certificate:"UA",image:"https://image.tmdb.org/t/p/w500/6qld2YxAO9gdEblo0rsEb8Bc8e0.jpg",backdrop:"https://images.unsplash.com/photo-1489599849927-2ee91abadde?auto=format&fit=crop&w=1800&q=85",accent:"#e85d3f",price:220,description:"A fierce coastal tale of courage, loyalty and the shadows that rule the sea. This sample listing is for SLOT's demo booking experience."},
  {id:"kalki",title:"Kalki 2898 AD",tagline:"The world is waiting",language:"Telugu",duration:"3h 1m",genre:"Sci-Fi • Action",rating:"8.4",certificate:"UA",image:"https://image.tmdb.org/t/p/w500/1e4S6w4v2Gg5jQ0j3c8k1b2p5Jx.jpg",backdrop:"https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1800&q=85",accent:"#9078f5",price:250,description:"A sweeping sci-fi adventure set in a future shaped by ancient legends. This sample listing is for SLOT's demo booking experience."},
  {id:"saripodhaa",title:"Saripodhaa Sanivaaram",tagline:"One day. One man. One rule.",language:"Telugu",duration:"2h 50m",genre:"Action • Thriller",rating:"7.8",certificate:"UA",image:"https://image.tmdb.org/t/p/w500/7L4w4l9F8eZ9bK2y3B5c6D7e8F9.jpg",backdrop:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85",accent:"#d99a47",price:200,description:"A high-voltage action thriller with a hero who saves his anger for one day. This sample listing is for SLOT's demo booking experience."},
  {id:"animal",title:"Animal",tagline:"A bond beyond boundaries",language:"Hindi",duration:"3h 21m",genre:"Crime • Drama",rating:"7.2",certificate:"A",image:"https://image.tmdb.org/t/p/w500/2Jd6O3kQ6z5bG9c8x7T1F8Y1u5A.jpg",backdrop:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85",accent:"#ce4d4d",price:240,description:"A turbulent family story told through ambition, obsession and loyalty. This sample listing is for SLOT's demo booking experience."},
  {id:"insideout",title:"Inside Out 2",tagline:"Make room for new emotions",language:"English",duration:"1h 36m",genre:"Animation • Comedy",rating:"8.0",certificate:"U",image:"https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",backdrop:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=85",accent:"#55b7b1",price:180,description:"A joyful animated adventure through the feelings that make us who we are. This sample listing is for SLOT's demo booking experience."},
  {id:"deadpool",title:"Deadpool & Wolverine",tagline:"Come together",language:"English",duration:"2h 7m",genre:"Action • Comedy",rating:"7.9",certificate:"A",image:"https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",backdrop:"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=85",accent:"#dd554b",price:260,description:"An irreverent action adventure full of chaos, unlikely teamwork and big-screen spectacle. This sample listing is for SLOT's demo booking experience."}
];
export const theatres = [
  {id:"arjun",name:"Arjun 70MM",area:"Kukatpally",format:"Dolby Atmos",priceAdd:30},
  {id:"amb",name:"AMB Cinemas",area:"Gachibowli",format:"Dolby Atmos • Laser",priceAdd:100},
  {id:"pvr",name:"PVR ICON",area:"Irrum Manzil",format:"Premium Large Screen",priceAdd:80},
  {id:"bramaramba",name:"Bramaramba 70MM",area:"Kukatpally",format:"Dolby Digital",priceAdd:0}
];
export const showtimes = ["10:15 AM","12:45 PM","3:30 PM","6:45 PM","9:50 PM"];
export const movieById = (id: string) => movies.find((movie) => movie.id === id);

import { useEffect, useState } from "react"
import Carousel from "../components/carousel/Carousel"
import Chanel from "../components/chanels/Chanel"
import Featured from "../components/featured/Featured"
import Header from "../components/Header/Header"
import Shows from "../components/shows/Shows"
import Tags from "../components/tags/Tags"
import Footer from "../components/footer/Footer"


const Home = ()=>{

    const[Featuredmovies,setFeaturedMovies]= useState([])

    const[movies,setMovies]= useState([])
    const[ActionMovies,setActionMovies]= useState([])
    const[DramaMovies,setDramaMovies]= useState([])
    const[EnglishMovies,setEnglishMovies]= useState([])
    const[HindiMovies,setHindiMovies]= useState([])
    const[FantasyMovies,setFantasyMovies]= useState([])
    


    useEffect( () => {

    const FetchMovie = async()=>{    
    try{
        let movieResponse = await fetch("http://localhost:8000/api/movies");
        const movieData = await  movieResponse.json();
       
        setMovies(movieData); 

        // filters for Featured movie
        let featmovies = movieData.filter((movie)=>{return movie.featured=== true})
        setFeaturedMovies(featmovies.slice(0,4))

        // filters for Action  movie
        let actmovies = movieData.filter((movie)=>{return movie.genre.includes("Action")})
        setActionMovies(actmovies.slice(0,6));

         // filters for DRAMA  movie
         let dramamovies = movieData.filter((movie)=>{return movie.genre.includes("Drama")})
         setDramaMovies(dramamovies.slice(0,6));

         // filters for fantasy  movie
         let fantasymovies = movieData.filter((movie)=>{return movie.genre.includes("Drama")})
         setFantasyMovies(fantasymovies.slice(0,6));

         // filters for hindi  movie
         let hindimovies = movieData.filter((movie)=>{return movie.language ==="Hindi"})
         setHindiMovies(hindimovies.slice(0,6));

        // filters for English  movie
        let englishmovies = movieData.filter((movie)=>{return movie.language ==="English"})
        setEnglishMovies(englishmovies.slice(0,6));








    }catch(error){
        console.error(error);
    }    
};
FetchMovie(); 
},[]);
  

    return(
        <>
        <Header movies={movies}/>
        <Tags/>
        <Carousel/>
        <Chanel/>
        <Featured movie ={Featuredmovies}/>
        <Shows title="Action Movies" movie={ActionMovies}/>
        <Shows title="Drama Movies"  movie={DramaMovies}/>
        <Shows title="English Movies"  movie={EnglishMovies}/>
        <Shows title="Hindi Movies"  movie={HindiMovies}/>
        <Shows title="Fantasy Movies"  movie={FantasyMovies}/>
        <Footer />
        </>
    )
}
export default Home
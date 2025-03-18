import { useParams } from "react-router-dom";


const MovieDetails = ({movie =[]}) => {
    const {id} = useParams();
    console.log (id)
  return (
    <div> <h1>{movie.name}</h1></div>
  )
}

export default MovieDetails
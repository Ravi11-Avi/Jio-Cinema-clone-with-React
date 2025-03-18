import style from './show.module.css'
import { Link } from 'react-router-dom';

const Show = ({movie}) => {
  if(!movie) return null;
  return (
    <>
        <div className={style.show}>
            <Link to={`/movie/${movie.id}`}>  
              <img src={movie.image_url} alt="POSTER" />
              <div className={style.movieTitle}>
                <h1 className={style.moviename}> {movie.name}</h1>
              </div>
            </Link>
        </div>

    </>
  )
}

export default Show;
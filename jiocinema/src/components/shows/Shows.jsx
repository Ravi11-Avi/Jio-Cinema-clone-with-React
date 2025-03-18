import style from './shows.module.css'
import Show from '../show/Show';

const Shows = (props) => {
  return (
        <>
        <div className={style.shows}>
            <h1 className={style.titleshow} >{props.title}</h1>

            <div className={style.showsParent}>
              
            {
              props.movie.map((movie)=>{
                return <Show  movie={movie}/>
              })
            }
            
         
           
            
            </div>


        </div>
        </> 
     )
}

export default Shows;

import { useState } from 'react';
import style from './Tags.module.css'
const Tags=()=>{

    const [tag,settag]=useState([
            "Action",
            "Adventure",
            "Animation",
            "Comedy",
            "Crime",
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Romance",
            "Science Fiction",
            "Thriller",
            "Western",
            
        ]
    )
    return(
        <>
        <div className={style.tags}>
               {
                tag.map((genre)=>{
                    return <p className={style.eachtag}>{genre}</p>
                })
               }
        </div>
        </>
    )
    
}
export default Tags;
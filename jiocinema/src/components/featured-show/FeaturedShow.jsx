import style from './featuredshow.module.css'

const FeaturedShow =(props)=>{
    return(
        <>
            <div className={style.featuredshow}>
               <img src={props.movie.image_url} alt="poster" />
               <div className={style.featuredshowtitle}>
                    <p className={style.moviename}>{props.movie.name}</p>

               </div>
            </div>
        </>
        );
}
export default FeaturedShow;
import FeaturedShow from '../featured-show/FeaturedShow';
import style from './featured.module.css'

const Featured =(props)=>{
    return(
        <>
        <section className={style.featured}>
            <h1 className={style.sectionTitle}>Hot Right Now 🔥</h1>

            <div className={style.shows}>
                   {
                    props.movie.map((movie)=>{
                        return <FeaturedShow movie= {movie}/>
                    })
                   }
                   
            </div>

        </section>
        </>
    )
}
export default Featured;
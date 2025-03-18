import style from '../Header/header.module.css'
import JClogo from '../../assets/jc_logo_v2.svg'
import PrimLogo from '../../assets/crown.svg'
import SearchI from '../../assets/ic_search.svg'
import VoiceI from '../../assets/voice-search.svg'
import Guest from '../../assets/avatar_guest.svg'
import { useEffect, useState } from 'react'
import Show from '../show/Show'

const Header=(props)=>{

    const navlink =['Home','Sports','Movies','Tv Shows','more']
    const[searchedMovie,setSearchedmovie] =useState("")
    const[findmovie,setFindmovie]=useState([])

    useEffect(()=>{


        if (searchedMovie.trim()!==""){
            {
                const foundmovie = props.movies.filter((movie)=>{
                    return movie.name.toUpperCase().includes(searchedMovie.toUpperCase())
                });

                setFindmovie(foundmovie);
                

            }
        }else {
            setFindmovie([ ]);
        }
        console.log(findmovie)
    },[searchedMovie])
    
    return(
        <>
        <header className={style.header}>
            
            <nav className={style.naviagtion}>
                <img src={JClogo} alt="logo" className={style.jslogo} />
                <div className={style.premium}>
                    <img src={PrimLogo} alt='pLOgo' className={style.plogo}/>
                    <p>Go Primum</p>
                </div>
                <ul className={style.navLinks}>
                    {
                        navlink.map((link)=><li className={style.navLink}>{link}</li>)
                    }

                </ul>
            </nav>

            <div className={style.search}>
                <div className={style.searchbox}>
                    <div className={style.headerIcon}>
                        <img src={SearchI} alt="" />
                    </div>
                    <input type="text" 
                    onChange={(event)=>{
                        setSearchedmovie(event.target.value)
                    }}
                    className={style.searchbar} 
                    placeholder='Movies, Shows and more'/>
                    <div className={style.headerIcon}>
                       <img src={VoiceI} alt="" /> 
                    </div>
                </div>
                <img src={Guest} className={style.guest} alt="guest"/>
            </div>

           
        </header>

        {
            findmovie.length!==0 ?(
                <div className={style.searchMovieArea}>
           
                {
                    findmovie.map((movie)=>{
                        return <Show movie={movie}/>
                    })
                }
        
                    </div> 
            ):null
        }


       
       
       
        </>
    );
 }


export default Header
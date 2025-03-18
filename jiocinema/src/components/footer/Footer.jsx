import style from './footer.module.css'
import Facebook from '../../assets/facebook.svg'
import Insta from '../../assets/instagram.svg'
import Utube from '../../assets/youtube.svg'
import X from '../../assets/x.svg'
import Applestr from '../../assets/appleStore.svg'
import Gplay from '../../assets/googleplay.svg'
import Jiologo from  '../../assets/jio-logo.png'


const Footer = () => {
  return (
    <>
    <div className={style.footer}>
        <div className={style.upperfooter}>
            <div className={style.leftpart}>
                <div className={style.leftpartmenu}>
                        <ul>
                                <li className={style.headoption}><h1>Jio Cinema</h1></li>

                                <li className={style.option}><h1>For You</h1></li>
                                <li className={style.option}><h1>Sports</h1></li>
                                <li className={style.option}><h1>Movies</h1></li>
                                <li className={style.option}><h1>Tv Shows</h1></li>
                        </ul>
                </div>
                <div className={style.support}>
                        <ul>
                                <li className={style.headoption}><h1>Support</h1></li>

                                <li className={style.option}><h1>Help Center</h1></li>
                                <li className={style.option}><h1>Terms of Use</h1></li>
                                <li className={style.option}><h1>Privacy Policy</h1></li>
                                <li className={style.option}><h1>Content Complalnts</h1></li>
                        </ul>
    
                 </div>

            </div>
            <div className={style.rightpart}>
                <div className={style.share}>
                    <h1>Connect With Us</h1>
                    <ul className={style.icongrp}>
                        <li className={style.share_icon}><a href='#' target="_blank" rel="noopener noreferre"><img src={Facebook} alt="Facebook" /> </a></li>
                        <li className={style.share_icon}><a href='#' target="_blank" rel="noopener noreferre"><img src={X} alt="Twitter/X" /> </a></li>
                        <li className={style.share_icon}><a href='#' target="_blank" rel="noopener noreferre"><img src={Insta} alt="Instagram" /> </a></li>
                        <li className={style.share_icon}><a href='#' target="_blank" rel="noopener noreferre"><img src={Utube} alt="YouTube" /> </a></li>
                    </ul>
                   

                </div>
                <div className={style.download}>
                    <h1>Download The App</h1>
                    <ul  className={style.icongrp}>
                        <li><img src={Applestr} alt="Dowloadicon" /></li>
                        <li ><img src={Gplay} alt="Dowloadicon" /></li>
                    </ul>
                    
                    
                </div>
            </div>

        </div>
        <div className={style.lowerfooter}>
            <h1>Copyright © 2025 Star India Private Limited. All rights reserved.</h1>
            <img src={Jiologo} alt="logo" />
            </div>
            
 
        </div>
    </>
  )
}

export default Footer
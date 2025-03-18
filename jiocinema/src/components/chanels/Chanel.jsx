import style from './chanel.module.css'
import Channel1 from '../../assets/channel1.png'
import Channel2 from '../../assets/channel2.png'
import Channel3 from '../../assets/channel3.png'
import Channel4 from '../../assets/channel4.png'
import Channel5 from '../../assets/channel5.png'
import Channel6 from '../../assets/channel6.png'
import Channel7 from '../../assets/channel7.png'
import { useState } from 'react'



const Chanel=()=>{


    const [channelImages,setchannelImages]=useState([
                    Channel1,
                    Channel2,
                    Channel3,
                    Channel4,
                    Channel5,
                    Channel6,
                    Channel7
                ]);



    return(
        <div className={style.channels}> 
            {
                channelImages.map((each)=>{
                    return(
                        <img src={each} alt="" className={style.eachchannel}/>
                    )
                })
            }
        </div>
    )
}
export default Chanel
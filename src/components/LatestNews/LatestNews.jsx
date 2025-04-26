import './latestNews.module.scss'

import LStrelka from './img/LStrelka.svg'
import Clocl from './img/Clock.svg'
import Profile from './img/Profile.svg'

import Post1 from './img/post1.png'
import Post2 from './img/post2.png'

export default function latestNews(){
    return(
        <section className={classes.sec1}>
            <div className={classes.latestNews}>
                <h1>Latest news</h1>
                <p></p>
                <button></button>
            </div>
            <div className={classes.conatiner}>
                <div>
                    <img src={Post1} alt="" />
                    <div className={classes.date}>
                        <p>SEO</p>
                        <b>July 5, 2020<img src={Clocl} alt="" /></b>
                        <p>By Diane Mccoy<img src={Profile} alt="" /></p>
                    </div>
                    <h3>How to Maximize Your ROI Through Scientific SEM?</h3>
                    <p>Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio...</p>
                    <button>Read more <img src={LStrelka} alt="" /></button>
                </div>
                <div>
                    <img src={Post2} alt="" />
                    <div className={classes.date}>
                        <p>Marketing</p>
                        <b>July 2, 2020<img src={Clocl} alt="" /></b>
                        <p>By Diane Mccoy<img src={Profile} alt="" /></p>
                    </div>
                    <h3>The Basics of Blogging Search Engine Optimization.</h3>
                    <p>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
                    <button>Read more <img src={LStrelka} alt="" /></button>
                </div>
            </div>
        </section>
    )
}
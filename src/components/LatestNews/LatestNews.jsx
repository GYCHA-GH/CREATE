import classes from'./latestNews.module.scss'

import LStrelka from './img/LStrelka.svg'
import Clocl from './img/Clock.svg'
import Profile from './img/Profile.svg'

import Post1 from './img/post1.png'
import Post2 from './img/post2.png'

export default function LatestNews(){
    return(
        <section className={classes.sec1}>
            <div className={classes.latestNews}>
                <h1>Latest news</h1>
                <p>Check more posts in our blog for featured news and advertising insights</p>
                <a href=""><button>Go to blog</button></a>
            </div>
            <div className={classes.container}>
                <div className={classes.card}>
                    <img src={Post1} alt="" />
                    <div className={classes.date}>
                        <p>SEO</p>
                        <svg width="20" height="13" viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="1" x2="0.5" y2="12" stroke="#787A80" stroke-linecap="round"/>
                        </svg>
                            <img src={Clocl} alt="" />
                            <b>July 5, 2020</b>
                        <svg width="20" height="13" viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="1" x2="0.5" y2="12" stroke="#787A80" stroke-linecap="round"/>
                        </svg>
                        <img src={Profile} alt="" />
                        <p>By Diane Mccoy</p>
                    </div>
                    <h3>How to Maximize Your ROI Through Scientific SEM?</h3>
                    <p>Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio...</p>
                    <button>Read more <img src={LStrelka} alt="" /></button>
                </div>
                <div className={classes.card}>
                    <img src={Post2} alt="" />
                    <div className={classes.date}>
                        <p>Marketing</p>
                        <svg width="20" height="13" viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="1" x2="0.5" y2="12" stroke="#787A80" stroke-linecap="round"/>
                        </svg>
                        <img src={Clocl} alt="" />
                        <b>July 2, 2020</b>
                        <svg width="20" height="13" viewBox="0 0 1 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="1" x2="0.5" y2="12" stroke="#787A80" stroke-linecap="round"/>
                        </svg>
                        <img src={Profile} alt="" />
                        <p>By Diane Mccoy</p>
                    </div>
                    <h3>The Basics of Blogging Search Engine Optimization.</h3>
                    <p>Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
                    <button>Read more<img src={LStrelka} alt="" /></button>
                </div>
            </div>
        </section>
    )
}
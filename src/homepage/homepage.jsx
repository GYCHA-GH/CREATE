import classes from './homepage.module.scss'

import D from './img/D.svg'
import Clutch from './img/Clutch.svg'
import Fordes from './img/Fordes.svg'
import UpCity from './img/UpCity.svg'

import C_logo1 from './img/client-logo1.svg'
import C_logo2 from './img/client-logo2.svg'
import C_logo3 from './img/client-logo3.svg'
import C_logo4 from './img/client-logo4.svg'
import C_logo5 from './img/client-logo5.svg'
import C_logo6 from './img/client-logo6.svg'

import Team_img from './img/team.png'

import Grafik1 from './img/grafik1.svg'
import Grafik2 from './img/grafik2.svg'
import Grafik3 from './img/grafik3.svg'
import Grafik4 from './img/grafik4.svg'


import Girl from './img/girl.svg' 
import Ic_chat from './img/ic-chat.svg'
import Ic_like from './img/ic-like.svg'
import Ic_view from './img/ic-view.svg'
import Ic_target from './img/ic-target.svg'
import Ic_speaker from './img/ic-speaker.svg'
import Ic_checklist from './img/ic-checklist.svg'



import CaseStudySlider from '../components/ReadSlider/ReadSlider'
import WhatSlider from '../components/WhatSlider/WhatSlider'
import PricingPlan from '../components/PricingPlan/PricingPlan'
import SeoAnalysisForm from '../components/GetaFreeSEOform/SeoAnalysisForm'
import LatestNews from '../components/LatestNews/LatestNews'


export default function Homepage(){
    return(
        <main className={classes.main}>
            <CaseStudySlider/>
            <WhatSlider/>
            <PricingPlan/>
            <SeoAnalysisForm/>
            <LatestNews/>
            
            <section className={classes.sec1}>
                <b>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</b>
                <div className={classes.sec_1_img_container}>
                    <div><img src={Clutch} alt="" /><p>Top SEO Companies 2020 by Clutch</p></div>
                    <div><img src={UpCity} alt="" /><p>Top Digital Marketing Agency 2019 by UpCity</p></div>
                    <div><img src={Fordes} alt="" /><p>Official Member 2020 by Forbes Agency Council</p></div>
                    <div><img src={D} alt="" /><p>Top SEO Companies 2020 by Top Developers</p></div>
                </div>
            </section>
            <section className={classes.sec2}>
                <img src={C_logo1} alt="" />
                <img src={C_logo2} alt="" />
                <img src={C_logo3} alt="" />
                <img src={C_logo4} alt="" />
                <img src={C_logo5} alt="" />
                <img src={C_logo6} alt="" />
            </section>
            <section className={classes.sec3}>
                <div>
                    <h1>Createx Agency</h1>
                    <p>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
                    <button>More about us</button>
                </div>
                <img src={Team_img} alt="" />
            </section>
            <section className={classes.sec4}>
                <div>
                    <img src={Grafik1} alt="" />
                    <p>Years of experience</p>
                </div>
                <div>
                    <img src={Grafik2} alt="" />
                    <p>Awards</p>
                </div>
                <div>
                    <img src={Grafik3} alt="" />
                    <p>Projects</p>
                </div>
                <div>
                    <img src={Grafik4} alt="" />
                    <p>Happy clients</p>
                </div>
            </section>
            \*Our services*\
            <section className={classes.sec5}>

            </section>
            <section className={classes.sec6}>
                <h1>Our benefits</h1>
                <div className={classes.container1}>
                    <div className={classes.column1}>
                        <div>
                            <img src={Ic_speaker} alt="" />
                            <h3>Social Advertising Experts</h3>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                        <div>
                            <img src={Ic_target} alt="" />
                            <h3>Social Advertising Experts</h3>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                        <div>
                            <img src={Ic_checklist} alt="" />
                            <h3>Social Advertising Experts</h3>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                    </div>
                    <img className={classes.Girl} src={Girl} alt="" />
                    <div className={classes.column1}>
                        <div>
                            <img src={Ic_chat} alt="" />
                            <h3>Social Advertising Experts</h3>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                        <div>
                            <img src={Ic_view} alt="" />
                            <h3>Social Advertising Experts</h3>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                        <div>
                            <img src={Ic_like} alt="" />
                            <h3>Social Advertising Experts</h3>
                            <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
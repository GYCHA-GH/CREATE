import classes from './homepage.module.scss'

import Clutch from './img/Clutch.svg'
import D from './img/D.svg'
import Fordes from './img/Fordes.svg'
import UpCity from './img/UpCity.svg'

export default function Homepage(){
    return(
        <main className={classes.main}>
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

            </section>
        </main>
    )
}
import './best.css'
import Nav from '../../components/header/nav'
import Play from './img/Polygon.svg'
import Chart from './img/chart.svg'
import Speaker from './img/speaker.svg'
import Computer from './img/computer.svg'
export default function Best(){
    return(
        <>
        <div className="best-container">
            <Nav/>
            <article className='article-Best-SEO'>
                <section className='section-best'>
                <h1>Best <b>SEO & Marketing</b> Solutions for You</h1>
                <div className="best-button">
                    <div className="play-buttin">
                        <button className='play-buttin1'>Get a free analysis</button>
                        <div className="pizdec">
                            <button className='play-buttin2'><img src={Play} alt="" /></button>
                            <p>Play video</p>
                        </div>
                    </div>
                </div>
                </section>
                <section className='secton-best-SEO-bar'>
                    <div className="SEO-Content">
                        <img src={Chart} alt="" /><p>SEO Content Strategy</p>
                    </div>
                    <div className="marketing">
                        <img src={Speaker} alt="" /><p>Content Marketing</p>
                    </div>
                    <div className="website">
                        <img src={Computer} alt="" /><p>Website & Social Media Marketing</p>
                    </div>
                </section>
            </article>


        </div>
        </>
    )
}
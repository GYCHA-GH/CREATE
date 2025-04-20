import React from 'react'
import classes from './footer.module.scss'
import Logo from '../img/logo.svg'
import Facebook from './img/Facebook.svg'
import Instagram from './img/Instagram.svg'
import LinkedIn from './img/Linked-In.svg'
import Twitter from './img/Twitter.svg'
import Award1 from './img/award1.svg'
import Award2 from './img/award2.svg'
import Award3 from './img/award3.svg'
import Award4 from './img/award4.svg'
import Heart from './img/Heart.svg'
import Phone from './img/iPhone.svg'
import Mail from './img/Mail.svg'
import UpChervo from './img/Up-chevron.svg'
export default function Footer(){
    // 👇 Обработчик для прокрутки наверх
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return(
        
        <footer>
            <div className={classes.container}> 
                <div className={classes.box1}>
                    <img src={Logo} alt="" />
                    <p>Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
                    <div className={classes.seti}>
                        <img src={Facebook} alt="" />
                        <img src={LinkedIn} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Instagram} alt="" />
                    </div>


                </div>
                <div className={classes.box2}>
                    <h3>COMPANY</h3>
                    <a href="">About Us</a>
                    <a href="">Case Studies</a>
                 
                    <a href="">Blog</a>
                    
                    <a href="">Careers</a>
                    
                    <a href="">Contacts</a>
                </div>
                <div className={classes.box3}>
                    <h3>SERVICES</h3>
                    <a href="">Social Media</a>
                    <a href="">SEO</a>
                    <a href="">Research</a>
                    <a href="">Content & PR</a>
                    <a href="">Payed Traffic</a>
                </div>
                <div className={classes.box4}>
                    <h3>CONTACT US</h3>
                    <a href=""><img src={Phone} alt="" />   (405) 555-0128</a>
                    <a href=""><img src={Mail} alt="" />    hello@createx.com</a>
                </div>
                <div className={classes.box5}>
                    <h3>SIGN UP TO OUR NEWSLETTER</h3>
                    <div class={classes.inputwrapper}>
  <input type="text" placeholder="Email address" />
  <button class={classes.arrowbutton} aria-label="Отправить">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <line x1="1" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  </button>
</div>
<p>*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>


                </div>
            </div>
            <div className={classes.border2}></div>
            <div className={classes.container2}>
                <div className={classes.border}>
                    <div className={classes.partner}>
                        <img src={Award1} alt="" />
                        <img src={Award2} alt="" />
                        <img src={Award3} alt="" />
                        <img src={Award4} alt="" />
                    </div>
                    <div className={classes.gototop}>
                        <p>GO TO TOP</p>
                        <button onClick={handleScrollToTop}><img src={UpChervo} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className={classes.down}>
                <div className={classes.container3}>
                    <p>© All rights reserved.Made with</p>
                    <img src={Heart} alt="" />
                    <p>by Createx Studio</p>
                </div>
            </div>
        </footer>
       
    )
}
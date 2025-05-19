import Illustration from './img/illustration.png'
import classes from './OurServices.module.scss'
export default function OurServices(){
    return(
        <>
        <section className={classes.sec}>
            <h1>
                Our services
            </h1>
            <div className={classes.buttons}>
                <button>Social Media</button>
                <button>SEO</button>
                <button>Research</button>
                <button>Content & PR</button>
                <button>Payed Traffic</button>
            </div>
            <div className={classes.section}>
                <ul>
                    <h3>Complete Worflow For Any SEO Professional</h3>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4717 3.52827C14.7321 3.78862 14.7321 4.21073 14.4717 4.47108L6.47173 12.4711C6.21138 12.7314 5.78927 12.7314 5.52892 12.4711L1.52892 8.47108C1.26857 8.21073 1.26857 7.78862 1.52892 7.52827C1.78927 7.26792 2.21138 7.26792 2.47173 7.52827L6.00033 11.0569L13.5289 3.52827C13.7893 3.26792 14.2114 3.26792 14.4717 3.52827Z" fill="#7772F1"/>
                        </svg>
                        <p>Aenean enim tellus morbi nisl vulputate dictumst.</p>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4717 3.52827C14.7321 3.78862 14.7321 4.21073 14.4717 4.47108L6.47173 12.4711C6.21138 12.7314 5.78927 12.7314 5.52892 12.4711L1.52892 8.47108C1.26857 8.21073 1.26857 7.78862 1.52892 7.52827C1.78927 7.26792 2.21138 7.26792 2.47173 7.52827L6.00033 11.0569L13.5289 3.52827C13.7893 3.26792 14.2114 3.26792 14.4717 3.52827Z" fill="#7772F1"/>
                        </svg>
                        <p>Nibh sapien volutpat lacus augue.</p>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4717 3.52827C14.7321 3.78862 14.7321 4.21073 14.4717 4.47108L6.47173 12.4711C6.21138 12.7314 5.78927 12.7314 5.52892 12.4711L1.52892 8.47108C1.26857 8.21073 1.26857 7.78862 1.52892 7.52827C1.78927 7.26792 2.21138 7.26792 2.47173 7.52827L6.00033 11.0569L13.5289 3.52827C13.7893 3.26792 14.2114 3.26792 14.4717 3.52827Z" fill="#7772F1"/>
                        </svg>
                        <p>Vel in amet, placerat adipiscing est pharetra.</p>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4717 3.52827C14.7321 3.78862 14.7321 4.21073 14.4717 4.47108L6.47173 12.4711C6.21138 12.7314 5.78927 12.7314 5.52892 12.4711L1.52892 8.47108C1.26857 8.21073 1.26857 7.78862 1.52892 7.52827C1.78927 7.26792 2.21138 7.26792 2.47173 7.52827L6.00033 11.0569L13.5289 3.52827C13.7893 3.26792 14.2114 3.26792 14.4717 3.52827Z" fill="#7772F1"/>
                        </svg>
                        <p>Gravida ornare sit in et ut sit sem id.</p>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4717 3.52827C14.7321 3.78862 14.7321 4.21073 14.4717 4.47108L6.47173 12.4711C6.21138 12.7314 5.78927 12.7314 5.52892 12.4711L1.52892 8.47108C1.26857 8.21073 1.26857 7.78862 1.52892 7.52827C1.78927 7.26792 2.21138 7.26792 2.47173 7.52827L6.00033 11.0569L13.5289 3.52827C13.7893 3.26792 14.2114 3.26792 14.4717 3.52827Z" fill="#7772F1"/>
                        </svg>
                        <p>Ultrices pellentesque dictum enim egestas ac diam.</p>
                    </li>
                    <li>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4717 3.52827C14.7321 3.78862 14.7321 4.21073 14.4717 4.47108L6.47173 12.4711C6.21138 12.7314 5.78927 12.7314 5.52892 12.4711L1.52892 8.47108C1.26857 8.21073 1.26857 7.78862 1.52892 7.52827C1.78927 7.26792 2.21138 7.26792 2.47173 7.52827L6.00033 11.0569L13.5289 3.52827C13.7893 3.26792 14.2114 3.26792 14.4717 3.52827Z" fill="#7772F1"/>
                        </svg>
                        <p>Sit semper enim senectus integer ut turpis et.</p>
                    </li>
                    <div>
                        <button className={classes.Lbutton}><a href="">Learn more</a></button>
                        <button className={classes.Rbutton}><a href="">Try SEO toolkit</a></button>
                    </div>
                </ul>
                <img src={Illustration} alt="" />
            </div>
        </section>
        </> 
    )
}
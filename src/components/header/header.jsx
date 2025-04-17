import './header.css'
import Logo from './img/logo.svg'
export default function Header(){
    return(
        <>
        <header>
            <img src={Logo} alt="Logo" />
            <nav>
                <a href="">Services</a>
                <a href="">Case Studies</a>
                <a href="">About Us</a>
                <a href="">Blog</a>
                <a href="">Contacts</a>
            </nav>
            <button></button>
        </header>
        </>
    )
}
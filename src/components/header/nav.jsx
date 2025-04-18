import './nav.scss'
import { useState, useEffect, useRef } from 'react'
import Logo from './img/logo.svg'
import DownChevron from './img/Down chevron.svg' 

export default function Nav() {
  const [isOpen, setOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header>
        <img src={Logo} alt="Logo" />
        <nav>
        <button
            ref={buttonRef}
            aria-expanded={isOpen}
            aria-controls="menu"
            onClick={() => setOpen(!isOpen)}
            className={isOpen ? 'open' : ''}
            >
            Services
            <img src={DownChevron} alt="" />
        </button>
        <div
          ref={menuRef}
          id="menu"
          className={`menu ${isOpen ? 'active' : ''}`}
        >
          <ul>
            <li><a href="">Test</a></li>
            <li><a href="">Test</a></li>
            <li><a href="">Test</a></li>
            <li><a href="">Test</a></li>
            <li><a href="">Test</a></li>
          </ul>
        </div>
        <a href="">Case Studies</a>
        <a href="">About Us</a>
        <a href="">Blog</a>
        <a href="">Contacts</a>
      </nav>
      <button>Talk to a human</button>
    </header>
  )
}

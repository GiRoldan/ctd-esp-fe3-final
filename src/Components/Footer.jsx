import React from 'react'
//import logo from '../imagenesPrueba/DH.png'

const Footer = () => {
  return (
    <footer>
        <p className='footer-paragraph'>Powered by</p>
        <div className='footer-logo-and-icons'>
          <img src="/images/DH.png" alt="" width={200}/>
          <br />
          <div>
            <a href="/#"><img className='footer-icons' src="/images/ico-facebook.png" alt="" width={25}/></a>
            <a href="/#"><img className='footer-icons' src="/images/ico-instagram.png" alt="" width={25}/></a>
            <a href="/#"><img className='footer-icons' src="/images/ico-whatsapp.png" alt="" width={25}/></a>
            <a href="/#"><img className='footer-icons' src="/images/ico-tiktok.png" alt="" width={25}/></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer

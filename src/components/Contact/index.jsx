import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
      return setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_bift1sp', refForm.current, '3gPiC5rYx9ZE9pDY_')
          .then((result) => {
            alert('Message successfully sent!')
            window.location.reload(false)
          }, (error) => {
            alert('Failed to send the message, please try again')
          });
        }

  return (
   <>
   <div className="container contact-page">
    <div className="text-zone">
        <h1>
            <AnimatedLetters letterClass={letterClass}  strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15} />
        </h1>
        <p>
            I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below form either.
        </p>
    <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
            <ul>
                <li className="half">
                    <input type="text" name='name' placeholder='Name' required />
                </li>
                <li className="half">
                    <input type="email" name='email' placeholder='Email' required />
                </li>
                <li>
                    <input type="text" name='subject' placeholder='Subject' required />
                </li>
                <li>
                    <textarea name="message" placeholder='Message' required ></textarea>
                </li>
                <li>
                    <input type="submit" className='flat-button' value="SEND >" />
                </li>
            </ul>
        </form>
    </div>
    </div>
    <div className="info-map">
        Sohail Akhtar Ali
        <br />
        Amravati,
        <br />
        Maharashtra, India
        <br />
        444101
        <br />
        <span>alisohail2448@gmail.com</span>
    </div>
    <div className="map-wrap">
        <MapContainer center={[20.929720, 77.758133]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[20.929720, 77.758133]}>
              <Popup>Sohail lives here, come over for a cup of coffee :)</Popup>
            </Marker>
        </MapContainer>
    </div>
   </div>
    <Loader type='pacman'/>
   </>
  )
}

export default Contact
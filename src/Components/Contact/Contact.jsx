import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import {useRef} from 'react'
import { useState } from 'react'
const Contact = () => {
  const [done, setDone] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_njlgyh8', 'template_x5n3snp', form.current, 'IRIEVQt8Mrwhc6yFs')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact" id='Contact' >
        {/*left side*/}
        <div className="c-left">
            <div className="s-left">
               <span>Get in touch</span>
               <span>Contact me</span>
               <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
        </div>
        {/*right side*/}
        <div className="c-right" id='hire'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Name' className='user' />
                <input type="email" name="email" placeholder='Email' className='user' />
                <textarea name="message" placeholder='Message' className='user'></textarea>
                <input type="submit" value='send'  className='button'/>
                <span>{done && "Thanks for contacting me"}</span>
                <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
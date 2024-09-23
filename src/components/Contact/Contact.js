import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>  
        <div className='contact-main'>
        <div className='contact-content'>
        <h3 footer-heading>Feel free to conect <br/>with us!</h3>
        <p className='contact-heading'>
        <span>Phone :</span> 0972 663 663<br />
        <span>Email :</span> hello@wefo.com
        </p>
        </div>
        <div className='form-div'>
        <form>
           <label  for='name'>Name:</label>
           <input type='text' id='name' name='name' required></input>
           <label  for='email'>Email:</label>
           <input type='email' id='email' name='email' required></input>
           <label  for='message'>Message:</label>
           <textarea  id='message' name='message' rows='4' required></textarea>
           <button className='form-btn' type='submit'>Send</button>
        </form>
        </div>
        </div>
    </>
  )
}

export default Contact

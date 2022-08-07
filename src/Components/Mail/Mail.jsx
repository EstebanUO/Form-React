import React from 'react'
import emailjs from '@emailjs/browser';

export const Mail = () => {

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_q1nolkb', 'template_5c9sdk3', e.target, 'TcKHCHLHNmSbFbfau')
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

  return (
    <div className='form'>
        <div className='form2'>
            <h1>Contact</h1>
            <form className='formulario' onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" placeholder='Enter your name' name='userName'/>
                <br /><br />
                <label>Email</label>
                <input type="text" placeholder='Enter your email' name='userEmail'/>
                <br /><br />
                <label>Message</label><br />
                <textarea name="userMessage" id="message" cols="30" rows="10"></textarea>
                <br />
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

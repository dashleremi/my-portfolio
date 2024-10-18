import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setErrorMessage('Fill in all fields.');
            return;
        }

        emailjs
        .send(
            'service_conuojr',
            'template_jwac0bh',
            formData,
            'UnbCCavJVyIoAg4eB'
        )
        .then(
            (response) => {
                console.log('Sent!', response.status, response.text);
                setIsSubmitted(true);
                setFormData({name:'', email:'', message:''});
                setErrorMessage('');
            }
        )
    }

  return (
    <div className='mt-32 mx-auto rounded-lg shadow-lg font-extralight text-white'>
        {isSubmitted ? (
            <p className='text-white text-center'><span className='text-2xl glow-text'>Message Sent!</span> <br /> <span className='text-xl'>I will get back to you shortly...</span> <br /><br /> 
            In the meantime, feel free to connect with me via GitHub, LinkedIn, Discord, or Instagram </p>
        ) : (
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-20'>
                    <div>
                        <label htmlFor="name" className='block text-white mb-1'>Name</label>
                        <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Your Full Name' className='w-[500px] p-3 rounded-md bg-[#ffffff11] text-wwhite placeholder-[#ffffff26]' required/>
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-white'>Email</label>
                        <input type="text" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' className='w-[500px] p-3 rounded-md bg-[#ffffff11] text-white placeholder-[#ffffff26]' required/>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className='block text-white'>Message</label>
                    <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} placeholder='Type in your messages here...' className='w-full p-3 rounded-md bg-[#ffffff11] text-white placeholder-[#ffffff26]' required></textarea>
                </div>
                {errorMessage && <p className='text-[#f09a0f]'>{errorMessage}</p>}

                <button type='submit' className='w-32 p-2 bg-[#d46c22] font-light text-white rounded-md hover:bg-[#d46c224f]'>Send</button>
            </form>
        )}
    </div>
  )
}

export default ContactForm
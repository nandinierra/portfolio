import './index.css'
import {useState} from 'react'
const Contact=()=>{
  const [inputname, setname] =useState('')
  const [email, setemail] =useState('')
  const [message, setmessage] =useState('')


  const linkedinbtn=()=>{
    window.open("https://www.linkedin.com/in/erra-nandini/") 
  }
  const Githubbtn=()=>{
    window.open("https://github.com/")
  }
  const emailbtn=()=>{
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=nandinierra34@gmail.com&su=Hello%20Nandini&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!","_blank")
  }

    return(
        <div className='contact-container'>
          <h1 className='contact-heading'>Contact Me</h1>
          <p className='contact-paragraph'>Feel free to reach out for collaboration,I'm always open to meaningful conversations and professional connections.</p>
          <div className='form-other-contacts-container'>
          <div className='left-wrap-container'>
          <p className='find-me'>Find me elsewhere</p>
          <button onClick={emailbtn}  className='other-contact-container'>
            <h1>Email</h1>
          </button>
          <button onClick={linkedinbtn} className='other-contact-container'>
            <h1>Linkedin</h1>
          </button>
          <button onClick={Githubbtn} className='other-contact-container'>
            <h1>GitHub</h1>
          </button>
          </div>
           <form>
            <div className='lable-input-container'>
                <label htmlFor='name'>Name</label>
                <input value={inputname} onChange={(event)=>{
                     setname(event.target.value)
                }} id="name" placeholder='Name'/>
            </div>
            <div className='lable-input-container'>
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(event)=>{setemail(event.target.value)}} id="email" placeholder='example123@gmail.com'/>
            </div>
            <div className='lable-input-container'>
                <label htmlFor='name'>Message</label>
                <textarea value={message} onChange={(event)=>{setmessage(event.target.value)}} id="name" placeholder='Name' cols="8" rows="8"> </textarea>
            </div>
            <div className='send-msg-btn'>

                <button>Send Message</button>
            </div>

           </form>
           </div>
         </div>
)
}
export default Contact

import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import './contact.css'

function Contact({ contact }) {

  let street,
    city,
    state,
    zip,
    email,
    phone;


  if (contact) {
    console.log(contact.email)
    street = contact.address.street
    city = contact.address.city
    state = contact.address.state
    zip = contact.address.zip
    email = contact.email
    phone = contact.phone
  }



  return (
    <div className='footer' >
      <div className="footer__image" />
      <div className='contact__details'>
        <div className="contact">
          <LocationOnIcon />
          <h4>Address</h4>
          <p>{street}</p>
          <p>{zip} {city}</p>
          <p>{state}</p>
        </div>
        <div className="contact">
          <MailOutlineIcon />
          <h4>E-mail</h4>
          <p>{email}</p>
        </div>
        <div className="contact">
          <PhoneInTalkIcon />
          <p>{phone}</p>
        </div>
        <div>
        <a href='/home'> <i className="fa fa-github" aria-hidden="true"></i></a>
        <a href='home'> <i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href='home'> <i className="fa fa-instagram" aria-hidden="true"></i></a>
          <a href={'placeholder'}> <i className="fa fa-facebook" aria-hidden="true"></i></a>
        </div>
      </div>

    </div>
  )
}

export default Contact

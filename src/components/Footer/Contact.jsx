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
    phone,
    instagram,
    linkedin,
    github;


  if (contact) {
    street = contact.address.street
    city = contact.address.city
    state = contact.address.state
    zip = contact.address.zip
    email = contact.email
    phone = contact.phone
    instagram = contact.social.instagram
    linkedin = contact.social.linkedin
    github = contact.social.github
  }



  return (
    <div className='footer' >
      <div className="footer__image" />
      <div id='contact__details'>
        <div className="contact">
          <div className="footer__icons">
          <LocationOnIcon />
          <h4>Address</h4>
          </div>
          <p>{street} <br />{zip} <br />{city} <br />{state}</p>
        </div>
        <div className="contact">
        <div className="footer__icons">
            <MailOutlineIcon />
            <h4>E-mail</h4>
          </div> 
          <p>{email}</p>
        </div>
        <div className="contact">
          <div className="footer__icons">
          <PhoneInTalkIcon />
          <h4>Phone</h4>
          </div>
          <p>{phone}</p>
        </div>
        <div className="social">
          <i id='github__icon' onClick={() => window.open(github)} className="fa fa-github" aria-hidden="true" />
          <i id='linkedin__icon' onClick={() => window.open(linkedin)} className="fa fa-linkedin" aria-hidden="true" />
          <i id='instagram__icon' onClick={() => window.open(instagram)} className="fa fa-instagram" aria-hidden="true" />
          <i id='facebook__icon' onClick={() => window.open(instagram)} className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>

    </div>
  )
}

export default Contact

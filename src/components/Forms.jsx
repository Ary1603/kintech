import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";

//Icons
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram, BsClockHistory } from "react-icons/bs";

function FormsContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const handleOnChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onClickSendMessage = (e) => {
    emailjs
      .sendForm(
        "service_2w9fzk9",
        "template_cm9lvkm",
        form.current,
        "SlsWoeDcMZqT7iJTe"
      )
      .then(
        (result) => {
          alert("Su mensaje ha sido enviado");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // emailjs.send("service_2w9fzk9","template_cm9lvkm",{
    //   message: message,
    //   user_name: name,
    //   user_email: email,
    //   });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if(name != '' && name != null ){
      console.log('entre')
      emailjs
      .sendForm(
        "service_2w9fzk9",
        "template_cm9lvkm",
        form.current,
        "SlsWoeDcMZqT7iJTe"
      )
      .then(
        (result) => {
          alert("Su mensaje ha sido enviado");
          console.log(name)
          console.log(message)
          console.log(email)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }else{
      console.log('no entre')
    }
  };

  return (
    <>
      <div className="contact-us-container">
        <form ref={form} onSubmit={sendEmail} id="contact-us-form">
          <h1>Contáctanos</h1>
          <p>
            No dude en ponerse en contacto con nosotros. Le responderemos lo
            antes posible.
          </p>
          <p className="label-form">Nombre:</p>
          <input
            type="text"
            name="user_name"
            className="input-contact-us-form"
            placeholder="Nombre"
            required="required"
            onChange={handleOnChangeName}
          />
          <p className="label-form">Correo:</p>
          <input
            type="email"
            name="user_email"
            className="input-contact-us-form"
            placeholder="Correo"
            onChange={handleOnChangeEmail}
            
          />
          <p className="label-form">
            Cuentanos mas sobre tu negocio y en que te podriamos ayudar:
          </p>
          <textarea
            name="message"
            placeholder="Tu mensaje"
            id="text-area-client-info"
            onChange={handleOnChangeMessage}
          />
          {/* <input type="submit" value="Send" />  */}

          {/* Button onClick={onClickSendMessage} */}
          <a
            type="submit"
            onClick={onClickSendMessage}
            className="fancy"
            href="#contactanos"
          >
            <span className="top-key"></span>
            <span className="text">Mandar mensaje</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
        </form>
        <div className="yellow-bg"></div>
      </div>

      <div className="container-info">
        <div className="yellow-square-info"></div>
        <h1>Info</h1>
        <ul className="info-list">
          <li>
            <HiOutlineMail id="email-icon" />
            <span>kintech.mex@gmail.com</span>
          </li>
          <li>
            <a id="insta-link" href="https://www.instagram.com/kintech_mex/">
              <BsInstagram id="instagram-icon" />

              <span>kintech_mex</span>
            </a>
          </li>
          <li>
            <BsClockHistory id="clock-icon" />
            <span>9:00 a.m - 6:00 p.m</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FormsContactUs;

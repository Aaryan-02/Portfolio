import React, { useState, useRef, useEffect } from 'react';
import { BsExclamationLg, BsPatchCheckFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';
import {slideInFromLeft, slideInFromRight } from '../utils/Animations.js';
import Map from '../utils/Map.js';
import Blast from "../utils/Blast.js";

const Contact = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const interval = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)

    return () => {
      clearInterval(interval);
    }
  }, [])

  const [validInput, setValidInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const emailRef = useRef(null);
  const TextAreaRef = useRef(null);
  const MessageRef = useRef(null);
  const form = useRef(null);

  const setError = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("success")) {
      inputRef.current.parentElement.classList.remove("success")
    } else {
      inputRef.current.parentElement.classList.add("error")
    }
  }

  const setSuccess = (inputRef) => {
    if (inputRef.current.parentElement.classList.contains("error")) {
      inputRef.current.parentElement.classList.remove("error")
    } else {
      inputRef.current.parentElement.classList.add("success")
    }
  }

  const showMessage = (message, updateColor) => {
    const divContent = document.createElement("div")
    divContent.textContent = message;
    divContent.classList.add("div-content")
    MessageRef.current.prepend(divContent);
    divContent.style.backgroundColor = updateColor

    MessageRef.current.style.transform = `translateX(${0}%)`;

    setTimeout(() => {
      divContent.classList.add("hide");
      //transitionend event is added to eliminate the divContent messages to crash the website from multiple divContent messages
      divContent.addEventListener('transitionend', () => {
        divContent.remove();
      })

      emailRef.current.parentElement.classList.remove("error")
      emailRef.current.parentElement.classList.remove("success")

      TextAreaRef.current.parentElement.classList.remove("error")
      TextAreaRef.current.parentElement.classList.remove("success")
    }, 5000)
  }


  // Contact message of error and success is not getting displayed
  const onSubmit = (e) => {
    e.preventDefault()
    const { email, message } = validInput;
    // const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email && !message) {
      setError(emailRef)
      setError(TextAreaRef)
      showMessage('Pls! fill in the required inputs')
    } else if (!email && message) {
      setError(emailRef)

      showMessage("Ooops! Email can't be empty")
    } else if (!email.match(pattern)) {
      setError(emailRef)
      showMessage('Ooops! Email not valid')
    } else if (!message && email.match(pattern)) {
      setError(TextAreaRef)
      showMessage('Leave a message pls!')

    } else if (email && !message) {
      setError(TextAreaRef)
      showMessage('Leave a message pls!')

    } else if (email && message) {
      emailjs.sendForm('service_yvug0d6', 'template_sbtxoua', form.current, 'ec7Wv8G7DPZpzlL5C')
        .then((result) => {
          setSuccess(emailRef)
          setSuccess(TextAreaRef)
          showMessage('Message sent successfully', 'green')

          setValidInput({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  // An onChange event is triggered when values are entered in the input. This fires a function handleChange(), that is used to set a new state for the input.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidInput((prevValue) => {
      return { ...prevValue, [name]: value }
    })
  }

  return (
    <>
      <section className='contact-section' >
        <form ref={form} className='contact-form' onSubmit={onSubmit}>
          <div>
            <motion.h2 className='contact__heading' variants={slideInFromLeft(-40, 0.5)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <Blast letterClass={letterClass} arrayStr={["C", "o", "n", "t", "a", "c", "t", "  ", "m", "e"]} indexLetter={12} />
            </motion.h2>
            <motion.div variants={slideInFromLeft(-40, 0.8)}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <p>Hey There</p>
              <p className='contact-para'>Got a question or proposal, or just want to say hello? Go ahead</p>
            </motion.div>
          </div>
          <motion.div className='entireForm' variants={slideInFromLeft(-40, 0.6)}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            <div className='input-wrapper'>
              <div className="form-input-group">
                <input type="text" name="name" placeholder="Name" value={validInput.name} autoComplete='off' onChange={handleChange} />
                <span></span>
              </div>
              <div className="form-input-group">
                <input type="text" name="email" placeholder="Email" value={validInput.email} autoComplete='off' onChange={handleChange} ref={emailRef} />
                <span></span>
                <BsExclamationLg className='exclamation' />
                <BsPatchCheckFill className='checkCircle' />
              </div>
            </div>
            <div className="form-input-group">
              <input type="text" name="subject" placeholder="Subject" value={validInput.subject} autoComplete='off' onChange={handleChange} />
              <span></span>
              <BsExclamationLg className='exclamation' />
              <BsPatchCheckFill className='checkCircle' />
            </div>
            <div className="form-input-group">
              <textarea autoComplete='off' ref={TextAreaRef} type="text" placeholder='Message' name="message" value={validInput.message} onChange={handleChange}></textarea>
              <span></span>
              <BsExclamationLg className='exclamation' />
              <BsPatchCheckFill className='checkCircle' />
            </div>
          </motion.div>
          <div className='submit-button'>
            <button type='submit'>Send Message</button>
          </div>
        </form>
        <motion.div variants={slideInFromRight(50, 0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <Map />
        </motion.div>
        <div className='message' ref={MessageRef}></div>
      </section>
      <Footer />
    </>
  )
}

export default Contact

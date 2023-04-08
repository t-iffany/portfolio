import { useState, useRef } from 'react';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Tiffany',
        from_email: form.email,
        to_email: 'tiffanyxleong@gmail.com',
        message: form.message,
      },
      EMAILJS_API_KEY,
    )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back to you as soon as possible.');

        setForm({
          email: "",
          name: "",
          message: "",
        }, (error) => {
          setLoading(false);

          console.log(error);

          alert('Email could not be sent. Please try again.');
        });
      });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        &nbsp;
      </motion.div>

      {/* <div className="xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden"> */}
      {/* <div
        className="mt-12 flex flex-col md:flex-row gap-10 justify-center items-center"
        style={{ maxWidth: '800px' }}
      > */}


      {/* <div className="flex justify-center items-center -mt-32"
        style={{ display: "flex", justifyContent: "flex-start" }}
      > */}

        <motion.div
          variants={slideIn('left', "tween", 0.2, 1)}
          // className="flex-full bg-[#5C9EAD] p-8 rounded-2xl"
          className="flex flex-col md:flex-row justify-center items-center -mt-32"
          style={{ display: "flex", justifyContent: "flex-start", width: "100%", maxWidth: "900px", backgroundColor: "transparent" }}
        >
          {/* <p className={`${styles.sectionSubText} bg-[#5C9EAD]`}>
          Let's
        </p>
        <h3 className={`${styles.sectionHeadText} bg-[#5C9EAD]`}>
          Connect.
        </h3> */}

        <div className="contact-icons flex flex-row md:flex-col items-center justify-start md:justify-center mb-8 md:mb-0">
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="#5C9EAD" />
          <span className="mr-6 md:mr-0 md:text-center">tiffanyxleong@gmail.com</span>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#5C9EAD" />
          Vancouver, B.C. <br/>
          Open to relocating
          <a href="https://www.linkedin.com/in/tiffanyleong/" target="_blank" className="mr-10 mb-3">
            <FontAwesomeIcon icon={faLinkedin} className="fa-lg w-6 h-6" color="#5C9EAD" /> <br/>
            tiffanyleong
          </a>
        </div>

          {/* <div className="form"> */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-[#5C9EAD] p-8 rounded-2xl flex-full"
              style={{ width: "100%", maxWidth: "900px", scale: "0.6"}}
            >

              <label className="flex flex-col bg-[#5C9EAD]">
                <span className="text-white font-medium mb-4 bg-[#5C9EAD]">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outlined-none border-none font-medium"
                  style={{ backgroundColor: "white", width: "100%", maxWidth: "900px" }}
                />
              </label>

              <label className="flex flex-col bg-[#5C9EAD]">
                <span className="text-white font-medium mb-4 bg-[#5C9EAD]">
                  Your Email
                </span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outlined-none border-none font-medium"
                  style={{ backgroundColor: "white", width: "100%", maxWidth: "900px" }}
                />
              </label>

              <label className="flex flex-col bg-[#5C9EAD]">
                <span className="text-white font-medium mb-4 bg-[#5C9EAD]">
                  Your Message
                </span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's your message?"
                  className="py-4 px-6 placeholder:text-secondary
              text-black rounded-lg outlined-none border-none font-medium"
                  style={{ backgroundColor: "white", width: "100%", maxWidth: "900px" }}
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>

            </form>
          {/* </div> */}

        </motion.div>

      {/* </div> */}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
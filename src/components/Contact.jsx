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
          // className="flex-full bg-[#59A7C1] p-8 rounded-2xl"
          className="flex flex-col md:flex-row justify-start items-start"
          style={{ display: "flex", justifyContent: "flex-start", maxWidth: "100%", backgroundColor: "transparent" }}
        >
          {/* <p className={`${styles.sectionSubText} bg-[#59A7C1]`}>
          Let's
        </p>
        <h3 className={`${styles.sectionHeadText} bg-[#59A7C1]`}>
          Connect.
        </h3> */}

        <div className="contact-icons flex flex-row md:flex-col justify-start md:justify-center lg:mt-6 xs:mt-6 gap-4 md:mr-4" style={{ alignItems: "flex-start", flexWrap: "wrap", maxWidth: "100%" }}>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="#9FE2BF" />
            <span className="ml-4 mr-6 md:mr-0 md:center">tiffanyxleong@gmail.com</span>
          </div>

          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/tiffanyleong/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#9FE2BF" className="hover:text-white"/>
              <span className="ml-4 md:mr-0 md:center hover:text-secondary">tiffanyleong</span>
            </a>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#9FE2BF" />
            <span className="ml-4 mr-6 md:mr-0 md:center">Vancouver, B.C.</span>
          </div>
          
        </div>

          {/* <div className="form"> */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 p-6 rounded-2xl flex-full md:w-3/4 lg:w-1/2 xl:w-1/3"
              style={{ width: "100%", maxWidth: "550px" }}
            >

              <label className="flex-col">
                <span className="text-secondary font-medium mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  // placeholder="What's your name?"
                  className="py-2 px-4 placeholder:text-secondary
              text-black rounded-lg outlined-none border-none font-medium md:w-full lg:w-2/3 xl:w-1/2"
                  style={{ backgroundColor: "white", width: "100%" }}
                />
              </label>

              <label className="flex-col">
                <span className="font-medium mb-2 text-secondary">
                  Your Email
                </span>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  // placeholder="What's your email?"
                  className="py-2 px-4 placeholder:text-secondary
              text-black rounded-lg outlined-none border-none font-medium md:w-full lg:w-2/3 xl:w-1/2"
                  style={{ backgroundColor: "white", width: "100%" }}
                />
              </label>

              <label className="flex-col">
                <span className="text-secondary font-medium mb-2">
                  Your Message
                </span>
                <textarea
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  // placeholder="What's your message?"
                  className="py-2 px-4 placeholder:text-secondary mb-2
              text-black rounded-lg outlined-none border-none font-medium md:w-full lg:w-2/3 xl:w-1/2"
                  style={{ backgroundColor: "white", width: "100%" }}
                />
              </label>

              <button
                type="submit"
                className="py-1 px-6 outline-none w-fit text-white bg-[#72A38A]
                rounded-xl text-[18px] hover:text-[#72A38A] hover:bg-white transition-colors duration-300"
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
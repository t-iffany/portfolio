import { useState, useRef} from 'react';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {

  }

  const handleSubmit = (event) => {

  }

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
    <div className="flex justify-center items-center -mt-32"
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-full bg-[#5C9EAD] p-8 rounded-2xl"
        style={{ width: "100%", maxWidth: "900px", scale: "0.6" }}
      >
        {/* <p className={`${styles.sectionSubText} bg-[#5C9EAD]`}>
          Let's
        </p>
        <h3 className={`${styles.sectionHeadText} bg-[#5C9EAD]`}>
          Connect.
        </h3> */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-[#5C9EAD]"
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
              text-gray rounded-lg outlined-none border-none font-medium"
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
              text-gray rounded-lg outlined-none border-none font-medium"
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
              placeholder="What is your message?"
              className="py-4 px-6 placeholder:text-secondary
              text-gray rounded-lg outlined-none border-none font-medium"
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

      </motion.div>

    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { textVariant, fadeIn } from "../../utils/motion";

const Ball = ({ icon }) => {
  return (
    // <Tilt className="xs:w-[250px] w-full">
    //   <motion.div
    //     initial={{ scale: 0.8, opacity: 0 }}
    //     animate={{ scale: 1, opacity: 1 }}
    //     transition={{ duration: 0.5 }}>
    // variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      
    <div className="w-full h-full flex items-center justify-center
    rounded-full shadow-xl transform rotate-12"
    style={{
      backgroundImage: `url(${icon})`,
      backgroundSize: "50%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    >
    </div>
    // </motion.div>
    // </Tilt> 
  );
};

export default Ball;
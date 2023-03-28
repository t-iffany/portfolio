import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// create a higher order Component, which will contain another component inside it
// a function returning another function
const SectionWrapper = (component, idName) =>
function HOC() {
  return (
    <motion.section>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper
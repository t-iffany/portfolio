import { styles } from '../styles';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // background
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 
        top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            {/* dot */}
            <div className="w-5 h-5 rounded-full bg-[#5C9EAD]" />
            {/* line */}
            <div className="w-1 sm:h-80 h-40 blue-gradient" />
          </div>

          <div>
            <hi className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;
              <span className="text-[#5C9EAD]">Tiffany</span>
            </hi>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I transform concepts into innovative web solutions. 
            </p>
          </div>

          {/* page-down-scroll-icon */}
          <div className="absolute xs:bottom-10 bottom-32 w-full flex
          justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 
              border-secondary flex justify-center items-start p-2">
                {/* animate the y-axis */}
                <motion.dev 
                  animate={{
                    y: [0, 24, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />

              </div>
            </a>
          </div>

      </div>
    </section>
  )
}

export default Hero
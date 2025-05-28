import { HERO_CONTENT } from "../constants";
import fotocv from "../assets/fotocv.jpg";
import { motion } from "framer-motion";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-8xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Raul Cisnero
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Intento de Full Stack
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
          {/* <div className='flex justify-end p-4'>
            <button
              className='text-white text-3xl font-bold hover:text-purple-500'
            >
            </button>
          </div> */}
          <div className='flex gap-4 justify-center'>
            <a href="{selectedProject.github}" target='_blank' rel='nose referencia' className='w-1/2 bg-gray-800 hover:bg-purple-900 text-gray-400 justify-center lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>Download CV
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-12">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="opacity-100 transform-none h-[400px] w-[240px] rounded-3xl"
              src={fotocv} alt="RulyCisnero" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero

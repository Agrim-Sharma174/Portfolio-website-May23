import Image from 'next/image';
import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { ContentAnimation, FadeAnimation, CardHomeAnimation } from '@/components/Animations';
import Typewriter from 'typewriter-effect/dist/core';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Initialize Typewriter
    const typewriter = new Typewriter('#typewriter', {
      strings: ['Blockchain Developer', 'Front-end Developer', 'Technical Writer', 'Community Builder'],
      autoStart: true,
      loop: true,
    });

    return () => {
      // Clean up on component unmount
      typewriter.stop();
    };
  }, []);
  return (
    <Layouts>
      <section className="relative flex w-full  flex-col items-center md:justify-evenly justify-center h-screen md:h-screen md:flex-row md:overflow-hidden p-0 md:pl-40">
        <motion.span {...FadeAnimation} className="title-page text-slate-900">
          Agrim
        </motion.span>

        <motion.div {...ContentAnimation} className="relative order-2 md:-mt-24 -mt-16 flex w-1/2 justify-center md:order-2 md:w-1/3">
          <motion.div {...CardHomeAnimation} animate={{ rotate: -12 }} className="card-home absolute bg-[#464646]" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: -3 }} className="card-home absolute bg-secondary-light" />
          <motion.div {...CardHomeAnimation} animate={{ rotate: 2 }} className="card-home relative bg-primary-light">
            <motion.div {...FadeAnimation} className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <Image src="/images/profile/Agirm_pic.jpg" priority layout="intrinsic" width={500} height={500} alt="Agrim Sharma" className="relative" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div {...ContentAnimation} className="  order-1 w-1/3 md:ml-0 -ml-10 md:mt-0 mt-20 md:w-1/5 md:order-1">
          <h3 className=" text-lg font-normal">GM! I am</h3>
          <h1 className="-ml-1 mb-1 mt-2 text-6xl md:text-7xl font-bold text-primary-light">Agrim Sharma</h1>
          <h1 className='w-[200%] text-[#E85173] mt-1 text-xl md:text-4xl fnt-bold'><div id="typewriter"></div> </h1>
          <h4 className=" w-[200%] md:w-[150%] mt-5 pt-3 pr-3 pb-3 text-sm font-light transition-all duration-500 hover:text-primary-light">An undergraduate student who breathe code. A frontend web developer, blockchain developer, and technical writer, fueled with passion for space and its secrets. My strength lies in my ability to work well with others and find solutions to difficult problems.</h4>
          <h4 className=" w-[200%] md:w-[150%] mt-5 pt-3 pr-3 pb-3 text-sm font-light transition-all duration-500 hover:text-primary-light">And yeah... my best skill- Explaining things! ;-)</h4>
          
          {/* Front-end Dev | Blockchain Developer | Technical Writer */}
        </motion.div>
        {/* <p>This design is originally from https://github.com/euxzy/portfolio</p> */}
      </section>
    </Layouts>
  );
};

export default Home;

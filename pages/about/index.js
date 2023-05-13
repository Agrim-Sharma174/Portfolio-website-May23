import Layouts from "@/components/Layouts";
import { Skills } from "@/data/Skills";
import { motion } from "framer-motion";
import { ContentAnimation, FadeAnimation } from "@/components/Animations";
import { AiFillHtml5, AiFillGithub } from "react-icons/Ai";
import { DiCss3, DiReact, DiMongodb } from "react-icons/Di";
import {
  SiJavascript,
  SiSolidity,
  SiTailwindcss,
  SiWeb3Dotjs,
} from "react-icons/Si";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/Tb";
import { FaNodeJs, FaHardHat, FaEthereum, FaPython } from "react-icons/Fa";
import { FiFigma } from "react-icons/Fi";
import { BsGit, BsFillBootstrapFill } from "react-icons/Bs";

const About = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          ABOUT ME
        </motion.span>

        <motion.div
          {...ContentAnimation}
          className="relative order-2 flex w-3/4 flex-col items-end justify-end md:order-1 md:w-1/3"
        >
          <div className="my-5 mr-2 text-left text-2xl font-bold text-primary-light">
            My Skills
          </div>
          <div className="flex h-auto w-[100%] flex-wrap justify-evenly space-x-3 space-y-3 hover:scale-105 md:-mr-7">
            <AiFillHtml5 className="text-6xl " />
            <DiCss3 className="text-6xl  " />
            <SiJavascript className="text-6xl  " />
            <DiReact className="text-6xl  " />
            <TbBrandNextjs className="text-6xl  " />
            <FaNodeJs className="text-6xl  " />
            <DiMongodb className="text-6xl  " />
            <SiSolidity className="text-6xl  " />
            <TbBrandCpp className="text-6xl  " />
            <FaPython className="text-6xl  " />
            <SiTailwindcss className="text-6xl  " />
            <BsFillBootstrapFill className="text-6xl  " />
            <FiFigma className="text-6xl  " />
            <FaHardHat className="text-6xl  " />
            <SiWeb3Dotjs className="text-6xl  " />
            <FaEthereum className="text-6xl  " />
            <BsGit className="text-6xl  " />
            <AiFillGithub className="text-6xl  " />
          </div>
        </motion.div>

        <motion.div
          {...ContentAnimation}
          className="relative order-1 my-10 w-3/4 text-justify md:order-2 md:my-0 md:w-1/4"
        >
          <p className="w-96 text-lg font-light text-primary-light">
            {`I'm AGRIM SHARMA, a computer science undergraduate student, who is dedicated to honing my skills in various areas such as blockchain development, front-end development, design, and programming. My strength lies in my ability to work well with others and find solutions to difficult problems. I enjoy staying current with the latest technology advancements and am always seeking new knowledge to further my development. I spend my free time writing and reading tech blogs, debugging my code, and tackling programming challenges.`}
          </p>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default About;

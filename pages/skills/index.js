import Layouts from "@/components/Layouts";
import { Skills } from "@/data/Skills";
import { motion } from "framer-motion";
import { ContentAnimation, FadeAnimation } from "@/components/Animations";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact, DiMongodb } from "react-icons/di";
import {
  SiJavascript,
  SiSolidity,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import { FaNodeJs, FaHardHat, FaEthereum, FaPython } from "react-icons/fa";
import { FiFigma, FiFramer } from "react-icons/fi";
import { BsGit, BsFillBootstrapFill } from "react-icons/bs";


const About = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page text-slate-900">
          ABOUT ME
        </motion.span>

        <motion.div
          {...ContentAnimation}
          className="relative  flex flex-col items-center md:h-[70vh] "
        >
          <div className="sticky md:top-auto px-1 top-10 my-5 mx-auto text-left text-2xl font-bold text-primary-light backdrop-blur-sm">
            Languages & Tools
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  h-auto mb-10 flex-wrap justify-evenly md:w-[70vw] mx-auto items-center overflow-scroll">
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>React</span>
              <DiReact className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>JavaScript</span>
              <SiJavascript className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>TypeScript</span>
              <SiTypescript className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Nextjs</span>
              <TbBrandNextjs className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>HTML</span>
              <AiFillHtml5 className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>CSS</span>
              <DiCss3 className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Node.js</span>
              <FaNodeJs className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>MongoDB</span>
              <DiMongodb className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Solidity</span>
              <SiSolidity className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Cpp</span>
              <TbBrandCpp className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Python</span>
              <FaPython className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Tailwind CSS</span>
              <SiTailwindcss className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Bootstrap</span>
              <BsFillBootstrapFill className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Figma</span>
              <FiFigma className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Framer</span>
              <FiFramer className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Hardhat</span>
              <FaHardHat className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>web3.js</span>
              <SiWeb3Dotjs className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Ethereum</span>
              <FaEthereum className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>Git</span>
              <BsGit className="text-4xl " />{" "}
            </div>
            <div className="border rounded-lg bg-[#1F283B] hover:bg-slate-900 flex gap-2 items-center justify-center mx-4 my-2 text-2xl p-2 hover:text-primary-light">
              {" "}
              <span>GitHub</span>
              <AiFillGithub className="text-4xl " />{" "}
            </div>


          </div>
        </motion.div>

        {/* <motion.div
          {...ContentAnimation}
          className="relative order-1 my-10 w-3/4 text-center md:order-2 md:my-0 md:w-1/4"
        >
          <p className="md:w-96 text-lg font-light text-primary-light">
            {`I'm AGRIM SHARMA, a computer science undergraduate student, who is dedicated to honing my skills in various areas such as blockchain development, front-end development, design, and programming. My strength lies in my ability to work well with others and find solutions to difficult problems. I enjoy staying current with the latest technology advancements and am always seeking new knowledge to further my development. I spend my free time writing and reading tech blogs, debugging my code, and tackling programming challenges.`}
          </p>
        </motion.div> */}
      </section>
    </Layouts>
  );
};

export default About;

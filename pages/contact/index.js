import Layouts from "@/components/Layouts";
import { motion } from "framer-motion";
import { ContentAnimation, FadeAnimation } from "@/components/Animations";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiHashnode, SiPolywork } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Contact = () => {
  return (
    <Layouts pageTitle=" | Contact">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page">
          CONTACT
        </motion.span>

        <motion.div {...ContentAnimation} className="z-10">
          <div className="relative -top-5 flex justify-center text-3xl">
            My socials
          </div>
          <div className="grid grid-cols-4">
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="https://twitter.com/agrim_sharma174"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </div>
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="https://www.linkedin.com/in/agrim-sharma174/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="https://github.com/Agrim-Sharma174"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </div>
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="https://agrimsharma.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <SiHashnode />
              </a>
            </div>
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="mailto:agrimsharma1714@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail />
              </a>
            </div>
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="https://www.polywork.com/agrim_sharma174"
                target="_blank"
                rel="noreferrer"
              >
                <SiPolywork />
              </a>
            </div>
            <div className="mx-4 my-4 text-4xl hover:text-black">
              <a
                href="https://instagram.com/agrim_sharma174"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </div>
          </div>

          <div>DM me and I would love to intract with you.</div>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Contact;

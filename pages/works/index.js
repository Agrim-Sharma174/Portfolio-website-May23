import Layouts from "@/components/Layouts";
import { motion } from "framer-motion";
import { ContentAnimation, FadeAnimation } from "@/components/Animations";

const index = () => {
  return (
    <Layouts pageTitle=" | About">
      <section className="relative flex w-full flex-col items-center justify-evenly py-40 md:h-screen md:flex-row md:overflow-hidden">
        <motion.span {...FadeAnimation} className="title-page text-slate-900">
          EXPERIENCE
        </motion.span>

        <motion.div
          {...ContentAnimation}
          className="relative  flex flex-col items-center md:h-[70vh] "
        >
          <div className="sticky md:top-auto px-1 top-10 my-5 mx-auto text-left text-2xl font-bold text-primary-light backdrop-blur-sm">
            Work In Progress...
            <div className="mx-auto">Building</div> 
          </div>

        </motion.div>

      </section>
    </Layouts>
  )
}

export default index
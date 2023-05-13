import Layouts from './Layouts';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SvgAnimation } from '@/components/Animations';

const LoadingPage = () => {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 0);

  return (
    <Layouts>
      <div className="relative flex h-screen w-full items-center justify-center">
        <svg width="100" height="100" viewBox="0 0 207 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <AnimatePresence>
            {show && (
              <motion.path
                {...SvgAnimation}
                d="M0 841L0 -0.89001465L595.276  "
                strokeWidth="10"
                className="stroke-primary-light"
              />
            )}
          </AnimatePresence>
        </svg>
      </div>
    </Layouts>
  );
};

export default LoadingPage;

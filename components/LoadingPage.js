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
        .
      </div>
    </Layouts>
  );
};

export default LoadingPage;

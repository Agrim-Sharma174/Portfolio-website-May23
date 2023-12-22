import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FadeAnimation, LineAnimation } from './Animations';

const Header = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Skills', path: '/skills' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
    { title: 'Work', path: '/works' },
  ];

  return (
    <motion.header {...FadeAnimation} className="fixed left-0 -top-12 z-40 flex w-full justify-between pt-24 md:top-0">
      <div className="flex w-1/2 items-baseline">
        <div className="w-3/5 md:w-2/5">
          <motion.div {...LineAnimation} animate={{ width: '25%' }} className="line-header mb-1 h-1" />
          <motion.div {...LineAnimation} animate={{ width: '100%' }} className="line-header mb-1 h-1 bg-[#E85173]" />
          <motion.div {...LineAnimation} animate={{ width: '67%' }} className="line-header h-1" />
        </div>
      </div>

      <div className="relative flex w-1/2 flex-col items-end justify-end md:flex-row">
        <div onClick={() => setOpen(!open)} className={`mr-12 flex w-8 cursor-pointer flex-col items-end md:hidden ${!open ? '' : 'hamburger-active'}`}>
          <div className="hamburger-line w-1/2" />
          <div className="hamburger-line w-full" />
          <div className="hamburger-line w-2/3" />
        </div>

        <div className={`absolute top-12 right-0 md:relative md:top-0 md:mr-10 md:w-11/12 lg:mr-40 lg:w-1/2 ${!open ? 'hide' : 'show'}`}>
          <nav className="navbar md:w-24 rounded-md md:flex md:flex-col md:fixed md:left-4 md:mt-1 md:my-auto md:space-y-5 backdrop-blur-sm p-3">
            {navLinks.map((link) => (
              <Link key={link.title} href={link.path}>
                <a className={`nav-items hover:scale-110 md:backdrop-blur-xl md:hover:backdrop-blur-sm md:hover:bg-white md:hover:bg-opacity-5 md:w-[74px] md:h-[74px] md:rounded-full md:flex justify-center md:items-center md:transition md:duration-100 md:shadow-gray-50 md:hover:shadow-[#E85173] md:shadow-inner md:hover:shadow-inner  ${router.pathname === link.path ? 'text-primary-light md:shadow-[#E85173]' : ''}`}>{link.title}</a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

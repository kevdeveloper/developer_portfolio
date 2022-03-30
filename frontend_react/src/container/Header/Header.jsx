import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

// style property for animated circle
const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hi, my name is</p>
              <h1 className='head-text'>Kevin</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Web Developer</p>
            <p className='p-text'>Software Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >

      </motion.div>
{/* this is for the animated my name header*/}
      <motion.div
        whileInView={{ opacity: [0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
{/* this is for the animated profile image */}
        <img src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0,1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          // this is for the animated circle behind profile image
          className='overlay_circle'
        />
      </motion.div>
{/* animate circle */}
      <motion.div
        variant={ scaleVariants }
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
{/* adding icons for the technologies I know how to use */}
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={'circle-${index}'}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;
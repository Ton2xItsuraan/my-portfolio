import React from 'react'
import LineGradient from '../Components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import Skills from "../assets/skills-image.png"

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section id='skills' className='pt-10 pb-24'>
        {/* HEADER AND IMAGE SECTION */}
        <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Through my portfolio, I aim to present a curated collection of my work, highlighting my unique talents and contributions to the field.
          </p>
        </motion.div>

            <div className='mt-16 md:mt-0'>
                {isAboveMediumScreens ? (
            <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]'
                >
              
              <img src={Skills} alt="Skills" 
                className='z-10' />
            </div>
                ) : (
                    <img src={Skills} alt="Skills" 
                className='z-10' />
                )}
            </div>
        </div>

        {/* SKILLS */}
        <div className='md:flex md:justify-between mt-16 gap-32'>
            {/* EXPERIENCE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: { opacity: 0, y: 50},
                      visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>01</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Back-End Dev</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
                        </div>
                            <p className='mt-5'>
                            I specialize in backend development, crafting robust and scalable solutions to power web applications. With a strong foundation in backend technologies and frameworks, I bring expertise in building and optimizing databases, implementing RESTful APIs, and handling server-side logic.
                            </p>
                        
                    
                </motion.div>

                {/* INNOVATIVE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: { opacity: 0.2, y: 50},
                      visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>02</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>Front-End Dev</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
                        </div>
                            <p className='mt-5'>
                            I specialize in frontend development, crafting engaging and intuitive user interfaces to bring web applications to life. With a keen eye for design and a mastery of frontend technologies, I excel in creating responsive and accessible experiences across various devices and platforms. 
                            </p>
                        
                    
                </motion.div>

                {/* IMAGINATIVE */}
                <motion.div
                    className='md:w-1/3 mt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: { opacity: 0.4, y: 50},
                      visible: { opacity: 1, y: 0}
                    }}
                >
                    <div className='relative h-32'>
                        <div className='z-10'>
                            <p className='font-playfair font-semibold text-5xl'>03</p>
                            <p className='font-playfair font-semibold text-3xl mt-3'>SEO</p>
                        </div>
                        <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
                        </div>
                            <p className='mt-5'>
                            My expertise spans keyword research, on-page optimization, technical SEO, content optimization, and performance analysis, ensuring websites achieve sustainable and long-term success in search engine rankings.
                            </p>
                        
                    
                </motion.div>
        </div>
    </section>
  )
}

export default MySkills

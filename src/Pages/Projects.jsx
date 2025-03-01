import React from 'react'
import LineGradient from '../Components/LineGradient'
import { motion } from 'framer-motion'
import Project1 from '../assets/project-1.jpeg'
import Project2 from '../assets/project-2.jpeg'
import Project3 from '../assets/project-3.jpeg'
import Project4 from '../assets/project-4.jpeg'
import Project5 from '../assets/project-5.jpeg'
import Project6 from '../assets/project-6.jpeg'
import Project7 from '../assets/project-7.jpeg'



const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  
  const Project = ({ title, name, description }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title;
  
    return (
      <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{name}</p>
          <p className="mt-7">
            {description}
          </p>
        </div>
        <img src={projectTitle} alt={projectTitle} />
      </motion.div>
    );
  };
  
  const Projects = () => {
    return (
      <section id="projects" className="pt-48 pb-48">
        {/* HEADINGS */}
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-red">PRO</span>JECTS
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
          Through my portfolio, I aim to present a curated collection of my work, highlighting my unique talents and contributions to the field.
          </p>
        </motion.div>
  
        {/* PROJECTS */}
        <div className="flex justify-center">
          <motion.div
            className="sm:grid sm:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* ROW 1 */}
            <div
              className="flex justify-center text-center items-center p-10 bg-red
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
              BEAUTIFUL USER INTERFACES
            </div>
            <a href="https://workshift360.onrender.com/"><Project title={Project1} name="WorkShift360" description="Tools Used:
Tailwind CSS, MERN, JavaScript.
Outcome: Collaborate with a team, made a full-stack job posting web app"/></a>
            <a href="https://my-portfolio-nu-lemon.vercel.app/"><Project title={Project2} name="My Portfolio" description="Tools Used:
Tailwind CSS, MERN, JavaScript.
Outcome: Made my very first portfolio website."/></a>
  
            {/* ROW 2 */}
            <Project title={Project3} name="Project 3"/>
            <Project title={Project4} name="Project 4"/>
            <Project title={Project5} name="Project 5"/>
  
            {/* ROW 3 */}
            <Project title={Project6} name="Project 6"/>
            <Project title={Project7} name="Project 7"/>
            <div
              className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
              SMOOTH USER EXPERIENCE
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Projects;

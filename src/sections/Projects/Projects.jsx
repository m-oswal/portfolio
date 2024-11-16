 import React from 'react'
 import styles from './Projects.module.css'
 import dummy from '../../assets/esprout.webp'
 import daanbox from '../../assets/DaanBox.png'
 import ProjectCard from '../../common/ProjectCard'
 function Projects() {
   return (
     <section id="projects" className={styles.container}>
       <h1 className='sectionsTitle'>Projects</h1>
       <div className={styles.projectsContainer}>
       <ProjectCard src={dummy} url="https://github.com/m-oswal/Sprout" projectname="Sprout" projectdesc="E-learning Platform" />
        <ProjectCard src={daanbox} url="https://github.com/pranav-suri/daanbox" projectname="DaanBox" projectdesc="Medical Equipment Donation App" />
        
       </div>
     </section>
   )
 }
 
 export default Projects;
 
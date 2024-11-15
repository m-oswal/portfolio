import styles from './Hero.module.css'
import heroimg from '../../assets/portfolio.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import gitlight from '../../assets/github-light.svg'
import linklight from '../../assets/linkedin-light.svg'
import gitdark from '../../assets/github-dark.svg'
import linkdark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/moksh_oswal_resume.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme,toggleTheme} = useTheme();
    const themeIcon = theme == 'light' ? sun:moon;
    const gitlogo = theme == 'light' ? gitlight:gitdark;
    const linklogo = theme == 'light' ? linklight:linkdark;

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} 
            src={heroimg} alt="profile picture" />
            <img className={styles.colorMode} 
            src={themeIcon} alt="theme" 
            onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Moksh <br /> Oswal</h1>
            <h2>Software Engineer</h2>
            <span>
                <a href="https://github.com/m-oswal" target="_blank">
                    <img src={gitlogo} alt="" />
                </a>

                <a href="https://linkedin.com/in/moksh-oswal" target="_blank">
                    <img src={linklogo} alt="" />
                </a>
            </span>

            <p className={styles.description}>
            Hi, I'm Moksh Oswal, a passionate developer and engineer with a strong background in building innovative projects, from learning platforms and automation systems to app development and cybersecurity. I’m driven by problem-solving and constantly expanding my technical skills.
            </p>

            <a href={CV} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero;

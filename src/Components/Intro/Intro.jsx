import React from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Last from '../../img/last.png'
import glassEmoji from '../../img/glassesimoji.png'
import Crown from '../../img/crown.png'
import thumbup from '../../img/thumbup.png'
import Floating from '../../Floating/Floating'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';
import Git from '@iconscout/react-unicons/icons/uil-github'
import Likd from '@iconscout/react-unicons/icons/uil-linkedin'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import  {motion } from 'framer-motion'
import {Link} from 'react-scroll'



const Intro = () => {
  const transition = {duration : 2, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      {/*left Side*/}
      <div className="i-left">
        <div className="m-intro">
          <span style={{color : darkMode? 'white' : ''}}>Hy! I am</span>
          <span>Erick Wainaina</span>
          <span>FullStack developer and a Data Architect with high level of experience in web designing, development and data analysis,<br/>       producting the Quality work</span>
          <Link spy={true} to='hire' smooth={true}>
          <button className="button m-button">Hire Me</button>
          </Link>
          
          <div className="m-icons">
            <a href='https://github.com/Rico-blib?tab=repositories'><Git/></a>
            <a href='https://www.linkedin.com/in/eric-mburu-239b14256/'><Likd /></a>
            <a href='https://twitter.com/EricMburucupa'><Twitter/></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Last} alt="" />
        <motion.img src={glassEmoji} alt=""
         initial={{left: '-36%'}}
         whileInView= {{left:'-24%'}}
         transition={transition}

         />

        <motion.div className="floating-div"
         initial={{top: '-4%',left: '74%'}}
         whileInView={{left: '68%'}}
         transition={transition}

         style={{top:'-4%', left:'59%'}}>

          <Floating image={Crown} txt1='FullStack' txt2='Developer'/>
        </motion.div>

        <motion.div
         initial={{left: '9rem', top: '18rem'}}
         whileInView={{left: '0rem'}}
         transition={transition}
         className="floating-div"
         style={{top:'18rem', left:'0rem'}}>
         <Floating image={thumbup} txt1='Data' txt2='Architect'/>
        </motion.div>
        
        {/*blur divs*/}
       <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
       <div className="blur" style={{background: '#C1F5FF', top:'17rem', width: '21rem', height: '11rem', left:'-9rem'}}></div>
      </div>
      
    </div>
  ) 
}

export default Intro
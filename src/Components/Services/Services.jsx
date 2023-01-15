import React from 'react'
import Card from '../Cards/Card'
import  './Services.css'
import Heart from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import MyCv from './mycv.pdf'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration:2,  type: 'spring'} 
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
      {/*Left side*/}
      <div className="s-left">
        <span style={{color : darkMode? 'white' : ''}}>My awesome</span>
        <span>Services</span>
        <span>Check out services that i offer in the cards <br/>
        Also download my cv for more info
        </span>
        <a href={MyCv} download>
        <button className="button s-button ">Download Cv</button>
        </a>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
          
      </div>
      {/*right side*/}
      <div className="s-right">
        <motion.div
         whileInView={{left: '14rem'}}
         initial={{left: '25rem'}}
         transition={transition}
         style={{left: '14rem'}}>
          <Card  emoji={Heart} heading = {'Design'} detail = {'Gimp,, Photoshop, Adope, Figma'}/> 
        </motion.div>
        <motion.div
         whileInView={{top: '12rem', left:'-4'}}
         transition={transition}
         initial={{top:'18rem' , left:'-6rem'}}
         style={{top: '12rem', left:'-4rem'}}>
         <Card  emoji={Glasses} heading={'Developer'} detail = {'JavaScript, React, Mongo, Nodejs, Express'} />
        </motion.div>

         
        <motion.div
        whileInView={{top:'19rem', left:'12rem'}}
        transition={{transition}}
        initial={{left:'23rem'}}
        style={{top:'19rem', left:'12rem'}}>
         <Card  emoji={Humble} heading={'Architect'} detail = {'SQl, R, Advanced Excel, Python, Spark, Hive'}/>
        </motion.div>
        
        </div>
       <div className="blur s-blur2" style={{background: 'var(--purple'}}></div>
    </div>
  )
}

export default Services
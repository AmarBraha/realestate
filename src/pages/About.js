import React from 'react'
import "./About.css";
import Begging from "../images/16480-real-estate-investment-types.jpg";
import Logo from "../images/IMG_2199.jpeg";

const About = () => {
  return (
    <div>
        <div id="grid-container">
            <div className='img'>
            <img src={Begging} alt="Begging" />
            </div>
            <div className='text'>
            <p>The</p>
            <h1><b>Begging</b></h1>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            </div>

       
        </div>

        <div id='grid-container2'>
                <div className='text2'>
                <p>The</p>
            <h1><b>Founder</b></h1>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
                    </div>
                    <div className='img'>
                    <img src={Logo} alt="Logo" style={{backgroundColor: ""}} />
                        </div>
            </div>




            <div id='grid-container3'>
            <div className='img'>
                    <img src={Logo} alt="Logo" style={{backgroundColor: ""}} />
                        </div>
                <div className='text3'>
                <p>The</p>
            <h1><b>Founder</b></h1>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
            <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
            </p>
                    </div>

            </div>
    </div>
  )
}

export default About
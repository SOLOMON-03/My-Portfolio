import React from 'react'
import img1 from '../Assets/pexels-pixabay-39284.jpg';
import img2 from '../Assets/pexels-pixabay-163100.jpg';
import img3 from '../Assets/pexels-pixabay-265087.jpg';
import './Project.css';

function Project() {
  return (
    <div className='project'>
        <div className='project-container'>
            <h1 className='project-sub-title'>My Projects</h1>
            <div className='project-list'>
                <div className='project-img'>
                    <img src={img1} alt=''/>
                    <div className='project-layer'>
                        <h3>Property Provision Portal with MERN Stack (10/2023 - 01/2024)</h3>
                        <p>
                            This project proposes an website to rent or sale the home or land property, It comes under mern stack.
                            It helps to people to buy or sell the property through an online.  
                        </p>
                        <a href="https://property provision.onrender.com/">Project Live</a>
                    </div>
                </div>
                <div className='project-img'>
                    <img src={img3} alt=''/>
                    <div className='project-layer'>
                        <h3>Movie rental using MySQL database in Java (06/2023 - 08/2023)</h3>
                        <p>
                        This project proposes a console programming, this project stores the details of movies in database and get 
                        the details from customer Get the movie name from customer then search in database that is available 
                        in stock or not and if its available sell it to the customer or say no availability of the movie
                        </p>
                    </div>
                </div>
                <div className='project-img'>
                    <img src={img2} alt=''/>
                    <div className='project-layer'>
                        <h3>Audio and Text Transmission Using Li-Fi (06/2021 - 05/2022)</h3>
                        <p>
                        This project proposes an indoor navigation system for visually challenged people using Li-Fi. 
                        This system is based on audio transmission where it can be used to change the environment for visually challenged people.
                        It operates on the principle of converting audio signal to electrical signal.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
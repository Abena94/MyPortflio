import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Education.scss';

const Education = () => {
    const [educations, setEducation] = useState([]);
 
    useEffect(() => {
      const query = '*[_type == "education"]';

  
      client.fetch(query).then((data) => {
        setEducation(data);
      });

    }, []);
  return (
    <>
    <h2 className="head-text">Education</h2>
    
    <div className="app__education-exp">
          {educations.map((education) => (
            <motion.div
              className="app__education-exp-item"
              key={education.year}
            >
              <div className="app__education-exp-year">
                <p className="bold-text">{education.year}</p>
              </div>
              
                
                      <h4 className="bold-text">{education.degree}</h4>
                      <p className="p-text">{education.school}</p>
                    
                
              
            </motion.div>
          ))}
        </div>

    
    </>
  )
};

export default AppWrap(
    MotionWrap(Education, 'app__education'),
    'education',
    'app__whitebg',
  );


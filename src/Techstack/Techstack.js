import React from 'react'
import './Techstack.css';
import { TechstackList } from '../utils/Techstacklist';

const Techstack = () => {
  return (
    <>
      <div className='container techstack' id='tech-stack'>
        <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Technology Stack</h2>

        <hr/>

        
        <p className='pb-3 text-center'>
            👉 including programming Language , frameworks, database,front-end and React APIs
        </p>

      
      <div className='row'>
        {TechstackList.map((tech) => (
            <div className='col-md-3'>
                <div key={tech._id} className='card m-2'>
                    <div className='card-content'>
                        <div className='card-body'>
                            <div className='media d-flex justify-content-center'>
                                <div className='align-self-center'>
                                    {/* <tech.icon className='tech-icon'/> */}
                                    <tech.icon className='tech-icon' style={{ color: tech.color, fontSize: "30px" }} />
                                </div>
                                <div className='media-body'>
                                    <h5>{tech.name}</h5>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        ))}
      </div>
      </div>
    </>
  )
}

export default Techstack

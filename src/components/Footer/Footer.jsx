import React from 'react'
import Socialmedia from './Micro_footer/Socialmedia'
import Onestep from './Micro_footer/Onestep'
import Fotter_columns from './Micro_footer/Fotter_columns'

const Footer = () => {
  return (
    <>
    <footer>
        <div className='container'>
            <div>
              <Socialmedia/>
              <Onestep/>
              <Fotter_columns/>

            </div>

        </div>
    </footer>
        
    </>
  )
}

export default Footer
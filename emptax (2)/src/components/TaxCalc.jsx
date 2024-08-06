import React from 'react'
import TaxCalculator from './landingpage'
import '../css/TaxCalc.css'
import NavBar from './NavBar'
const TaxCalc = () => {
  return (
    <div className='calc'>
        <NavBar/>
        <br></br>
        <div className='component'>
            <TaxCalculator/>
        </div>
    </div>
  )
}

export default TaxCalc
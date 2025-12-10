import React from 'react'
import Mainproductdetail from './MainproductDetail'
import Youmaylike from './Youmaylike'
import { Productarray } from '../common/Commondata'

const Particularproduct = () => {
  return (
    <div className='px-4 md:px-15 lg:px-20'>
      <Mainproductdetail />
      <Youmaylike Productarray={Productarray}/>
    </div>
  )
}

export default Particularproduct

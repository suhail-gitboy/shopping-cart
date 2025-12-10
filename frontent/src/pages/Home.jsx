import React from 'react'
import Hero from '../components/layoout/Hero'
import Genderpost from '../components/products/Genderpost'
import Newarrivals from '../components/products/Newarrivals'
import Bestseller from '../components/products/PRoductDetail'
import Youmaylike from '../components/products/Youmaylike'
import Topproduct from '../components/products/Topproduct'
import FeaturedCollection from '../components/products/FeaturedCollection'
import ServiceSec from '../components/products/ServiceSec'
import { Productarray } from '../components/common/Commondata'





const Home = () => {
  return (
    <div>
<Hero/>
<div className='px-4 md:px-15 lg:px-20'>
<Genderpost/>
<Newarrivals/>
<h2 className='mb-5 font-bold text-center text-3xl'>Best seller</h2>
<Bestseller/>
<Youmaylike Productarray={Productarray}/>
<Topproduct Womanproduct={Productarray}/>
<FeaturedCollection/>
<ServiceSec/>
</div>
    </div>
  )
}

export default Home

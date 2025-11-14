import React from 'react'
import { Link } from 'react-router-dom';
const AppFooter = () => {
  return (
    <div className='text-center '>
      <h1 className='mt-4'>
        <Link to = 'https://www.facebook.com/SPUsripatumuniversity' target='_blank'>
          <button className='badge bg-secondary'>SPU</button>
        </Link>
        &nbsp;-
        <Link to = 'https://www.facebook.com/informationspu' target='_blank'>
          <button className='badge bg-secondary'>SIT</button>
        </Link>

        &nbsp;-
        <Link to = 'https://www.facebook.com/informationspu' target='_blank'>
          <button className='badge bg-info'>CSI</button>
        </Link>
      </h1>
    </div>
  )
}

export default AppFooter

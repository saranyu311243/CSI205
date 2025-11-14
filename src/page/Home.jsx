import React from 'react'
import Me from '../assets/saranyu.jpg';

const Home = () => {
  return (
    <div className='d-flex align-items-center justify-content-center min-vh-50'>
      <div className='container my-5'>
        <div className='card p-4 p-md-5 shadow-sm border-0' style={{ borderRadius: '15px' }}>
          <div className='row g-5 align-items-center'>
            <div className='col-lg-4 text-center'>
              <img 
                src={Me} 
                alt="Me" 
                className='rounded-circle img-fluid shadow-lg'
                style={{ 
                  width: '250px', 
                  height: '250px', 
                  objectFit: 'cover', 
                  border: '5px solid white' 
                }}
              />
            </div>
            <div className='col-lg-8'>
              <h1 className='display-5 fw-bold'>Saranyu Saetang</h1>
              <p className='text-muted fs-4'>67140410</p>
              <hr className='my-4' />
              <p className='fs-5'><strong>คณะ:</strong> เทคโนโลยีสารสนเทศ</p>
              <p className='fs-5'><strong>สาขา:</strong> วิทยาการคอมพิวเตอร์</p>
              <p className='fs-5'><strong>ชั้นปีที่:</strong> 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

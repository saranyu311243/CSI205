import React, { useState, useEffect } from 'react'
import Value from './Value'

const Temperatures = () => {
  const [celsius, setCelsius] = useState(25)
  const [fahrenheit, setFahrenheit] = useState(77)
  const [kelvin, setKelvin] = useState(298.15)

  // Convert temperatures when celsius changes
  useEffect(() => {
    setFahrenheit(parseFloat((celsius * 9/5 + 32).toFixed(2)))
    setKelvin(parseFloat((celsius + 273.15).toFixed(2)))
  }, [celsius])

  // Convert when fahrenheit changes
  useEffect(() => {
    const newCelsius = parseFloat(((fahrenheit - 32) * 5/9).toFixed(2))
    if (newCelsius !== celsius) {
      setCelsius(newCelsius)
    }
  }, [fahrenheit])

  // Convert when kelvin changes
  useEffect(() => {
    const newCelsius = parseFloat((kelvin - 273.15).toFixed(2))
    if (newCelsius !== celsius) {
      setCelsius(newCelsius)
    }
  }, [kelvin])

  return (
    <div className="card mx-auto mt-4 " style={{maxWidth: '75%'}}>
      <div className="card-body">
        <h1 className="card-title text-center mb-4 text-primary">TEMPERATURES</h1>
        
        <div className="row mb-4">
          <div className="col-md-4">
            <span className="badge bg-primary fs-6 w-100 p-3 d-flex align-items-center justify-content-center" style={{height: '50px'}}>
              {celsius.toFixed(2)} °C
            </span>
          </div>
          <div className="col-md-4">
            <span className="badge bg-primary fs-6 w-100 p-3 d-flex align-items-center justify-content-center" style={{height: '50px'}}>
              {fahrenheit.toFixed(2)} °F
            </span>
          </div>
          <div className="col-md-4">
            <span className="badge bg-primary fs-6 w-100 p-3 d-flex align-items-center justify-content-center" style={{height: '50px'}}>
              {kelvin.toFixed(2)} °K
            </span>
          </div>
        </div>

        <div className="row g-3">
          <div className="col-md-4 d-flex">
            <div className="w-100">
              <Value 
                name={'CELSIUS'} 
                value={celsius} 
                setValue={setCelsius}
                type={'real'}
              />
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="w-100">
              <Value 
                name={'FAHRENHEIT'} 
                value={fahrenheit} 
                setValue={setFahrenheit}
                type={'real'}
              />
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="w-100">
              <Value 
                name={'KELVIN'} 
                value={kelvin} 
                setValue={setKelvin}
                type={'real'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Temperatures

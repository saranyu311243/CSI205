import React, { useState } from 'react'
import RadixCounter from '../Component/RadixCounter'
import Value from '../Component/Value'
import Timer from '../Component/Timer'
import Adder from '../Component/Adder'
import Temperatures from '../Component/Temperatures'
const Components = () => {

  const [counter, setCounter] = useState(0)

  return (
    <div className='w-75 mx-auto my-3'>
      <div className="d-flex gap-3">
        <div style={{width: '35%'}}>
          <div className="bg-light p-3 rounded border border-dark">
            <Value name={'COUNTER'} value={counter} setValue={setCounter} />
          </div>
          <div className="mt-3 bg-light p-3 rounded border border-dark">
            <Timer />
          </div>
        </div>
        <div style={{width: '65%'}}>
          <div className="bg-light p-3 rounded border border-dark">
            <Adder />
          </div>
        </div>
      </div>
      <div className="mt-3 bg-light p-3 rounded border border-dark">
        <Temperatures />
      </div>
    </div>
  )
}

export default Components

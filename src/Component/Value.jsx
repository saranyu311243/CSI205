import React, { useEffect, useState } from 'react'

const Value = ({ name, initial, type , value , setValue }) => {

    useEffect(() => {
        if (initial !== undefined) {
            setValue(initial)
        }
    }, [initial])

    const handleDecrease = () => {
        const newValue = value - 1
        setValue(parseFloat(newValue.toFixed(2)))
    }

    const handleIncrease = () => {
        const newValue = value + 1
        setValue(parseFloat(newValue.toFixed(2)))
    }

    // ถ้าเป็น temperature component ให้ใช้สไตล์พิเศษ
    const isTemperature = name === 'CELSIUS' || name === 'FAHRENHEIT' || name === 'KELVIN'

    if (isTemperature) {
        return (
            <div className='border border-dark border-2 rounded-2 p-3 bg-light h-100 d-flex flex-column justify-content-between'
                style={{ minHeight: '120px' }}>
                <h5 className='text-primary text-center mb-3 fw-bold'>{name || 'VALUE'}</h5>
                <div className='d-flex justify-content-between align-items-center gap-2'>
                    <button className='btn btn-danger btn-sm'
                        onClick={handleDecrease}>
                        &minus;
                    </button>
                    <div className='fs-5 fw-bold text-center flex-grow-1 bg-white border rounded p-2'>
                        {parseFloat(value).toFixed(2)}
                    </div>
                    <button className='btn btn-success btn-sm'
                        onClick={handleIncrease}>
                        +
                    </button>
                </div>
            </div>
        )
    }

    // สไตล์เดิมสำหรับ Counter และ Adder
    return (
        <div className='border border-black mt-3 w rounded-2 p-3 mx-auto'
        style={{ maxWidth: '70%' }}>
            <h5 className='text-primary text-center mb-2 fw-bold'>{name || 'VALUE'}</h5>
            <div className='d-flex  align-items-center justify-content-center gap-1'>
                <button className='btn btn-danger btn-sm'
                    onClick={handleDecrease}>
                    &minus;
                </button>
                <div>
                    {type === 'real' ? parseFloat(value).toFixed(2) : value}
                </div>
                <button className='btn btn-success btn-sm'
                    onClick={handleIncrease}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Value

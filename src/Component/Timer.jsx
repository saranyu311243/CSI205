import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [second, setSecond] = useState(60)
    const [isRunning, setIsRunning] = useState(false)
    
    const convertToString = (sec) => {
        const MINUTE_SECOND = 60
        const minute = Math.floor(sec / MINUTE_SECOND)
        const remainingSecond = sec % MINUTE_SECOND
        return minute + 'm' + remainingSecond + 's'
    }

    // Timer countdown effect
    useEffect(() => {
        let interval = null
        if (isRunning && second > 0) {
            interval = setInterval(() => {
                setSecond(prevSecond => prevSecond - 1)
            }, 1000)
        } else if (second === 0) {
            setIsRunning(false)
        }
        return () => clearInterval(interval)
    }, [isRunning, second])

    const handleRun = () => {
        setIsRunning(!isRunning)
    }

    const handleReset = () => {
        setIsRunning(false)
        setSecond(60)
    }
    
    return (
        <div className=" card mx-auto mt-4" style={{maxWidth: '400px'}}>
            <div className="card-body text-center">
                <h1 className="card-title text-primary">TIMER</h1>
                <input 
                    className="form-control text-center fs-4 fw-bold mb-3"
                    value={convertToString(second)} 
                    readOnly 
                />

                <div className="d-flex gap-2 justify-content-center">
                    <button 
                        className={`btn ${isRunning ? 'btn-warning' : 'btn-success'}`}
                        onClick={handleRun}
                    >
                        <i className={`bi ${isRunning ? 'bi-pause' : 'bi-play'}`}></i>
                        {isRunning ? ' Pause' : ' Run'}
                    </button>
                    <button 
                        className='btn btn-danger'
                        onClick={handleReset}
                    >
                        <i className="bi bi-arrow-clockwise"></i> Reset
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Timer

import { useState } from "react"

const RadixCounter = () => {
  const [value, setValue] = useState(0)

  const minusClicked = () => {
    if (value <= 0) {
      setValue(4095) // ถ้าต่ำกว่า 0 ให้กลับไป 4095
    } else {
      setValue((p) => p - 1)
    }
  }

  const resetClicked = () => {
    setValue(0)
  }

  const plusClicked = () => {
    if (value >= 4095) {
      setValue(0) // ถ้าเกิน 4095 ให้กลับไป 0
    } else {
      setValue((p) => p + 1)
    }
  }

  return (
    <div className="border border-black border-2 m-auto p-3 rounded-3 mt-3" style={{ width: "70%" }}>
      {/* Title */}
      <h1 className="fw-bold text-center">RADIX COUNTER</h1>

      {/* Body */}
      <div className="d-flex justify-content-between text-center gap-3 mt-3">
        {/* HEX */}
        <div>
          <div className="fs-5 fw-bold">[HEX]</div>
          <div className="fs-5 font-monospace text-danger">
            {value.toString(16).toUpperCase().padStart(3, "0")}
          </div>
        </div>
        {/* DEC */}
        <div>
          <div className="fs-5 fw-bold">[DEC]</div>
          <div className="fs-5 font-monospace text-primary">
            {value.toString(10).padStart(4, "0")}
          </div>
        </div>
        {/* OCT */}
        <div>
          <div className="fs-5 fw-bold">[OCT]</div>
          <div className="fs-5 font-monospace text-success">
            {value.toString(8).padStart(4, "0")}
          </div>
        </div>
        {/* BIN */}
        <div>
          <div className="fs-5 fw-bold">[BIN]</div>
          <div className="fs-5 font-monospace text-warning">
            {value.toString(2).padStart(12, "0")}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-around mt-4">
        <button
          className="btn btn-danger px-4"
          onClick={minusClicked}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "orange")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "red")}
        >
          &minus;
        </button>
        <button className="btn btn-secondary px-4" onClick={resetClicked}>
          RESET
        </button>
        <button
          className="btn btn-success px-4"
          onClick={plusClicked}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "orange")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "green")}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default RadixCounter

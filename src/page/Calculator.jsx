import React, { useState, useEffect, useCallback } from 'react';

const buttonLayout = [
    { label: 'C', class: 'col-3 btn-danger', type: 'clear' },
    { label: '÷', class: 'col-3 btn-info', type: 'operator' },
    { label: '×', class: 'col-3 btn-info', type: 'operator' },
    { label: '⌫', class: 'col-3 btn-warning', type: 'backspace' },
    
    { label: '7', class: 'col-3 btn-light border', type: 'number' },
    { label: '8', class: 'col-3 btn-light border', type: 'number' },
    { label: '9', class: 'col-3 btn-light border', type: 'number' },
    { label: '-', class: 'col-3 btn-info', type: 'operator' },

    { label: '4', class: 'col-3 btn-light border', type: 'number' },
    { label: '5', class: 'col-3 btn-light border', type: 'number' }, 
    { label: '6', class: 'col-3 btn-light border', type: 'number' },
    { label: '+', class: 'col-3 btn-info', type: 'operator' },

    { label: '1', class: 'col-3 btn-light border', type: 'number' },
    { label: '2', class: 'col-3 btn-light border', type: 'number' },
    { label: '3', class: 'col-3 btn-light border', type: 'number' },
    { label: '=', class: 'col-3 btn-success', type: 'equals', rowSpan: 2 }, 

    { label: '0', class: 'col-6 btn-light border', type: 'number' },
    { label: '.', class: 'col-3 btn-light border', type: 'decimal' },
];

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [formula, setFormula] = useState('');
    const [waitingForOperand, setWaitingForOperand] = useState(true);
    
    const calculate = (expression) => {
        try {
            const safeExpression = expression
                .replace(/×/g, '*')
                .replace(/÷/g, '/');
            
            if (/[+\-*/]{2,}/.test(safeExpression)) {
                return 'Error';
            }
            
            let result = new Function('return ' + safeExpression)();
            
            if (result === Infinity || result === -Infinity || isNaN(result)) {
                return 'Error';
            }
            
            result = parseFloat(result.toFixed(10));
            return String(result);
        } catch (error) {
            return 'Error';
        }
    };

    const handleButtonClick = useCallback((label) => {
        const lastChar = formula.slice(-1);
        
        if (/[0-9]/.test(label)) {
            if (display === 'Error') {
                setDisplay(label);
                setFormula(label);
                setWaitingForOperand(false);
            } else if (waitingForOperand || display === '0') {
                setDisplay(label);
                setFormula(prev => prev + label);
                setWaitingForOperand(false);
            } else {
                setDisplay(prev => prev + label);
                setFormula(prev => prev + label);
            }
        } else if (label === '.') {
            if (display === 'Error') return;
            if (waitingForOperand) {
                setDisplay('0.');
                setFormula(prev => prev + '0.');
                setWaitingForOperand(false);
            } else if (!display.includes('.')) {
                setDisplay(prev => prev + '.');
                setFormula(prev => prev + '.');
            }
        } else if (['+', '-', '×', '÷'].includes(label)) {
            if (display === 'Error') return;
            
            let newFormula = formula;
            if (['+', '-', '×', '÷'].includes(lastChar)) {
                newFormula = newFormula.slice(0, -1);
            }
            
            setFormula(newFormula + label);
            setDisplay(label);
            setWaitingForOperand(true);
        } else if (label === '=') {
            if (formula === '' || display === 'Error') return;
            const result = calculate(formula);
            setDisplay(result);
            setFormula(result === 'Error' ? '' : result);
            setWaitingForOperand(true);
        } else if (label === 'C') {
            setDisplay('0');
            setFormula('');
            setWaitingForOperand(true);
        } else if (label === '⌫') {
            if (display === 'Error') return;
            if (formula.length > 0) {
                const newFormula = formula.slice(0, -1);
                setFormula(newFormula);
                
                if (newFormula === '') {
                    setDisplay('0');
                    setWaitingForOperand(true);
                } else {
                    const lastChar = newFormula.slice(-1);
                    if (['+', '-', '×', '÷'].includes(lastChar)) {
                        setDisplay(lastChar);
                        setWaitingForOperand(true);
                    } else {
                        const matches = newFormula.match(/[0-9.]+$/);
                        setDisplay(matches ? matches[0] : '0');
                        setWaitingForOperand(false);
                    }
                }
            }
        }
    }, [display, formula, waitingForOperand]);

    const handleKeyPress = useCallback((event) => {
        const key = event.key;
        
        if (/[0-9]/.test(key)) {
            handleButtonClick(key);
        } else if (key === '.') {
            handleButtonClick('.');
        } else if (['+', '-'].includes(key)) {
            handleButtonClick(key);
        } else if (key === '*') {
            handleButtonClick('×');
        } else if (key === '/') {
            event.preventDefault();
            handleButtonClick('÷');
        } else if (key === 'Enter' || key === '=') {
            event.preventDefault();
            handleButtonClick('=');
        } else if (key === 'Escape') {
            handleButtonClick('C');
        } else if (key === 'Backspace') {
            event.preventDefault();
            handleButtonClick('⌫');
        }
    }, [handleButtonClick]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="calculator-body p-4 rounded shadow-lg">
                <div className="row mb-3">
                    <div className="col-12 text-right">
                        <div className="formula-display small text-muted">{formula}</div>
                        <div className="display-screen bg-light p-3 rounded border border-dark">
                            <span className="display-text h4">{display}</span>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {buttonLayout.map((btn, index) => (
                        <div 
                            key={index} 
                            className={`${btn.class.split(' ')[0]} mb-2 px-1`}
                        >
                            <button
                                className={`btn btn-block py-3 font-weight-bold ${btn.class.split(' ').slice(1).join(' ')}`}
                                onClick={() => handleButtonClick(btn.label)}
                            >
                                {btn.label}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calculator;
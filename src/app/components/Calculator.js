"use client";

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [history, setHistory] = useState('');
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleButtonClick = (value) => {
    if (['+', '-', '*', '÷'].includes(value)) {
      if (operator && !waitingForOperand) {
        const secondValue = parseFloat(displayValue);
        let result;
        switch (operator) {
          case '+':
            result = firstValue + secondValue;
            break;
          case '-':
            result = firstValue - secondValue;
            break;
          case '*':
            result = firstValue * secondValue;
            break;
          case '÷':
            result = firstValue / secondValue;
            break;
          default:
            break;
        }
        if (result > 999999999 || result < 0) {
          setDisplayValue('ERROR');
        } else {
          setFirstValue(result);
          setDisplayValue(result.toString().slice(0, 9));
        }
        setHistory(history + ' ' + displayValue + ' ' + value);
      } else {
        setFirstValue(parseFloat(displayValue));
        setHistory(displayValue + ' ' + value);
      }
      setWaitingForOperand(true);
      setOperator(value);
    } else if (value === '=') {
      if (operator && displayValue) {
        const secondValue = parseFloat(displayValue);
        let result;
        switch (operator) {
          case '+':
            result = firstValue + secondValue;
            break;
          case '-':
            result = firstValue - secondValue;
            break;
          case '*':
            result = firstValue * secondValue;
            break;
          case '÷':
            result = firstValue / secondValue;
            break;
          default:
            break;
        }
        if (result > 999999999 || result < 0) {
          setDisplayValue('ERROR');
        } else {
          setDisplayValue(result.toString().slice(0, 9));
        }
        setHistory('');
        setFirstValue(null);
        setOperator(null);
        setWaitingForOperand(false);
      }
    } else if (value === 'AC') {
      setDisplayValue('');
      setFirstValue(null);
      setOperator(null);
      setHistory('');
      setWaitingForOperand(false);
    } else {
      if (waitingForOperand) {
        setDisplayValue(value.toString());
        setWaitingForOperand(false);
      } else {
        if (value === '.' && displayValue.includes('.')) {
          return;
        }
        setDisplayValue((prev) => (prev + value).slice(0, 9));
      }
    }
  };

  return (
    <div className="calculator">
      <div className="header">
        <div className="window">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <Display history={history} currentValue={displayValue} />
      </div>
      <div className="keys">
        <div className="row">
          <div className="number">
            {[7, 8, 9].map((num) => (
              <Button key={num} value={num} onClick={handleButtonClick} />
            ))}
          </div>
          <div className="symbol">
            <Button value="÷" onClick={handleButtonClick} />
          </div>
        </div>
        <div className="row">
          <div className="number">
            {[4, 5, 6].map((num) => (
              <Button key={num} value={num} onClick={handleButtonClick} />
            ))}
          </div>
          <div className="symbol">
            <Button value="-" onClick={handleButtonClick} />
          </div>
        </div>
        <div className="row">
          <div className="number">
            {[1, 2, 3].map((num) => (
              <Button key={num} value={num} onClick={handleButtonClick} />
            ))}
          </div>
          <div className="symbol">
            <Button value="+" onClick={handleButtonClick} />
          </div>
        </div>
        <div className="row">
          <div className="number">
            <Button value="AC" onClick={handleButtonClick} className="dull" />
            <Button value={0} onClick={handleButtonClick} />
            <Button value="." onClick={handleButtonClick} />
            <Button value="=" onClick={handleButtonClick} />
          </div>
          <div className="symbol action">
            <Button value="*" onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

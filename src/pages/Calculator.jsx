import React, { useState } from 'react';
import { FaMoon, FaSun, FaUser } from 'react-icons/fa'; // Import icons from react-icons

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light'); // State for theme

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`flex items-center justify-center h-screen ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className={`rounded-lg shadow-lg p-4 w-full max-w-md mx-auto ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}>
        
        {/* Theme Toggle Icons */}
        <div className="flex justify-between mb-2">
          <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>SomCalculator</h1>
          <button onClick={toggleTheme} className={`text-2xl p-2 rounded ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            {theme === 'light' ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-300" />}
          </button>
        </div>

        <input
          type="text"
          value={input}
          className={`w-full p-3 text-right text-2xl border border-gray-600 rounded mb-2 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}
          readOnly
        />
        <input
          type="text"
          value={result}
          className={`w-full p-3 text-right text-2xl border border-gray-600 rounded mb-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}
          readOnly
        />
        
        <div className="grid grid-cols-4 gap-2">
          <button onClick={handleClear} className="col-span-2 p-4 bg-red-500 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95">C</button>
          {['7', '8', '9', '/'].map((value) => (
            <button key={value} className="p-4 bg-gray-600 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={() => handleClick(value)}>{value}</button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button key={value} className="p-4 bg-gray-600 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={() => handleClick(value)}>{value}</button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button key={value} className="p-4 bg-gray-600 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={() => handleClick(value)}>{value}</button>
          ))}
          <button className="col-span-2 p-4 bg-gray-600 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={() => handleClick('0')}>0</button>
          <button className="p-4 bg-gray-600 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={() => handleClick('.')}>.</button>
          <button className="p-4 bg-gray-600 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={() => handleClick('+')}>+</button>
          <button className="col-span-4 p-4 bg-green-500 text-white rounded text-2xl transition-transform transform hover:scale-105 active:scale-95" onClick={handleCalculate}>=</button>
        </div>
        <div className="mt-4 flex items-center justify-center text-gray-600">
          <FaUser className={`${theme === 'light' ? 'text-black' : 'text-white'} mr-2`} />
          <p className={`${theme === 'light' ? 'text-black' : 'text-white'}`}>Author: Eng Abdalla</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

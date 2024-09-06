import React, { useEffect, useState } from 'react'

function CurrrencyConvert() {
    const [amount, setAmount] = useState(1);
    const [currencyFrom, setCurrencyFrom] = useState('USD');
    const [currencyTo, setCurrencyTo] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(1);
  
    useEffect(() => {
      const fetchExchangeRate = async () => {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
        const data = await response.json();
        setExchangeRate(data.rates[currencyTo]);
      };
  
      fetchExchangeRate();
    }, [currencyFrom, currencyTo]);
  
    useEffect(() => {
      setConvertedAmount(amount * exchangeRate);
    }, [amount, exchangeRate]);
  
    return (
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={currencyFrom} onChange={(e) => setCurrencyFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Add more currencies here */}
        </select>
        <select value={currencyTo} onChange={(e) => setCurrencyTo(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          {/* Add more currencies here */}
        </select>
        <p>{convertedAmount} {currencyTo}</p>
      </div>
    );
  }

export default CurrrencyConvert
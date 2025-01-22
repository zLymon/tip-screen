'use client'
import { useState } from 'react';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan' }
];

const defaultTipPercentages = [10, 15, 20];

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipType, setTipType] = useState('percentage');
  const [tipValue, setTipValue] = useState('15');
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [splitCount, setSplitCount] = useState(1);

  const calculateTip = () => {
    const bill = parseFloat(billAmount) || 0;
    if (tipType === 'percentage') {
      return (bill * (parseFloat(tipValue) / 100));
    }
    return parseFloat(tipValue) || 0;
  };

  const calculateTotal = () => {
    const bill = parseFloat(billAmount) || 0;
    return bill + calculateTip();
  };

  const calculatePerPerson = () => {
    return calculateTotal() / splitCount;
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: selectedCurrency.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      {/* Currency Selection */}
      <div className="mb-6">
        <label className="block text-dark text-sm font-bold mb-2">
          Select Currency
        </label>
        <select
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={selectedCurrency.code}
          onChange={(e) => setSelectedCurrency(currencies.find(c => c.code === e.target.value))}
        >
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name} ({currency.symbol})
            </option>
          ))}
        </select>
      </div>

      {/* Bill Amount */}
      <div className="mb-6">
        <label className="block text-dark text-sm font-bold mb-2">
          Bill Amount
        </label>
        <div className="relative">
          <span className="absolute left-3 top-2 text-gray-600">
            {selectedCurrency.symbol}
          </span>
          <input
            type="number"
            className="w-full pl-8 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="0.00"
            min="0"
            step="0.01"
          />
        </div>
      </div>

      {/* Tip Type Selection */}
      <div className="mb-6">
        <label className="block text-dark text-sm font-bold mb-2">
          Tip Type
        </label>
        <div className="flex gap-4">
          <button
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              tipType === 'percentage'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setTipType('percentage')}
          >
            Percentage
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
              tipType === 'amount'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setTipType('amount')}
          >
            Fixed Amount
          </button>
        </div>
      </div>

      {/* Tip Input */}
      <div className="mb-6">
        <label className="block text-dark text-sm font-bold mb-2">
          {tipType === 'percentage' ? 'Tip Percentage' : 'Tip Amount'}
        </label>
        {tipType === 'percentage' && (
          <div className="grid grid-cols-3 gap-2 mb-2">
            {defaultTipPercentages.map((percentage) => (
              <button
                key={percentage}
                className={`py-2 px-4 rounded-lg transition-colors ${
                  tipValue === percentage.toString()
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setTipValue(percentage.toString())}
              >
                {percentage}%
              </button>
            ))}
          </div>
        )}
        <div className="relative">
          {tipType === 'amount' && (
            <span className="absolute left-3 top-2 text-gray-600">
              {selectedCurrency.symbol}
            </span>
          )}
          <input
            type="number"
            className={`w-full ${
              tipType === 'amount' ? 'pl-8' : 'pl-3'
            } pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
            value={tipValue}
            onChange={(e) => setTipValue(e.target.value)}
            placeholder={tipType === 'percentage' ? '15' : '0.00'}
            min="0"
            step={tipType === 'percentage' ? '1' : '0.01'}
          />
          {tipType === 'percentage' && (
            <span className="absolute right-3 top-2 text-gray-600">%</span>
          )}
        </div>
      </div>

      {/* Split Count */}
      <div className="mb-6">
        <label className="block text-dark text-sm font-bold mb-2">
          Split Bill
        </label>
        <div className="flex items-center gap-4">
          <button
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => setSplitCount(Math.max(1, splitCount - 1))}
          >
            -
          </button>
          <span className="text-xl font-semibold text-dark">{splitCount}</span>
          <button
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors"
            onClick={() => setSplitCount(splitCount + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="bg-theme-light rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tip Amount:</span>
          <span className="font-semibold text-dark">{formatAmount(calculateTip())}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Amount:</span>
          <span className="font-semibold text-dark">{formatAmount(calculateTotal())}</span>
        </div>
        {splitCount > 1 && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Per Person:</span>
            <span className="font-semibold text-dark">{formatAmount(calculatePerPerson())}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipCalculator; 
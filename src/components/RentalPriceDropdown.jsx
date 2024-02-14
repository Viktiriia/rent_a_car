import React from 'react';

const RentalPriceDropdown = ({ selectedPrice, handlePriceChange }) => {
  // Створюємо масив цін з кроком у $10 до максимальної ціни
  const prices = [];
  for (let price = 10; price <= 300; price += 10) {
    prices.push(price);
  }

  return (
    <label>
      <p>Price / 1 hour</p>
      <select value={selectedPrice} onChange={handlePriceChange}>
        <option value="">All</option>
        {prices.map((price, index) => (
          <option key={index} value={price}>
            ${price}
          </option>
        ))}
      </select>
    </label>
  );
};

export default RentalPriceDropdown;
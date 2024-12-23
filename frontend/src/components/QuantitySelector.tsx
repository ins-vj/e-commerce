import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min;
    if (value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  const decrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

 return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        className="px-3 py-1 border-r hover:bg-gray-100"
        onClick={decrease}
      >
        -
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        className="w-16 text-center py-1 focus:outline-none"
      />
      <button
        className="px-3 py-1 border-l hover:bg-gray-100"
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};
export default QuantitySelector;
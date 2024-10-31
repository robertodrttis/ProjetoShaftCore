import React from 'react';

const Calendary: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-md font-bold mb-4">Football live scores and today schedule</h2>
      <div className="flex items-center justify-between mb-4">
        <button className="text-gray-600 hover:text-gray-800">{'<'}</button>
        <span className="font-semibold">October 2024</span>
        <button className="text-gray-600 hover:text-gray-800">{'>'}</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-sm font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {[...Array(31)].map((_, index) => (
          <div
            key={index}
            className={`p-2 rounded-full hover:bg-blue-100 cursor-pointer ${
              index + 1 === 29 ? 'bg-blue-500 text-white' : 'text-gray-800'
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <button className="mt-4 p-2 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Today
      </button>
    </div>
  );
};

export default Calendary;

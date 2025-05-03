import React from 'react';

function Template1({ data }) {
  return (
    <div className="p-4 border">
      <h2 className="text-lg font-bold mb-2">{data.name}</h2>
      <p>Age: {data.age}</p>
      <p>Education: {data.education}</p>
    </div>
  );
}

export default Template1;

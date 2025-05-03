import React from 'react';
import BrideGroomImg from './Bridegroom.png'; // Adjust the path to your image
import GroupedImages from './GroupedImages';

const Front1 = () => {
  return (
    <div className="bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400 text-white p-10">
   <h1 className="text-3xl mb-10 text-maroon font-bold text-left">biodata.awsm</h1>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug mb-4">
            The AWSM <br /> Marriage Biodata Maker
          </h1>
          <p className="text-lg mb-6">
            Create beautiful biodata for marriage with just a few clicks! Easy to use, fully customizable, elegantly designed marriage biodata formats.
          </p>
          <button className="bg-maroon hover:bg-red-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg">
            Create AWSM Biodata
          </button>
          <p className="mt-3 text-sm text-emerald-100">🟢 346 biodatas created today</p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center gap-4">
          <GroupedImages/>
        </div>
        </div>
        </div>
  );
};

export default Front1;

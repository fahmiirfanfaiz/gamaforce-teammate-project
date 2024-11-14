// // src/components/MissionPlanner.tsx
// import React, { useState } from 'react';

// type Point = {
//   longitude: string;
//   latitude: string;
// };

// const MissionManual: React.FC = () => {
//   const [missionName, setMissionName] = useState('');
//   const [points, setPoints] = useState<Point[]>([{ longitude: '', latitude: '' }]);

//   const addPoint = () => {
//     setPoints([...points, { longitude: '', latitude: '' }]);
//   };

//   const handlePointChange = (index: number, field: keyof Point, value: string) => {
//     const updatedPoints = [...points];
//     updatedPoints[index][field] = value;
//     setPoints(updatedPoints);
//   };

//   const handleSubmit = () => {
//     // Implementasikan logika untuk submit data di sini
//     console.log('Mission Name:', missionName);
//     console.log('Mission Points:', points);
//     alert('Mission submitted!');
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md mt-4">
//       <h2 className="text-lg font-bold text-center mb-4">Plan Mission Manually</h2>
      
//       {/* Mission Name Input */}
//       <label className="block mb-2 font-medium">Add Name of Your Mission</label>
//       <input
//         type="text"
//         value={missionName}
//         onChange={(e) => setMissionName(e.target.value)}
//         className="w-full p-2 mb-4 border rounded-md"
//         placeholder="Mission Name"
//       />

//       {/* Points Input */}
//       {points.map((point, index) => (
//         <div key={index} className="flex gap-2 mb-4">
//           <div className="w-1/2">
//             <label className="block text-sm">Longitude</label>
//             <input
//               type="text"
//               value={point.longitude}
//               onChange={(e) => handlePointChange(index, 'longitude', e.target.value)}
//               className="w-full p-2 border rounded-md"
//               placeholder="Longitude"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="block text-sm">Latitude</label>
//             <input
//               type="text"
//               value={point.latitude}
//               onChange={(e) => handlePointChange(index, 'latitude', e.target.value)}
//               className="w-full p-2 border rounded-md"
//               placeholder="Latitude"
//             />
//           </div>
//         </div>
//       ))}

//       {/* Add Point Button */}
//       <button
//         onClick={addPoint}
//         className="w-full p-2 mb-4 text-white bg-gray-800 rounded-md hover:bg-gray-900"
//       >
//         Add More Point
//       </button>

//       {/* Submit Button */}
//       <button
//         onClick={handleSubmit}
//         className="w-full p-2 text-white bg-black rounded-md hover:bg-gray-800"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default MissionManual;

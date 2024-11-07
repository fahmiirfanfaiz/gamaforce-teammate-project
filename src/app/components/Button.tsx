import React from 'react';

const Button = () => {
  return (
    <div className="fixed right-4 bottom-10 flex flex-col space-y-4">
      
      {/* Shapes Group (Point, Polyline, Polygon, Rectangle, Circle) */}
      <div className="flex flex-col space-y-2 p-2 bg-white shadow-lg rounded-lg">
        {/* Point Button */}
        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z"></path>
          </svg>
        </button>

        {/* Polyline Button */}
        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M20 12a2 2 0 0 0-.703.133l-2.398-1.963c.059-.214.101-.436.101-.67C17 8.114 15.886 7 14.5 7S12 8.114 12 9.5c0 .396.1.765.262 1.097l-2.909 3.438A2.06 2.06 0 0 0 9 14c-.179 0-.348.03-.512.074l-2.563-2.563C5.97 11.348 6 11.179 6 11c0-1.108-.892-2-2-2s-2 .892-2 2 .892 2 2 2c.179 0 .348-.03.512-.074l2.563 2.563A1.906 1.906 0 0 0 7 16c0 1.108.892 2 2 2s2-.892 2-2c0-.237-.048-.46-.123-.671l2.913-3.442c.227.066.462.113.71.113a2.48 2.48 0 0 0 1.133-.281l2.399 1.963A2.077 2.077 0 0 0 18 14c0 1.108.892 2 2 2s2-.892 2-2-.892-2-2-2z"></path>
          </svg>
        </button>

        {/* Rectangle Button */}
        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
          </svg>
        </button>

        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" }}
          >
            <path d="M20 14.185v-2.369A2.997 2.997 0 0 0 22 9c0-1.654-1.346-3-3-3a2.99 2.99 0 0 0-2.116.876L12.969 5.31c.01-.103.031-.204.031-.31 0-1.654-1.346-3-3-3S7 3.346 7 5c0 .762.295 1.451.765 1.981L6.091 9.212A2.977 2.977 0 0 0 5 9c-1.654 0-3 1.346-3 3s1.346 3 3 3c.159 0 .313-.023.465-.047L7.4 17.532c-.248.436-.4.932-.4 1.468 0 1.654 1.346 3 3 3a2.994 2.994 0 0 0 2.863-2.153l3.962-.792A2.987 2.987 0 0 0 19 20c1.654 0 3-1.346 3-3a2.995 2.995 0 0 0-2-2.815zM19 8a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-9-4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-6 8a1.001 1.001 0 1 1 1 1c-.552 0-1-.449-1-1zm6 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2.761-2.172A3.005 3.005 0 0 0 10 16c-.386 0-.752.079-1.091.213l-1.674-2.231C7.705 13.451 8 12.762 8 12c0-.536-.152-1.032-.399-1.467l1.935-2.58c.152.024.305.047.464.047a2.99 2.99 0 0 0 2.116-.876l3.915 1.566c-.01.103-.031.204-.031.31 0 1.302.839 2.401 2 2.815v2.369a2.996 2.996 0 0 0-2 2.815c0 .061.015.117.018.177l-3.257.652zM19 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
          </svg>
        </button>


        {/* Circle Button */}
        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
          </svg>
        </button>
      </div>
      
      {/* Zoom Controls Group */}
      <div className="flex flex-col space-y-2 p-2 bg-white shadow-lg rounded-lg">
        {/* Zoom In Button */}
        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
        </button>

        {/* Zoom Out Button */}
        <button className="p-2 bg-white rounded-md shadow hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black">
            <path d="M5 11h14v2H5z"></path>
          </svg>
        </button>
      </div>
      
    </div>
  );
};

export default Button;

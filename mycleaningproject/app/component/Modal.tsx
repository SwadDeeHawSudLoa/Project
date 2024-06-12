import React from 'react';
import Image from 'next/image';
const Modal = ({ show, onClose, post }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
  <div className="flex justify-end">
    <button 
      onClick={onClose} 
      className=" text-black text-xl     rounded"
    >
      ×
    </button>
</div>

    
    <div className="relative w-full h-48 mb-4 justify-center ">
      <Image
        src={post.img}
        alt={post.name}
        layout="fill"
        objectFit="cover"
        className="rounded-t-lg"
      />
    </div>
    <div className="text-xl mb-4 flex justify-center space-x-4">
    <p>{post.name}</p>
    <p><strong>สถานที่พบ:</strong> {post.place}</p>
    <p><strong>หมวดหมู่:</strong> {post.category}</p>
</div>

<div className="text-center bg-slate-200 rounded w-3/4 h-auto p-10 mx-auto">
  <p className="text-left"><strong>ลายละเอียด:</strong> {post.des}</p>
</div>



    <div className="flex justify-center mt-4">
      <button className='bg-green-400 text-white py-2 px-4 rounded'>ติดต่อคนพบของหาย</button>
    </div>
    <div className="flex items-center justify-between mt-4">
      <button 
        className="bg-blue-300 text-blue-500 py-2 px-4 rounded"
      >
        ดูหมุด
      </button> 
      <p className={`text-white ${
          post.status === 'get' ? 'text-orange-500' :
          post.status === 'active' ? 'text-blue-500' :
          post.status === 'inside' ? 'text-green-500' : ''
        } rounded-md py-1 px-2`} style={{ marginLeft: 'auto' }}>
        <strong>สถานะ:</strong> {post.status}
      </p>
    </div>
  </div>
</div>

      
  );
};

export default Modal;

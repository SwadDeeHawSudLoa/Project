import React from 'react';
import Image from 'next/image'; // Importing Image component

interface Post {
  id: string;
  img: string;
  name: string;
  place: string;
  category: string;
  status: string;
  des: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  post: Post;
  view: 'status' | 'ตรวจสอบ';
}

const Modal: React.FC<ModalProps> = ({ show, onClose, post, view }) => {
  const userEmail = localStorage.getItem('userEmail');

  if (!show) return null;

  const isAdmin = userEmail === 'admin@example.com';

  return (
    <div 
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center" 
      aria-modal="true" 
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div className="flex justify-end">
          <button 
            onClick={onClose} 
            className="text-black text-xl rounded" 
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={post.img}
            alt={post.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="text-xl mb-4 flex flex-row justify-center items-center space-x-4">
          <p>{post.name}</p>
          <p><strong>สถานที่พบ:</strong> {post.place}</p>
          <p><strong>หมวดหมู่:</strong> {post.category}</p>
        </div>
        {view !== 'status' && view !== 'ตรวจสอบ' && (
  <>
    <div className="text-center bg-slate-200 rounded w-3/4 h-auto p-4 mx-auto">
      <p className="text-left"><strong>ลายละเอียด:</strong> {post.des}</p>
    </div>
    <div className="flex justify-center mt-4">
      <button className='bg-green-400 text-gray-950 py-2 px-4 rounded'>
        ติดต่อคนพบของหาย
      </button>
    </div>
    <div className="flex items-center justify-between mt-4">
      <button className="bg-blue-300 text-blue-500 py-2 px-4 rounded">
        ดูหมุด
      </button>
      {post.status === 'สถานะถูกรับไปเเล้ว' && (
        <div className="flex-1 flex justify-center">
          <button className="bg-blue-400 text-gray-950 py-2 px-4 rounded">
            ดูรูปหลักฐาน
          </button>
        </div>
      )}
      <p className={`ml-auto ${
        post.status === 'สถานะถูกรับไปเเล้ว' ? 'text-orange-500' :
        post.status === 'สถานะไม่อยู่ในคลัง' ? 'text-red-500' :
        post.status === 'สถานะอยู่ในคลัง' ? 'text-green-500' : ''
      } rounded-md py-1 px-2`}
      >
        <strong>สถานะ:</strong> {post.status}
      </p>
    </div>
  </>
)}

        {view === 'status' && (
          <>
            <div className="text-center bg-slate-200 rounded w-3/4 h-auto p-4 mx-auto">
              <p className="text-left"><strong>ลายละเอียด:</strong> {post.des}</p>
            </div>
            <div className="flex justify-center mt-4">
              <button className='bg-green-400 text-gray-950 py-2 px-4 rounded'>
                ติดต่อคนพบของหาย
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <button className="bg-blue-300 text-blue-500 py-2 px-4 rounded">
                ดูหมุด
              </button>
              {post.status === 'สถานะถูกรับไปเเล้ว' && (
                <div className="flex-1 flex justify-center">
                  <button className="bg-blue-400 text-gray-950 py-2 px-4 rounded">
                    ดูรูปหลักฐาน
                  </button>
                </div>
              )}
              <p className={`ml-auto ${
                post.status === 'สถานะถูกรับไปเเล้ว' ? 'text-orange-500' :
                post.status === 'สถานะไม่อยู่ในคลัง' ? 'text-red-500' :
                post.status === 'สถานะอยู่ในคลัง' ? 'text-green-500' : ''
              } rounded-md py-1 px-2`}
              >
                <strong>สถานะ:</strong> {post.status}
              </p>
            </div>
          </>
        )}
        {view === 'ตรวจสอบ' && isAdmin && (
          <>
          <div className="text-center bg-slate-200 rounded w-3/4 h-auto p-4 mx-auto">
          <p className="text-left"><strong>ลายละเอียด:</strong> {post.des}</p>
        </div >
        <div className='flex items-center justify-between mt-4'> 
  <button className="bg-blue-500 text-white rounded-md py-1 px-3 w-full">
    แนบรูปหลักฐาน
  </button>
  <button
    className="bg-orange-500 text-white rounded-md py-1 px-3 w-full"
    onClick={() => console.log('Update status to สถานะถูกรับไปเเล้ว')}
  >
    สถานะถูกรับไปเเล้ว
  </button>
  <button
    className="bg-red-500 text-white rounded-md py-1 px-3 w-full"
    onClick={() => console.log('Update status to สถานะไม่อยู่ในคลัง')}
  >
    สถานะไม่อยู่ในคลัง
  </button>
  <button
    className="bg-green-500 text-white rounded-md py-1 px-3 w-full"
    onClick={() => console.log('Update status to สถานะอยู่ในคลัง')}
  >
    สถานะอยู่ในคลัง
  </button>
</div>

           
          </>
        )}
        
      </div>
    </div>
  );
};

export default Modal;

import React from 'react';

const ReportPage = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-lg">
        <div className="flex justify-end">
          <button 
            onClick={() => window.history.back()} 
            className="text-black text-xl rounded"
          >
            ×
          </button>
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">แจ้งพบของสูญหาย</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อสิ่งของ
            </label>
            <input
              type="text"
              placeholder="กรุณาระบุชื่อสิ่งของ"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              หมวดหมู่
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            >
              <option>กรุณาเลือกหมวดหมู่</option>
              {/* Add other options here */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              รายละเอียดของสภาพสิ่งของ
            </label>
            <textarea
              placeholder="กรุณาระบุรายละเอียด"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              สถานที่พบของหาย
            </label>
            <input
              type="text"
              placeholder="กรุณาระบุสถานที่หาย"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 flex justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              รูปภาพ
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ตำแหน่ง
            </button>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ส่ง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;




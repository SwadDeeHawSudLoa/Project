import React from "react";
export default function popUP(){
    return (
    <div className="border border-gray-300 p-5 w-72 mx-auto">
      <div className="text-center">
        <img src="" alt="" />
      </div>
      <h2 className="text-lg font-bold mt-4">ชื่อ iPad Air 4</h2>
      <div className="mt-2">หมวดหมู่: iPad</div>
      <div className="mt-2">สถานที่พบ: SC3</div>
      <div className="mt-4">
        <h3 className="text-md font-semibold">รายละเอียดของสภาพสิ่งของ</h3>
        <p className="mt-1">มีหน้าจอ แตกเล็กน้อย เคสสีชมพู</p>
      </div>
      <button className="bg-green-500 text-white py-2 px-4 border-none cursor-pointer mt-4 w-full">
        ติดต่อคนพบของหาย
      </button>
      <div className="mt-4 text-center ">
        <button className="bg-blue-500 text-white py-2 px-4 border-none cursor-pointer w-full">
          ดูหมุด
        </button>
      </div>
      <div className="mt-4 text-center text-green-600">
        สถานะอยู่ในคลัง
      </div>
    </div>
    );
  
    };
    
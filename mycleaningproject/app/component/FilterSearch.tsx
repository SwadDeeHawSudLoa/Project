import React from "react";

export default function FilterSearch(){
return (
<form className=" flex justify-center items-center mt-10 space-x-4">
<input type="text" name="search" placeholder="ค้นหา..." className="px-4 py-2 border rounded" />
<select name="category" id="category" className="px-4 py-2 border rounded">
    <option value="">หมวดหมู่</option>
    <option value="category1">หมวดหมู่ 1</option>
    <option value="category2">หมวดหมู่ 2</option>
    <option value="category3">หมวดหมู่ 3</option>
</select>

<select name="location" id="location" className="px-4 py-2 border rounded">
    <option value="">สถานที่</option>
    <option value="location1">สถานที่ 1</option>
    <option value="location2">สถานที่ 2</option>
    <option value="location3">สถานที่ 3</option>
</select>

<select name="status" id="status" className="px-4 py-2 border rounded">
    <option value="">สถานะ</option>
    <option value="status1">สถานะ 1</option>
    <option value="status2">สถานะ 2</option>
    <option value="status3">สถานะ 3</option>
</select>

<button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
    ค้นหา
</button>
</form>


);



}

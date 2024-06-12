
import React, { useState } from 'react';
import Image from 'next/image';
import NavBar from '@/app/component/navbar'; 
import FilterSearch from '../component/FilterSearch';

const posts = [
  {
    id: "1",
    img:"/ipad.jpg",
    name: "test",
    place: "home",
    category: "abs",
    status: "inside",
    des: "Description for post 1"
  },
  {
    id: "2",
    img: "/ipad.jpg",
    name: "example",
    place: "office",
    category: "xyz",
    status: "get",
    des: "Description for post 2"
  },
  {
    id: "3",
    img: "/ipad.jpg",
    name: "exawdwdwdwdwdwdmple",
    place: "office",
    category: "xyz",
    status: "get",
    des: "Description for post 3"
  },
  {
    id: "4",
    img: "/ipad.jpg",
    name: "sample",
    place: "park",
    category: "abc",
    status: "inside",
    des: "Description for post 4"
  },
  {
    id: "5",
    img: "/ipad.jpg",
    name: "demo",
    place: "gym",
    category: "def",
    status: "active",
    des: "Description for post 5"
  },
  {
    id: "6",
    img: "/ipad.jpg",
    name: "mock",
    place: "library",
    category: "ghi",
    status: "active",
    des: "Description for post 6"
  },
  {
    id: "7",
    img: "/ipad.jpg",
    name: "example7",
    place: "cafe",
    category: "jkl",
    status: "active",
    des: "Description for post 7"
  },
  {
    id: "8",
    img: "/ipad.jpg",
    name: "test8",
    place: "school",
    category: "mno",
    status: "active",
    des: "Description for post 8"
  },
  {
    id: "9",
    img: "/ipad.jpg",
    name: "test9",
    place: "home",
    category: "abs",
    status: "inside",
    des: "Description for post 9"
  },
  {
    id: "10",
    img: "/ipad.jpg",
    name: "example10",
    place: "office",
    category: "xyz",
    status: "get",
    des: "Description for post 10"
  },
  {
    id: "11",
    img: "/ipad.jpg",
    name: "example11",
    place: "office",
    category: "xyz",
    status: "get",
    des: "Description for post 11"
  },
  {
    id: "12",
    img: "/ipad.jpg",
    name: "sample12",
    place: "park",
    category: "abc",
    status: "inside",
    des: "Description for post 12"
  },
  {
    id: "13",
    img: "/ipad.jpg",
    name: "demo13",
    place: "gym",
    category: "def",
    status: "active",
    des: "Description for post 13"
  },
  {
    id: "14",
    img: "/ipad.jpg",
    name: "mock14",
    place: "library",
    category: "ghi",
    status: "active",
    des: "Description for post 14"
  },
  {
    id: "15",
    img: "/ipad.jpg",
    name: "example15",
    place: "cafe",
    category: "jkl",
    status: "active",
    des: "Description for post 15"
  },
  {
    id: "16",
    img: "/ipad.jpg",
    name: "test16",
    place: "school",
    category: "mno",
    status: "active",
    des: "Description for post 16"
  },
  {
    id: "17",
    img: "/ipad.jpg",
    name: "test16",
    place: "school",
    category: "mno",
    status: "active",
    des: "Description for post 17"
  }
];

const PostList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <>
      <NavBar/>
      <FilterSearch/>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4 grid">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={post.img}
                  alt={post.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className='flex flex space-x-2'>
                <h2 className="text-xl font-bold">{post.name}</h2>
                <p className="text-gray-600">{post.place}</p>
                <p className="text-gray-600">{post.category}</p> 
              </div>
              <button className={`text-white ${
                post.status === 'get' ? 'bg-orange-500' :
                post.status === 'active' ? 'bg-blue-500' :
                post.status === 'inside' ? 'bg-green-500' : ''
              } rounded-md py-1 px-2`}>
                {post.status}
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`mx-1 px-3 py-1 rounded justify-end ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import NavBar from '@/app/component/navbar';
import FilterSearch from '../component/FilterSearch';
import Modal from '../component/Modal';

interface Post {
  id: string;
  img: string;
  name: string;
  place: string;
  category: string;
  status: string;
  des: string;
  username: string;
  tell: string;
}

const posts: Post[] = [
  {username:"สุชาติ เพลินดี",tell:"0982192286", id: "1", img: "/ipad.jpg", name: "test", place: "home", category: "abs", status: "สถานะอยู่ในคลัง", des: "Description for post 1" },
  {username:"",tell:"", id: "2", img: "/ipad.jpg", name: "example", place: "office", category: "xyz", status: "สถานะถูกรับไปเเล้ว", des: "Description for post 2" },
  {username:"",tell:"", id: "3", img: "/ipad.jpg", name: "exawdwdwdwdwdwdmple", place: "office", category: "xyz", status: "สถานะถูกรับไปเเล้ว", des: "Description for post 3" },
  {username:"",tell:"", id: "4", img: "/ipad.jpg", name: "sample", place: "park", category: "abc", status: "สถานะอยู่ในคลัง", des: "Description for post 4" },
  {username:"",tell:"", id: "5", img: "/ipad.jpg", name: "demo", place: "gym", category: "def", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 5" },
  {username:"",tell:"", id: "6", img: "/ipad.jpg", name: "mock", place: "library", category: "ghi", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 6" },
  {username:"",tell:"", id: "7", img: "/ipad.jpg", name: "example7", place: "cafe", category: "jkl", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 7" },
  {username:"",tell:"", id: "8", img: "/ipad.jpg", name: "test8", place: "school", category: "mno", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 8" },
  {username:"",tell:"", id: "9", img: "/ipad.jpg", name: "test9", place: "home", category: "abs", status: "สถานะอยู่ในคลัง", des: "Description for post 9" },
  {username:"",tell:"", id: "10", img: "/ipad.jpg", name: "example10", place: "office", category: "xyz", status: "สถานะถูกรับไปเเล้ว", des: "Description for post 10" },
  {username:"",tell:"", id: "11", img: "/ipad.jpg", name: "example11", place: "office", category: "xyz", status: "สถานะถูกรับไปเเล้ว", des: "Description for post 11" },
  {username:"",tell:"", id: "12", img: "/ipad.jpg", name: "sample12", place: "park", category: "abc", status: "สถานะอยู่ในคลัง", des: "Description for post 12" },
  {username:"",tell:"", id: "13", img: "/ipad.jpg", name: "demo13", place: "gym", category: "def", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 13" },
  {username:"",tell:"", id: "14", img: "/ipad.jpg", name: "mock14", place: "library", category: "ghi", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 14" },
  {username:"",tell:"", id: "15", img: "/ipad.jpg", name: "example15", place: "cafe", category: "jkl", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 15" },
  {username:"",tell:"", id: "16", img: "/ipad.jpg", name: "test16", place: "school", category: "mno", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 16" },
  {username:"",tell:"",id: "17", img: "/ipad.jpg", name: "test17", place: "school", category: "mno", status: "สถานะไม่อยู่ในคลัง", des: "Description for post 17" }
];

const PostList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleButtonClick = (post: Post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <>
      <NavBar />
      <FilterSearch />
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
              <div className="flex  flex-row justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{post.name}</h2>
                <p className="text-gray-600">{post.place}</p>
                <p className="text-gray-600">{post.category}</p>
              </div>
              <button
                onClick={() => handleButtonClick(post)}
                className={`text-white ${
                  post.status === 'สถานะถูกรับไปเเล้ว' ? 'bg-orange-500' :
                  post.status === 'สถานะไม่อยู่ในคลัง' ? 'bg-red-500' :
                  post.status === 'สถานะอยู่ในคลัง' ? 'bg-green-500' : ''
                } rounded-md py-2 px-4 w-full text-center`}
              >
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
              className={`mx-1 px-3 py-2 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {selectedPost && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          post={selectedPost} view={'status'}        />
      )}
    </>
  );
};

export default PostList;

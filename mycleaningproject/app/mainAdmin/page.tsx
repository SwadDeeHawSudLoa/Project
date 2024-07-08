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
}

const posts: Post[] = [
  { id: "1", img: "/ipad.jpg", name: "test", place: "home", category: "abs", status: "สถานะอยู่ในคลัง", des: "Description for post 1" },
  { id: "2", img: "/ipad.jpg", name: "example", place: "office", category: "xyz", status: "สถานะถูกรับไปเเล้ว", des: "Description for post 2" },
  // ... (other posts)
];

const PostList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [modalView, setModalView] = useState<'status' | 'ตรวจสอบ'>('status');
  const postsPerPage = 8;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleButtonClick = (post: Post, view: 'status' | 'ตรวจสอบ') => {
    setSelectedPost(post);
    setModalView(view);
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
              <div className="flex flex-col justify-between items-start mb-2">
                <h2 className="text-xl font-bold">{post.name}</h2>
                <p className="text-gray-600">{post.place}</p>
                <p className="text-gray-600">{post.category}</p>
              </div>
              <div className="flex flex-row gap-2">
                <button
                  onClick={() => handleButtonClick(post, 'status')}
                  className={`text-white ${
                    post.status === 'สถานะถูกรับไปเเล้ว' ? 'bg-orange-500' :
                    post.status === 'สถานะไม่อยู่ในคลัง' ? 'bg-red-500' :
                    post.status === 'สถานะอยู่ในคลัง' ? 'bg-green-500' : ''
                  } rounded-md py-2 px-4 w-full text-center`}
                >
                  {post.status}
                </button>
                <button
                  onClick={() => handleButtonClick(post, 'ตรวจสอบ')}
                  className="text-white bg-blue-500 rounded-md py-2 px-4 w-full text-center"
                >
                  ตรวจสอบ
                </button>
              </div>
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
              } ${currentPage === index + 1 && 'cursor-not-allowed'}`}
              disabled={currentPage === index + 1}
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
          post={selectedPost}
          view={modalView}
        />
      )}
    </>
  );
};

export default PostList;

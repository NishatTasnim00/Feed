/* eslint-disable jsx-a11y/alt-text */
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaHome } from 'react-icons/fa';
import { BsPersonWorkspace } from 'react-icons/bs';
import { FaUsersGear } from 'react-icons/fa6';
import { MdSpaceDashboard } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import { MdFeedback } from 'react-icons/md';


const Sidebar = () => {
  const [isRotated, setIsRotated] = useState(false);

const toggleLinks = () => {
  setShowLinks(!showLinks);
  setIsRotated(!isRotated); // Toggle the rotation state
};
  const [showLinks, setShowLinks] = useState(false);
  const [menuRotation, setMenuRotation] = useState(0);
  const menuRef = useRef(null);

 

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowLinks(false);
      setMenuRotation(menuRotation + 180); // Rotate back to the original position
    }
  }, [menuRotation]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // ...


  return (
    <>
      <div
        ref={menuRef}
        className={`glass mx-auto pl-5 relative pt-8 pr-12 ${
          showLinks ? 'expanded' : ''
        }`}
      >
      <TiThMenu
  className={`cursor-pointer ml-6 menu-icon ${showLinks ? 'rotate' : ''}`}
  size={30}
  onClick={toggleLinks}
  style={{
    transform: `rotate(${isRotated ? 180 : 0}deg)`, // Rotate based on isRotated state
  }}
/>
        <ul 

             className={`flex min-h-fit flex-col gap-8 mt-16 ml-6 ${
              showLinks ? 'show' : ''
              
            }`}
        >
          <li className={`link-item ${showLinks ? 'show' : ''}`}>
            <Link href="/dashboard">
              <div className='flex gap-4 tooltip' data-tip="Dashboard">
                <MdSpaceDashboard size={26} />
                {showLinks && <span>Dashboard</span>}
              </div>
            </Link>
          </li>
          <li className={`link-item ${showLinks ? 'show' : ''}`}>
            <Link href="/dashboard/users">
              <div className='flex gap-4 tooltip' data-tip="Users">
                <FaUsersGear size={26} />
                {showLinks && <span>Users</span>}
              </div>
            </Link>
          </li>
          <li className={`link-item ${showLinks ? 'show' : ''}`}>
            <Link href="/dashboard/activities">
              <div className='flex gap-4 tooltip' data-tip="Activities">
                <BsPersonWorkspace size={26} />
                {showLinks && <span>Activities</span>}
              </div>
            </Link>
          </li>
          <li className={`link-item ${showLinks ? 'show' : ''}`}>
            <Link href="/dashboard/feedback">
              <div className='flex gap-4 tooltip' data-tip="Feedback">
                <MdFeedback size={26} />
                {showLinks && <span>Feedback</span>}
              </div>
            </Link>
          </li>
          
        </ul>
        <div className='absolute bottom-4 '>
        <Link href={"/"} className="group">
      <div className="text-center group-hover:animate-pulse group-hover:scale-105 transform transition-transform duration-300">
        <Image
          className="mx-auto"
          height={"55"}
          width={"55"}
          src={"https://i.ibb.co/34ZRTbb/swarm.png"}
        />
        <p className="text-center name">Picxabee</p>
      </div>
    </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

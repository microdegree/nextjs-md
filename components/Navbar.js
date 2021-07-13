import { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  };
  return (
    <>
      <nav className='flex justify-between items-center shadow h-16'>
        <div className='px-2 pt-1 mx-3 cursor-pointer'>
          <a href='/'>
            <img
              src='/microdegreelogo.png'
              alt='logo'
              width={160}
              height={50}
            />
          </a>
        </div>
        <div className='mx-3 sm:hidden'>
          <MenuIcon
            className='h-7 w-7 text-black-400 cursor-pointer'
            onClick={handleClick}
          />
        </div>
        <ul className='hidden sm:flex mx-3'>
          <li className='mx-3'>
            <a href='/courses' className='text-black-300'>
              <a style={{color:"#062A42"}}> Courses</a>
            </a>
          </li>
          <li className='mx-3'>
            <a href='/testimonial' style={{color:"#062A42"}}>Testimonial</a>
          </li>
          <li className='mx-3'>
            <a href='/blog' style={{color:"#062A42"}}>Blog</a>
          </li>
          <li className='mx-3'>
            <a href='/community' style={{color:"#062A42"}}>Community</a>
          </li>
          <li className='mx-3'>
            <a href='/scholarship' style={{color:"#062A42"}}>Scholarship</a>
          </li>
          <li className='mx-3'>
            <a href='/login'>
              <a className=' font-bold uppercase px-4 py-1 rounded border' style={{color:"#EB5C74",borderColor:"#EB5C74"}}>
                Login
              </a>
            </a>
          </li>
          <li className='mx-3'>
            <a href='/login'>
              <a className=' font-bold uppercase px-4 py-1 mx-1 rounded border border-regal-red hover:bg-red-700 ' style={{color:"#ffff",backgroundColor:"#EB5C74"}}>
                9945514497
              </a>
            </a>
          </li>
        </ul>
      </nav>
      {show && (
        <ul className='w-full flex flex-col  items-center bg-gray-100 h-h-nav pt-5 sm:hidden'>
          <li className='mt-3'>
            <a href='/courses'>
              <a className='p-1 text-xl'>Courses</a>
            </a>
          </li>
          <li className='mt-3'>
            <a href='/testimonial'>
              <a className='p-1 text-xl'>Testimonial</a>
            </a>
          </li>
          <li className='mt-3'>
            <a href='/blog'>
              <a className='p-1 text-xl'>Blog</a>
            </a>
          </li>
          <li className='mt-3'>
            <a href='/community'>
              <a className='p-1 text-xl'>Community</a>
            </a>
          </li>
          <li className='mt-5'>
            <a href='/login'>
              <a className='text-regal-red font-bold uppercase px-4 py-1 rounded border border-regal-red'>
                Login
              </a>
            </a>
          </li>
          <li className='mt-5'>
            <a href='/login'>
              <a className='bg-regal-red text-gray-100 font-bold uppercase px-4 py-1 mx-1 rounded border border-regal-red hover:bg-red-700 '>
                9945514497
              </a>
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;

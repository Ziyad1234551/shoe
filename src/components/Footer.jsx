import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className="w-full   md:h-auto lg:h-[36vh]  justify-center bg-white border-t-[3px] py-5 border-red-600">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 my-10 justify-center px-6 lg:px-[50px] gap-8">
      <div className="footer-section">
        <h2 className='text-4xl mb-2 font-bold'>Foot<span className='text-red-600'>Wear</span></h2>
        <p className='font-light'>Step into style with FootWear – your ultimate destination for chic and comfortable footwear. Discover the perfect pair today!</p>
      </div>

      <div className="footer-section">
        <h2 className='text-3xl mb-2 font-bold'>Quick Links</h2>
        <ul className='flex flex-col gap-2 text-lg'>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h2 className='text-3xl mb-2 font-bold'>Quick Links</h2>
        <ul className='flex flex-col gap-2 text-lg'>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h2 className='text-3xl font-bold'>Follow Us</h2>
        <div className='flex flex-col my-3 text-2xl gap-2 font-bold'>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>

    <div className="text-center my-6">
      <p>&copy; 2024 Your Book Store. All rights reserved.</p>
    </div>
  </footer>  )
}

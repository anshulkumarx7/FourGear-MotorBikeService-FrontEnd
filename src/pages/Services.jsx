import React from 'react'
import BookService from "../Components/BookService";
import Brands from '../Components/Brands';
import { Outlet } from 'react-router-dom';
function Services() {
  return (
    <div>
    {/* <BookService /> */}
    <Outlet />
    <Brands />
    </div>
  )
}

export default Services
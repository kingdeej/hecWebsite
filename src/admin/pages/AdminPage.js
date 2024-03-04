import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlinePlus, AiOutlineEdit} from 'react-icons/ai'
import {VscSignOut} from 'react-icons/vsc'
import { auth } from "../../firebase/firebase";
import { signOut } from "@firebase/auth";
import Sidebar from "../components/Sidebar";

export default function AdminPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('user')) {
        navigate('/')
    }
  }, [])
  const onSignOut = (e) => {
    signOut(auth)
    sessionStorage.removeItem('user')
    navigate('/')
  }
  return (
    <div className="admin-page | pg-block-14 clr-dark-300">
      {/* <Sidebar /> */}
      <div className="admin-page-wrapper | container">
        <h1 className="primary-header | text-center mg-block-end-4">Admin</h1>
        <ul className="admin-buttons-wrapper | flex-wrap gap-3">
          <li className="">
            <Link to={'/admin/add-event/0'} className="admin-button button  flow-2">
              <AiOutlinePlus className="button-img" />
              <h2 className="secondary-heading">Add Event</h2>
            </Link>
          </li>
          <li className="">
            <Link to={'/admin/events'} className="admin-button button   flow-2">
              <AiOutlineEdit className="button-img" />
              <h2 className="secondary-heading">Edit Events</h2>
            </Link>
          </li>
          <li className="">
            <button className="admin-button button flow-2">
              <VscSignOut onClick={(e) => { onSignOut() }} className="button-img" />
              <h2 className="secondary-heading">Sign Out</h2>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

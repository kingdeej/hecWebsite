import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlinePlus, AiOutlineEdit} from 'react-icons/ai'
import {VscSignOut} from 'react-icons/vsc'
import { auth } from "../firebase/firebase";

export default function AdminPage() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!auth.currentUser) {
  //       navigate('/')
  //   }
  // }, [])

  return (
    <div className="admin-page | page-block-padding">
      <div className="admin-page-wrapper | page-inline-padding">
        <h1 className="primary-header | text-center">Admin</h1>
        <ul className="admin-buttons-wrapper flex-center">
          <li className="flex-center">
            <Link to={'/Admin-page/add-event'} className="admin-button button flex-center flex-column">
              <AiOutlinePlus className="button-img" />
              <h2 className="secondary-header">Add Event</h2>
            </Link>
          </li>
          <li className="flex-center">
            <button className="admin-button button flex-center flex-column">
              <AiOutlineEdit className="button-img" />
              <h2 className="secondary-header">Edit Events</h2>
            </button>
          </li>
          <li className="flex-center">
            <button className="admin-button button flex-center flex-column">
              <VscSignOut className="button-img" />
              <h2 className="secondary-header">Add Events</h2>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

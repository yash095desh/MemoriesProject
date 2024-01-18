import React from 'react'
import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'


function Form() {
  const dispatch = useDispatch()
  return (
    <div className="editPost mx-5   ">
          <form action="" className="flex flex-col  mx-5 p-5 rounded-xl shadow">
            <h1 className="font-[600] text-[25px]">Create A Memory</h1>
            <input type="text" placeholder="Creater" className="formBorder" />
            <input type="text" placeholder="Title" className="formBorder" />
            <textarea
              name=""
              id=""
              cols="5"
              rows="5"
              placeholder="Message"
              className="m-[5px] p-[8px] rounded-[5px] formBorder"
            ></textarea>
            <input
              type="text"
              placeholder="Tag(comma seperated)"
              className="formBorder"
            />
            <input type="file" name="" id="" />
            <button className="button bg-blue-900 mb-4">
              Submit<span className="material-symbols-outlined pl-2">send</span>
            </button>
            <button className="button bg-red-900 ">
              Clear
              <span className="material-symbols-outlined pl-2">
                restart_alt
              </span>
            </button>
          </form>
        </div>
  )
}

export default Form
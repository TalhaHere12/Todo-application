"use client"
import React from 'react'
import { useState } from 'react'
const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [mainTasks, setMainTasks] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Title)
    console.log(Desc)
    setMainTasks([...mainTasks, { Title, Desc }])
    setTitle("")
    setDesc("")
    console.log(mainTasks)
  }
  let tasks = <h1> No tasks available </h1>
  const DeleteHandler=(i)=>{
    let copyTask=[...mainTasks]
    copyTask.splice(i,1)
    setMainTasks(copyTask)
  }
  if (mainTasks.length > 0) {
    tasks = mainTasks.map((t, i) => {
      return (
        <li  key={i} className="list-none" >
          <div className="flex justify-between " >
            <h5>{t.Title}</h5>
            <h6>{t.Desc}</h6>
            <button className=" bg-red-600 rounded-10px"  onClick={()=>{
              DeleteHandler(i)
            }} > Delete  </button>
          </div>
        </li>
      )
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-5 text-xl font-bold text-center '  >Talha's Todo List</h1>
      <form onSubmit={submitHandler} >
        <input type='text' placeholder='Enter Task Here' className='text-black border-7 m-5 px-4 py-2 '
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input type='text' placeholder='Enter Description' className='text-black border-7 m-5 px-4 py-2 '
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value)
          }}
        />
        <button className='text-white bg-black mx-4 border-rose-300 px-5 py-2 ' >Add Task</button>
      </form>
      <hr ></hr>
      <div className="p-8 bg-slate-200 " >
        {tasks}
      </div>
    </>
  )
}
export default page
import React, { useState } from 'react'


const app = () => {

  const [title, setTitle] = useState('')//useState hook is used to change the states
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])



  const submitHandler = (e) => {
    e.preventDefault()

    const newtask = [...task]
    newtask.push({ title, details })
    setTask(newtask)
    console.log(task)


    setTitle('')
    setDetails('')
  }

  const deleteTask = () => {
    const copytask = [...task]
    copytask.pop()
    setTask(copytask)
    console.log(task)
  }

  return (
    <div className='lg:flex h-screen w-full'>
      <h2 className='text-4xl text-bold'>Short Notes</h2>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-col gap-5 h-screen lg:w-1/2  mt-10'>

        <input
          className='bg-gray-400 font-medium border-2  py-5 rounded-md w-80'
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder='Enter your note headings' />

        <textarea
          className='bg-gray-400 font-medium iteams-start border-2 py-5 rounded w-80 mt-5'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button

          className='bg-blue-500 font-medium py-5 cursor-pointer active:scale-95 rounded-md w-80 mt-5'
          type="submit">Add Note</button>
      </form>

      <div className='lg:w-1/2 bg-gray-100 lg:border-l-2 p-10'>
        <h2 className='font-bold'> All Notes </h2>
        <div className='flex flex-wrap gap-10 mt-5 overflow-auto h-full'>
          {task.map(function (elem, idx) {
            return <div key={idx} relative className='h-60 w-60 rounded-2xl bg-yellow-200'>
              <h2 className='p-2'>Heading:{elem.title}</h2>
              <h2 className='p-2'>content:{elem.details}</h2>
              <button className='bg-red-500 text-white py-1 px-4 mx-4 my-5 rounded mt-2' onClick={deleteTask}>
                Delete
              </button>
            </div>
          })}



        </div>
      </div>

    </div>
  )
}

export default app
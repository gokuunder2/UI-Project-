import React from 'react'

const Ccontent = (props) => {
    console.log(props.users)
    return (
        <div>
            <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center font-bold'>{props.id + 1}</h2>
                <div clasName='mb-0'>
                    <p className='text-white mb-0 text-lg leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, eveniet!</p>
                </div>
                <div>
                    <button className='bg-blue-600 text-white font-medium px-4 py-1.5 rounded-lg'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-1.5 rounded-lg'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
    )
}

export default Ccontent

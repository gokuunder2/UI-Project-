import React from 'react'
import Navibar from '../components/navibar'
import P1center from '../components/page1center'

const Page1 = (props) => {
    console.log(props.users);
    return (
        <div className='h-screen w-full'>
            <Navibar />
            <P1center users={props.users} />
        </div>
    )
}

export default Page1
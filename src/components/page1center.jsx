import React from 'react';
import Cright from './p1cright';
import Cleft from './p1cleft';

const P1center = (props) => {
    console.log(props.users);
    return (
        <div className='h-screen w-full flex'>
            <Cleft />
            <Cright users={props.users} />

        </div>
    )
}

export default P1center;
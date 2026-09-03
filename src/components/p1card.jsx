import React from 'react';
import Ccontent from './p1cradcontent';

const Rcard = (props) => {
    console.log(props.users)
    return (
        <div className='h-full  shrink-0 w-60 relative rounded-3xl bg-red-500'>
            <img className='h-full w-full object-cover rounded-3xl' src={props.img} alt='image' />
            <Ccontent id={props.id} tag={props.tag} />
        </div>
    )
}

export default Rcard;
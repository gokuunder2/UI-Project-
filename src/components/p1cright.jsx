import React from 'react';
import Rcard from './p1card';

const Cright = (props) => {
    console.log(props.users);
    return (
        <div id='right' className='h-full flex  overflow-auto gap-10 flex-nowrap w-2/3  my-2 px-2 py-2'>
            {props.users.map(function (elem, idx) {
                return <Rcard key={idx} id={idx} img={elem.img} tag={elem.tag} />
            })}
        </div>
    )
}

export default Cright;
import React from 'react';

export default function Stack(props) {
    return (
      <div className='item'>
        <img src={props.img} alt={props.name}/>
        <div className='overlay'>
          <p>{props.title}</p>
        </div>
      </div>
    );
  }
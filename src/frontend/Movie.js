import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack(props) {
    return (
      <Link to={`/${props.id}`} className='item'>
        <img src={props.img} alt={props.name}/>
        <div className='overlay'>
          <p>{props.name}</p>
        </div>
      </Link>
    );
  }
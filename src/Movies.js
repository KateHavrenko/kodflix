import React from 'react';
import Stack from './Stack';
import crown from './images/crown.jpg';
import chernobyl from './images/chernobyl.jpg';
import friends from './images/friends.jpg';
import biglittlelies from './images/biglittlelies.jpg';
import blackmirror from './images/blackmirror.jpg';
import outlander from './images/outlander.jpg';

export default function Movies() {
    return (
        <div className='movies'>
            <div className='container'>
                <Stack name='crown' img={crown} title='The Crown' />
                <Stack name='friends' img={friends} title='Friends' />
                <Stack name='chernobyl' img={chernobyl} title='Chernobyl' />
            </div>
            <div className='container'>
                <Stack name='biglittlelies' img={biglittlelies} title='Big little lies' />
                <Stack name='blackmirror' img={blackmirror} title='BLack Mirror' />
                <Stack name='outlander' img={outlander} title='Outlander' />
            </div>
        </div>
    );
}



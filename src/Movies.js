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
                <Stack id='crown' name='crown' img={crown} title='The Crown' />
                <Stack id='friends' name='friends' img={friends} title='Friends' />
                <Stack id='chernobyl' name='chernobyl' img={chernobyl} title='Chernobyl' />
                <Stack id='biglittlelies' name='biglittlelies' img={biglittlelies} title='Big little lies' />
                <Stack id='blackmirror' name='blackmirror' img={blackmirror} title='BLack Mirror' />
                <Stack id='outlander' name='outlander' img={outlander} title='Outlander' />
            </div>
        </div>
    );
}



import React from 'react';
import crown from './images/crown.jpg';
import chernobyl from './images/chernobyl.jpg';
import friends from './images/friends.jpg';
import biglittlelies from './images/biglittlelies.jpg';
import blackmirror from './images/blackmirror.jpg';
import outlander from './images/outlander.jpg';

export default function getMovies() {
    return [
        { id: 'crown', name: 'crown', img: crown },
        { id: 'friends', name: 'friends', img: friends },
        { id: 'chernobyl', name: 'chernobyl', img: chernobyl },
        { id: 'biglittlelies', name: 'biglittlelies', img: biglittlelies },
        { id: 'blackmirror', name: 'blackmirror', img: blackmirror },
        { id: 'outlander', name: 'outlander', img: outlander }
    ];
}

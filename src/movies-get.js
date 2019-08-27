import React from 'react';
import crown from './images/crown.jpg';
import chernobyl from './images/chernobyl.jpg';
import friends from './images/friends.jpg';
import biglittlelies from './images/biglittlelies.jpg';
import blackmirror from './images/blackmirror.jpg';
import outlander from './images/outlander.jpg';

export default function getMovies() {
    return [
        { id: 'crown', name: 'crown', img: crown, description: `This drama follows the political rivalries and romance of Queen Elizabeth 
            II's reign and the events that shaped the second half of the 20th century.` },
        { id: 'friends', name: 'friends', img: friends, description: `Friends is an American television sitcom, created by David Crane and
            Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons` },
        { id: 'chernobyl', name: 'chernobyl', img: chernobyl, description: `Chernobyl is a historical drama television miniseries created
         and written by Craig Mazin and directed by Johan Renck for HBO. The series centers around the Chernobyl nuclear disaster of April
          1986 and the unprecedented cleanup efforts that followed.` },
        { id: 'biglittlelies', name: 'biglittlelies', img: biglittlelies, description: `Big Little Lies is an American drama television series
         based on the novel of the same name by Liane Moriarty. Created by David E. Kelley, it premiered on HBO on February 19, 2017. The
          seven-episode first season was written by Kelley and directed by Jean-Marc Vallée.` },
        { id: 'blackmirror', name: 'blackmirror', img: blackmirror, description: `Black Mirror is a British science fiction anthology
         television series created by Charlie Brooker and produced by Zeppotron for Endemol. It mainly focuses on humanity's relationship
          to technology and its consequences.` },
        { id: 'outlander', name: 'outlander', img: outlander, description: `Outlander is a drama television series based upon author Diana 
        Gabaldon's historical time travel book series of the same name. Developed by Ronald D. Moore and produced by Sony Pictures Television 
        and Left Bank Pictures for Starz, the show premiered on August 9, 2014. I` }
    ];
}

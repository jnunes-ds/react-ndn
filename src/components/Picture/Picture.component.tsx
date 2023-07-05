import React from 'react';


interface Props{
    id: number;
    src: string;
}

function Picture({ id, src } : Props){

    return (
        <img src={src} width={150} />
    );
}

export default Picture;
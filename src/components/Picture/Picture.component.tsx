import React from 'react';
import { useDrag } from 'react-dnd';


interface Props{
    id: number;
    src: string;
}

function Picture({ id, src } : Props){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'picture',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img
            ref={drag}
            src={src}
            width={150}
            style={{border: isDragging ? "5px solid pink" : "0px"}}
        />
    );
}

export default Picture;
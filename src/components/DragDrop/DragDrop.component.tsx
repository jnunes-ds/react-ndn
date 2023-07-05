import React, { useState } from 'react';
import { Picture } from '@components';
import classes from "./DragDrop.module.css";
import { useDrop } from 'react-dnd';

interface IPicture {
    id: number;
    src: string;
}

const PictureList: IPicture[] = [
  {
    id: 1,
    src: "https://www.freecodecamp.org/portuguese/news/content/images/2023/03/Ekran-Resmi-2019-11-18-18.08.13.png",
  },
  {
    id: 2,
    src: "https://www.elluminatiinc.com/wp-content/uploads/2020/07/blog/nodejsframeworks.png",
  },
  {
    id: 3,
    src: "https://miro.medium.com/v2/resize:fit:1187/1*H0bdRYh03hNm1y0QuJIhkg.png",
  },
];

function DragDrop(){
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'picture',
        drop: (item: any) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id: number) => {
        const pictureList = PictureList.find((picture) => picture.id === id);
        setBoard(prevState => {
            console.log(prevState);
            if (prevState.length === 3) {
                prevState.shift();
            }
            return [...prevState, pictureList]
        });
    } 

    return (
      <>
        <div className={classes.Pictures}>
          {PictureList.map((picture) => (
            <Picture id={picture.id} src={picture.src} />
          ))}
        </div>
        <div ref={drop} className={classes.Board}>
          {board.map((picture) => (
            <img
              src={picture.src}
              width={150}
            />
          ))}
        </div>
      </>
    );
}

export default DragDrop;
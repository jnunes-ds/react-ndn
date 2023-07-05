import React from 'react';
import { Picture } from '@components';
import classes from "./DragDrop.module.css";

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

    return (
        <>
            <div className={classes.Pictures}>{PictureList.map(picture => (
                <Picture id={picture.id} src={picture.src} />
            ))}</div>
            <div className={classes.Board}></div>
        </>
    );
}

export default DragDrop;
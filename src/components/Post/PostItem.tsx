import React from 'react';

interface Props {
  date: string;
  title: string;
  onClick: React.MouseEventHandler;
}


const PostItem: React.FC<Props> = ({date, title, onClick}) => {
  return (
    <div className="Post">
      <p>Created on: {date}</p>
      <h3>{title}</h3>
      <button
        onClick={onClick}
      >
        Read more
      </button>
    </div>
  );
};

export default PostItem;






// const PostItem = ({date, title, onClick}) => {
//
//   return (

//   );
// };
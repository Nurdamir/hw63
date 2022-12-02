import React from 'react';

interface Props {
  date: string;
  title: string;
  onClick: React.MouseEventHandler;
}

const PostItem: React.FC<Props> = ({date, title, onClick}) => {
  return (
    <div className="card mb-2 w-100 border-dark">
      <div className="card-body">
      <p className="border border-dark rounded-2 p-3">Created on: {date}</p>
      <h3 className="border border-dark rounded-2 p-4">{title}</h3>
      <button
        className="btn btn-primary"
        onClick={onClick}
      >
        Read more
      </button>
      </div>
    </div>
  );
};

export default PostItem;

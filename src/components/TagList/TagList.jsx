import React from 'react';
import './TagList.css'

const TagList = ({tags}) => {

  return (
    <div className="tagList">
      {tags.map (tag => {
        return <span key={tag.name} className="tag">{tag.name}</span>;
      })}
    </div>
  );
};

export default TagList;

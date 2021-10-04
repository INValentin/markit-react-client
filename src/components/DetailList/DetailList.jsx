import React from 'react';
import './DetailList.css';
import TagList from '../TagList/TagList';

const DetailList = ({details = {}}) => {
  return (
    <div className="detailsWrapper">
      <h4 className="detailsHeader">Details</h4>
      { !Object.keys (details).length && <p>No details.</p> }
      <div className="detailsList">
        {Object.keys (details).map (k => {
            const detail = details[k]
          return (
            <div key={k} className="detail">
              <span className="detailKey">{k}</span>
              <span className="detailValue">
                  { detail.tags && <TagList tags={detail.tags} /> }
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailList;

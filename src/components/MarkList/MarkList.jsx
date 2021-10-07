import React from 'react';
import ShowMark from '../ShowMark/ShowMark';
import {StudentMarkTable} from '../StudentMarks/StudentMarks';
import './MarkList.css';

const MarkList = ({marks}) => {
  return (
    <div className="marksListWrapper">
      {!marks.length && <p>No marks found</p>}
      {marks.length
        ? <StudentMarkTable headers={<th>Names</th>}>
            {marks.map (mark => {
              return <ShowMark mark={mark} key={mark.id} />;
            })}
          </StudentMarkTable>
        : ''}
    </div>
  );
};

export default MarkList;

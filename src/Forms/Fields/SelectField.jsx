import {async} from 'jshint/src/prod-params';
import React, {useEffect, useRef, useState} from 'react';
import useFetch from '../../hooks/useFetch';
import useOptions from '../../hooks/useOptions';

const SelectField = ({field: f, onChange}) => {
  const {loading, get} = useFetch ();
  const [data, setData] = useState ({});
  const [options, setOptions] = useState ([]);
  const {api} = useOptions (
    () => (typeof f.options === 'string' ? f.options.split ('@')[0] : '')
  );

  useEffect (
    () => {
      (async () => {
        if (typeof f.options === 'string') {
          const [apiName, apiMethod] = f.options.split ('@');
          // return console.log({ api, apiName, apiMethod, mtd: api[apiMethod] })
          const res = await api[apiMethod] ();
          const newData = await res.json ();
          setData (newData);
          return;
        } else {
          setOptions (f.options);
        }
      }) ();
    },
    [f.options]
  );

  async function navHandler (prev = false) {
    const url = prev ? data.prev_page_url : data.next_page_url;
    const res = await get (url);
    const newData = await res.json ();
    setData (newData);
  }

  useEffect (
    () => {
      if (data.data) {
        setOptions (data.data);
        // console.log({data})
      }
    },
    [data]
  );
  //   const options = typeof f.options === 'function' ? f.options () : f.options;

  return (
    <React.Fragment>
      <label>Select {f.label}</label>
      <div className="selectBtnWrapper">
        {(api.loading || loading) && <span className="loader"></span>}
        {!loading &&
          <React.Fragment>
            {data.prev_page_url &&
              <button
                type="button"
                onClick={() => navHandler (true)}
                className="btn btnSm"
              >
                {'<< prev'}
              </button>}
            {data.next_page_url &&
              <button
                type="button"
                onClick={() => navHandler (false)}
                className="btn btnSm"
              >
                {'next >>'}
              </button>}
          </React.Fragment>}
      </div>
      <select onChange={e => onChange (e.target.value)}>
        {options.map (option => (
          <option
            key={option.label || option.id}
            value={option.value || option.id}
          >
            {option.label || option.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default SelectField;

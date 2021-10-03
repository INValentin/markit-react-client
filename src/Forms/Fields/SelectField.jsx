import React, {useEffect, useRef, useState} from 'react';
import useApi from '../../hooks/useApi';
import useFetch from '../../hooks/useFetch';

const SelectField = ({field: f, onChange}) => {
  const {loading, get} = useFetch ();
  const [data, setData] = useState ({});
  const [options, setOptions] = useState ([]);
  const api = useApi (
    () => (typeof f.options === 'string' ? f.options.split ('@')[0] : '')
  );

  useEffect (
    () => {
      (async () => {
        if (typeof f.options === 'string') {
          const [apiName, apiMethod] = f.options.split ('@');
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
                className="btn btnSm prevBtn"
              >
                {'<< prev'}
              </button>}
            {data.next_page_url &&
              <button
                type="button"
                onClick={() => navHandler (false)}
                className="btn btnSm nextBtn"
              >
                {'next >>'}
              </button>}
          </React.Fragment>}
      </div>
      <select defaultValue="" onChange={e => onChange (e.target.value)}>
        <option value="">...</option>
        {options.map (option => (
          <option
            // selected={}
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

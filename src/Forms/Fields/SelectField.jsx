import React, {useEffect, useState} from 'react';
import useApi from '../../hooks/useApi';
import useFetch from '../../hooks/useFetch';
import useList from '../../hooks/useList';

const SelectField = ({field: f, onChange}) => {
  const {loading, get} = useFetch ();
  const [loaded, setLoaded] = useState (false);
  const {loadItems, data, items, setData} = useList ();
  const [options, setOptions] = useState ([]);
  const api = useApi (
    () => (typeof f.options === 'string' ? f.options.split ('@')[0] : '')
  );

  useEffect(() => { 
    setOptions([...items])
  }, [items])

  useEffect (
    () => {
      if (!loaded) {
        if (typeof f.options === 'string') {
          const apiMethod = f.options.split ('@')[1];
          loadItems (api[apiMethod]);
        } else {
          setOptions (f.options);
        }
        setLoaded (true);
      }
    },
    [loaded, api, f, loadItems]
  );

  async function navHandler (prev = false) {
    const url = prev ? data.prev_page_url : data.next_page_url;
    const res = await get (url);
    const newData = await res.json ();
    setData (newData);
  }

  return (
    <React.Fragment>
      <label>Select {f.label}</label>
      <div className="selectBtnWrapper">
        {(api.loading || loading) && <span className="loader" />}
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

import React, {useEffect, useState} from 'react';
import './MarkView.css';
import MarkCreate from '../MarkCreate/MarkCreate';
import MarkList from '../MarkList/MarkList';
import {useMarksApi} from '../../hooks/useApi';
import useList from '../../hooks/useList';
import useForm from '../../hooks/useForm';
import Form from '../../Forms/Form/Form';
import {normalizeFields} from '../../Forms/fields';
import useFetch from '../../hooks/useFetch';

const MarkView = () => {
  const [loaded, setLoaded] = useState (false);
  const {loading, get} = useFetch ();
  const {url: marksUrl} = useMarksApi ();
  const {loadItems, setItems, items: marks} = useList ();
  const {data: filters, setValue, fields} = useForm ('', getFilterFields ());
  const [canLoad, setCanLoad] = useState (false);

  const loadHandler = () => {
    if (!(filters.academic_year && filters.semester)) {
      return canLoad && setCanLoad (false);
    }
    setItems ([]);
    setLoaded (false);
    setCanLoad (true);
  };

  useEffect (
    () => {
      const makeQuery = obj => {
        let query = '';
        for (const prop in obj) {
          if (Object.hasOwnProperty.call (obj, prop)) {
            query +=
              (query.length ? '&' : '') +
              prop.toString () +
              '=' +
              obj[prop].toString ();
          }
        }
        return '?' + query;
      };

      if (!loaded && canLoad) {
        const query = makeQuery (filters);
        loadItems (() => get (marksUrl (query)));
        setLoaded (true);
      }
    },
    [loadItems, get, filters, marksUrl, loaded, canLoad]
  );

  return (
    <div className="markViewWrapper">
      <MarkCreate />
      <MarkFilter loading={loading} onData={loadHandler}>
        <Form fields={fields} setValue={setValue} />
      </MarkFilter>
      {!canLoad &&
        <p style={{fontSize: '1.7rem', textAlign: 'center', color: 'var(--dark-color-op)'}}>
          Select year and semester to view marks for.
        </p>}
      {loading
        ? <span className="loader" />
        : canLoad && <MarkList marks={marks} />}
    </div>
  );
};

export const MarkFilter = ({onData, loading, children}) => {
  const submitHandler = e => {
    e.preventDefault ();
    onData ();
  };

  return (
    <form className="markFilterForm">
      {children}
      <button onClick={submitHandler} className="viewMarksBtn btn">
        {loading ? '...' : 'View marks'}
      </button>
    </form>
  );
};

function getFilterFields () {
  const filterFields = {
    filters: {
      academic_year: {
        label: 'Academic Year',
        type: 'select',
        value: '',
        options: [
          {label: '2018-2019', value: '2018-2019'},
          {label: '2019-2020', value: '2019-2020'},
          {label: '2020-2021', value: '2020-2021'},
          {label: '2021-2022', value: '2021-2022'},
        ],
      },
      semester: {
        label: 'Semester',
        type: 'select',
        options: [{label: 'I', value: 'I'}, {label: 'II', value: 'II'}],
        value: '',
      },
    },
  };

  return normalizeFields (filterFields).filters;
}

export default MarkView;

import React, { useCallback, useEffect, useState } from "react";
import Hide from "../../components/Hide/Hide";
import { chooseAPI } from "../../hooks/useApi";
import useFetch from "../../hooks/useFetch";
import useList from "../../hooks/useList";

const SelectField = ({ fields, setAttr, field: f, onChange }) => {
  const apiName = typeof f.options === "string" ? f.options.split("@")[0] : "";
  const { loading, get } = useFetch();
  const [loaded, setLoaded] = useState(false);
  const { loadItems, data, setItems, items, setData } = useList();
  const [options, setOptions] = useState([]);
  const api = chooseAPI(apiName);
  // const [lastForeignValue, setLastForeignValue] = useState('')

  useEffect(() => {
    if (typeof f.options === "object") {
      setOptions(f.options);
    } else {
      setOptions([...items]);
    }
  }, [items, f]);

  useEffect(() => {
    setItems(data.data || []);
  }, [data, setItems]);

  const clickHandler = useCallback(() => {
    if (!loaded && apiName && api) {
      if (typeof f.options === "string") {
        const [, apiMethod, apiArgs] = f.options.split("@");
        // console.log(api[apiMethod]);
        let argKeys = apiArgs ? apiArgs.split(",") : [];
        let argValues = argKeys.map((key) => {
          const value = fields[key]["value"];

          const error = `Please enter ${key} first`;
          const fieldKey = Object.keys(fields).find(
            (k) => fields[k].label === f.label
          );

          if (value === "" && !f.errors.some((er) => er === error)) {
            setAttr(fieldKey, "errors", [...f.errors, error]);
          }

          if (value !== "" && f.errors.includes(error)) {
            setAttr(
              fieldKey,
              "errors",
              f.errors.filter((er) => er !== error)
            );
          }

          return value;
        });
        if (argValues.some((value) => value === "")) {
          return undefined;
        }

        loadItems(() => api[apiMethod](...argValues));
      } else {
        setOptions(f.options);
      }
      setLoaded(true);
    }
  }, [loaded, fields, api, apiName, f, setAttr, loadItems]);

  const refresh = () => {
    setLoaded(false);
    clickHandler();
  };

  async function navHandler(prev = false) {
    const url = prev ? data.prev_page_url : data.next_page_url;
    const res = await get(url);
    const newData = await res.json();
    setData(newData);
  }

  // const clickHandler = () => {

  // }

  return (
    <React.Fragment>
      <label>Select {f.label}</label>
      <div className="selectBtnWrapper">
        {
          <Hide show={api.loading || loading}>
            {" "}
            <span className="loader" />
          </Hide>
        }
        {!loading && (
          <React.Fragment>
            {data.prev_page_url && (
              <button
                type="button"
                onClick={() => navHandler(true)}
                className="btn btnSm prevBtn"
              >
                {"<< prev"}
              </button>
            )}
            {loaded && (
              <button
                type="button"
                onClick={refresh}
                className="btn btnSm refeshBtn"
              >
                Refresh
              </button>
            )}
            {data.next_page_url && (
              <button
                type="button"
                onClick={() => navHandler(false)}
                className="btn btnSm nextBtn"
              >
                {"next >>"}
              </button>
            )}
          </React.Fragment>
        )}
      </div>
      <select
        onClick={clickHandler}
        value={f.value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">...</option>
        {options.map((option) => (
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

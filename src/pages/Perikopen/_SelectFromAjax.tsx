import React, { useEffect, useState, SyntheticEvent } from 'react';
import { AxiosResponse } from 'axios';

interface Props {
  name: string,
  getData?: () => Promise<AxiosResponse>,
  valueKey: string,
  onChange?: ((a: any) => void),
  defaultValue?: number
};

const defaultProps : Props = {
  defaultValue: 0,
  name: "random",
  valueKey: '',
  onChange: (a: any) => {}
};

const SelectFromAjax = (props: Props = defaultProps) => {

  const [options, setOption] = useState([]);

  const onChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const v = e.currentTarget.value;

    if (props.onChange !== undefined) {
      props.onChange(v);
    }
  };

  useEffect(() => {
    let didCancel = false;
    const _getData = async () => {
      try {
        if (props.getData !== undefined) {
          const { data } = await props.getData();
          if (!didCancel) {
            setOption(data);
          }
        }

      } catch (error) {}
    }
    _getData();

    return () => {
      didCancel = true;
    }
  }, [])
  return (
    <select
      value={props.defaultValue}
      onChange={props.onChange ? onChange : undefined}
      className="uk-select" name={props.name}>
      <option value="0">Pilih</option>
      {options.map((x : any) => (
        <option value={x.id} key={x.id}>{x[props.valueKey]}</option>
      ))}
    </select>
  )
};

export default SelectFromAjax;

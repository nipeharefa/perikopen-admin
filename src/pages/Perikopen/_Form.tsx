import React, { useState, useEffect } from 'react';

import { PerikopenProvider, IPerikopenData } from './Context';

import SelectFromAjax from './_SelectFromAjax';
import Network from '../../service/network';

type Props = {
  onSubmit: (data: any) => any,
  perikopenId?: Number,
};

interface defaultFormData extends IPerikopenData {
  week: number,
  schedule: number,
  worship: number,
  dressCode: number,
};

const PerikopenForm = (props: Props) => {
  const { perikopenId = 0 } = props;

  const obj : defaultFormData =  {
    id: 0,
    week: 0,
    schedule: 0,
    worship: 0,
    dressCode: 0,
  };

  const [formData, setFormData] = useState(obj);

  useEffect(() => {
    const getPerikopenData = async() => {
      try {
        const { data } = await Network.getPerikopen(perikopenId);

        const newObj = Object.assign({}, formData, {
          week: data.week.id,
          dressCode: data.dressCode.id,
          schedule: data.schedule.id,
          worship: data.worship.id,
        });
        setFormData(newObj);
      } catch (error) {}
    }

    if (perikopenId !== 0) {
      getPerikopenData();
    }
  }, []);

  const updateFormData = (value: object) => {
    const newObj : defaultFormData = Object.assign({}, formData, value);
    setFormData(newObj);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    delete formData["id"];
    Network.createPerikopen(formData);
  }

  return (
    <PerikopenProvider value={formData}>
      <form data-uk-form onSubmit={handleSubmit}>
        <div className="uk-margin">
          {/* Weeek */}
          <SelectFromAjax
            defaultValue={formData.week}
            onChange={(value) => updateFormData({week: parseInt(value)})}
            valueKey="code"
            getData={Network.getWeeks}
            name="week" />
        </div>

        <div className="uk-margin">
          {/* Schedule */}
          <SelectFromAjax
            defaultValue={formData.schedule}
            onChange={(value) => updateFormData({schedule: parseInt(value)})}
            valueKey="date"
            getData={Network.getSchedules}
            name="schedule" />
        </div>

        <div className="uk-margin">
          {/* Worship */}
          <SelectFromAjax
            defaultValue={formData.worship}
            onChange={(value) => updateFormData({worship: parseInt(value)})}
            valueKey="key"
            getData={Network.getWorships}
            name="worship" />
        </div>

        <div className="uk-margin">
          {/* Color */}
          <SelectFromAjax
            defaultValue={formData.dressCode}
            valueKey="key"
            onChange={(value) => updateFormData({dressCode: parseInt(value)})}
            getData={Network.getDressCodes}
            name="color" />
        </div>

        <div className="uk-margin">
          <input type="submit" className="uk-button uk-button-primary"/>
        </div>

      </form>
    </PerikopenProvider>
  )
};


export default PerikopenForm;

import React, { Fragment, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import network from '../../service/network';

import Form from './_Form';
import SortableKidungJemaat from './SortableKidungJemaat';


type TParams = { id: string | undefined };

const DetailPerikopen = ({ match }: RouteComponentProps<TParams>) => {


  const [tabIndex, setTabIndex] = React.useState(0);
  const perikopenId = match.params.id;

  let perikopenNumber: number = 0;
  let _isMounted : boolean = false;

  perikopenNumber = Number(perikopenId);

  const getPerikopen = async () => {
    if (isNaN(perikopenNumber)) {
      return;
    }

    try {
      await network.getPerikopen(Number(perikopenId));

      if (_isMounted) {
      }
    } catch (err) {}
  }
  useEffect(() => {
    _isMounted = true;

    // getPerikopen();

    return () => {
      _isMounted = false;
    };
  },[perikopenId]);
  return (
    <Fragment>
      <ul data-uk-tab>
          <li
            onClick={() => setTabIndex(0)}
            className="uk-active">
            <a href="">Basic</a>
          </li>
          <li
            onClick={() => setTabIndex(1)}
            >
            <a href="">Kidung Jemaat</a>
          </li>
          <li
            onClick={() => setTabIndex(1)}
            >
            <a href="">Buku Zinuno</a>
          </li>
      </ul>
      { tabIndex === 0 ? (<Form onSubmit={() => console.log('submit')} perikopenId={perikopenNumber}/> ) : null }
      { tabIndex === 1 ? (<SortableKidungJemaat perikopenId={perikopenNumber} />) : null }
    </Fragment>
  );
};


export default DetailPerikopen;

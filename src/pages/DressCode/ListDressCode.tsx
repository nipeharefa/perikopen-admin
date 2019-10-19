import * as React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';

const DressCodeTable = React.lazy(() => import('../../components/DressCodeComponent/DressCodeTable'));

const ListDressCode = () => {

  const [dressCodes, setDressCodes] = React.useState([]);

  const getDressCode = async () => {
    try {
      const { data } = await NetworkService.getDressCodes();
      setDressCodes(data);
      return;
    } catch (err) {
      return;
    }
  }

  React.useEffect(() => {
    console.log('mount');
    getDressCode();

    return function() {
      /**
       * Add cleanup code here
       */
    };
  }, []);

  return (
    <React.Fragment>
      <Link to="/dress-code/new">Tambah Data Warna</Link>
        <React.Suspense fallback={<div>Loading...</div>}>
          <DressCodeTable dressCodes={dressCodes} />
        </React.Suspense>
    </React.Fragment>
  )
};

export default ListDressCode;

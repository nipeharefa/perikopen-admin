import * as React from 'react';
import NetworkService from '../../service/network';
import Translation from '../Translation';
import moment from 'moment';
import { Link } from 'react-router-dom';

const DeleteButton = React.lazy(() => import('../Common/DeleteButton'));

type Props = {
  perikopens: any
}

const TablePerikopen = (props: any) => {

  const { perikopens } = props;

  const WeeksRows = () => {
    if (!perikopens.length) {
      return (
        <tr>
          <td colSpan={4} >No Data</td>
        </tr>
      )
    } else {
      return perikopens.map((perikopen: any) => {
        const formattedDate = moment(perikopen.schedule.date)
          .format('dddd, DD MMMM YYYY');

        const linkToDetailPerikopen = `/perikopen/${perikopen.id}`
        return (
          <tr key={perikopen.id}>
            <td>
              <Link to={linkToDetailPerikopen}>
                {formattedDate}
              </Link>
            </td>
            <td>
              <Translation translationID={perikopen.worship.key} />
            </td>
            <td>
              <Translation translationID={perikopen.week.code} />
            </td>
            <td>
              <Translation translationID={perikopen.dressCode.key} />
            </td>
            <td>
            <React.Suspense fallback={<div>Loading...</div>}>
              <DeleteButton deleteService={() => NetworkService.deleteWeek(perikopen.id)}/>
            </React.Suspense>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="uk-overflow-auto">
      <table className="uk-table uk-table-striped">
        <thead>
          <tr>
            <td>Tanggal</td>
            <td>Tata Ibadah</td>
            <td>Nama Minggu</td>
            <td>Warna</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <WeeksRows />
        </tbody>
      </table>
    </div>
  );
};

export default TablePerikopen;

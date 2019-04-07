import * as React from 'react';
import NetworkService from '../../service/network';

const DeleteButton = React.lazy(() => import('../Common/DeleteButton'));

type Props = {
  schedules: any
}

type State = {
};

type defaultProps = {
  schedules: any
}

class TableSchedule extends React.PureComponent<Props, State>
{
  static defaultProps: defaultProps = {
    schedules: []
  }
  render() {
    const ScheduleRows = () => this.props.schedules.map((schedule: any) => (
      <tr key={schedule.id}>
        <td>{schedule.id}</td>
        <td>{schedule.date}</td>
        <td>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DeleteButton
              deleteService={() => NetworkService.deleteSchedule(schedule.id)}
            />
          </React.Suspense>
        </td>
      </tr>
    ));
    return (
      <table className="uk-table">
        <thead>
          <tr>
            <th></th>
            <th>Tanggal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ScheduleRows />
        </tbody>
      </table>
    )
  }
}

export default TableSchedule;
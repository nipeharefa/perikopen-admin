import * as React from 'react';
import DeleteButton from '../Common/DeleteButton';
import NetworkService from '../../service/network';

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
          <DeleteButton
            deleteService={() => NetworkService.deleteSchedule(schedule.id)}
          />
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
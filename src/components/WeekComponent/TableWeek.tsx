import * as React from 'react';
import DeleteButton from '../Common/DeleteButton';
import NetworkService from '../../service/network';

type Props = {
  weeks: any
}

class TableWeek extends React.PureComponent<Props, {}>
{
  static defaultProps: Props = {
    weeks: []
  }
  render() {
    const WeeksRows = () => {
      if (!this.props.weeks.length) {
        return (
          <tr>
            <td>No Data</td>
          </tr>
        )
      }

      return this.props.weeks.map((week: any) => (
        <tr key={week.id}>
          <td>{week.code}</td>
          <td>
            <DeleteButton deleteService={() => NetworkService.deleteWeek(week.id)}/>
          </td>
        </tr>
      ))
    }
    return (
      <table className="uk-table">
        <thead>
          <tr>
            <td>Code</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <WeeksRows />
        </tbody>
      </table>
    )
  }
}

export default TableWeek;
import * as React from 'react';
import NetworkService from '../../service/network';

const DeleteButton = React.lazy(() => import('../Common/DeleteButton'));

type Props = {
  perikopens: any
}

class TablePerikopen extends React.PureComponent<Props, {}>
{
  static defaultProps: Props = {
    perikopens: []
  }
  render() {
    const WeeksRows = () => {
      if (!this.props.perikopens.length) {
        return (
          <tr>
            <td>No Data</td>
          </tr>
        )
      }

      return this.props.perikopens.map((week: any) => (
        <tr key={week.id}>
          <td>{week.code}</td>
          <td>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DeleteButton deleteService={() => NetworkService.deleteWeek(week.id)}/>
          </React.Suspense>
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

export default TablePerikopen;

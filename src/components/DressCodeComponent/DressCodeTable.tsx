import * as React from 'react';
import NetworkService from '../../service/network';

const DeleteButton = React.lazy(() => import('../Common/DeleteButton'));

type Props = {
  dressCodes: any
}

class DressCodeTable extends React.Component<Props, {}>
{
  static defaultProps: Props = {
    dressCodes: []
  }
  render() {
    const DressCodeRows = () => {
      if (!this.props.dressCodes.length) {
        return (
          <tr>
            <td colSpan={1}>No Data</td>
          </tr>
        )
      }

      const rows = this.props.dressCodes.map((dressCode: any) => (
        <tr key={dressCode.id}>
          <td>{ dressCode.colorKey }</td>
          <td>
            <React.Suspense fallback={<div>...loading</div>}>
              <DeleteButton deleteService={() => NetworkService.deleteDressCode(dressCode.id)} />
            </React.Suspense>
          </td>
        </tr>
      ));

      return rows;
    }
    return (
      <React.Fragment>
        <table className="uk-table">
          <thead>
            <tr>
              <th>Kode Warna</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <DressCodeRows />
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default DressCodeTable;

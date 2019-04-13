import * as React from 'react';
import NetworkService from '../../service/network';

const DeleteButton = React.lazy(() => import('../Common/DeleteButton'));

type Props = {
  agendrees: any
}

class TableAgendre extends React.PureComponent<Props, {}> 
{
  static defaultProps: Props = {
    agendrees: []
  }
  render() {
    const AgendreRows = () => {
      if (!this.props.agendrees.length) {
        return (
          <tr>
            <td colSpan={3}>No Data</td>
          </tr>
        )
      }
      const rows = this.props.agendrees.map((agendre : any) => (
        <tr key={agendre.id}>
          <td>
            {agendre.worshipKey}
          </td>
          <td>
            {agendre.idName}
          </td>
          <td>
            {agendre.niasName}
          </td>
          <td>
            <React.Suspense fallback={<div>Loading...</div>}>
              <DeleteButton deleteService={() => NetworkService.deleteAgendre(agendre.id)}/>
            </React.Suspense>
          </td>
        </tr>
      ))
      return rows;
    }

    return (
      <table className="uk-table">
        <thead>
          <tr>
            <th>Kode Agendre</th>
            <th>Bahasa Indonesia</th>
            <th>Bahasa Nias</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <AgendreRows />
        </tbody>
      </table>
    )
  }
}

export default TableAgendre;

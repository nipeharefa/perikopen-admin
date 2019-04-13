import *  as React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';

const TableAgendre = React.lazy(() => import('../../components/AgendreComponent/TableAgendre'));

type State = {
  agendrees: any
}

class ListTataIbadah extends React.Component<{}, State>
{
  state = {
    agendrees: []
  }
  componentDidMount() {
    this.getAgendre();
  }
  getAgendre = async() => {
    try {
      const { data } = await NetworkService.getAgendrees();
      this.setState( {
        agendrees: data
      });
    } catch(e) {
      return;
    }
  }
  render() {
    return (
      <div>
          <Link to="/agendre/new">Tambah Agendre</Link>
          <React.Suspense fallback={<div>Loading...</div>}>
            <TableAgendre agendrees={this.state.agendrees} />
          </React.Suspense>
      </div>
    )
  }
}

export default ListTataIbadah;
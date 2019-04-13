import * as React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';

const DressCodeTable = React.lazy(() => import('../../components/DressCodeComponent/DressCodeTable'));

class ListDressCode extends React.PureComponent
{
  state = {
    dressCodes: []
  }
  componentDidMount() {
    this.getDressCode();
  }
  getDressCode = async () => {
    try {
      const { data } = await NetworkService.getDressCodes();
      this.setState({
        dressCodes: data
      });
    } catch (err) {
      return;
    }
  }
  render() {
    return (
      <React.Fragment>
        <Link to="/dress-code/new">Tambah Data Warna</Link>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DressCodeTable dressCodes={this.state.dressCodes} />
          </React.Suspense>
      </React.Fragment>
    )
  }
}

export default ListDressCode;

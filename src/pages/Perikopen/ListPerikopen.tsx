import * as React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';
import TablePerikopen from '../../components/PerikopenComponent/TablePerikopen';


class ListPerikopen extends React.Component
{
  _isMounted = false;
  state = {
    perikopens: [],
  }
  componentDidMount() {
    this._isMounted = true;
    this.getPerikopens();
  }
  getPerikopens = async () => {
    try {
      const { data } = await NetworkService.getPerikopens();
      if (this._isMounted) {
        this.setState({
          perikopens: data,
        });
      }
    } catch(e) {}
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    return (
      <React.Fragment>
        <Link to="/perikopen/new">Tambah Perikopen</Link>
        <TablePerikopen perikopens={this.state.perikopens}/>
      </React.Fragment>
    )
  }
}

export default ListPerikopen;

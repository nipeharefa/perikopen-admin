import * as React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';
import TablePerikopen from '../../components/PerikopenComponent/TablePerikopen';


class ListPerikopen extends React.Component
{
  state = {
    perikopens: [],
  }
  componentDidMount() {
    this.getPerikopens();
  }
  getPerikopens = async () => {
    try {
      const { data } = await NetworkService.getPerikopens();
      // console.log(data);
      this.setState({
        perikopens: data,
      });
    } catch(e) {

    }
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

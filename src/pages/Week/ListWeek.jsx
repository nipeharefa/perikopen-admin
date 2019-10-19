import React from 'react';
import { Link } from 'react-router-dom';
import NetworkService from '../../service/network';
import TableWeek from '../../components/WeekComponent/TableWeek';

const ListWeek = () => {

  const [weeks, setWeeks] = React.useState([]);
  const getWeek = async () => {
    try {
      const { data } = await NetworkService.getWeeks();
      setWeeks(data);
    }catch(e) {
    }
  }

  React.useEffect(() => {
    getWeek();
  }, [])

  return (
      <div>
        <Link to="/week/new">Tambah Data Minggu</Link>
        <TableWeek weeks={weeks} />
      </div>
  )
};


export default ListWeek;

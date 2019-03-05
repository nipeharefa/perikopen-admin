import ListWeek from '../pages/Week/ListWeek';
import CreateWeek from '../pages/Week/CreateWeek';
import EditWeek from '../pages/Week/EditWeek';

const routes = [
  {
    component: ListWeek,
    path: '/week'
  },
  {
    component: CreateWeek,
    path: '/week/new',
  },
  {
    component: EditWeek,
    path: '/week/:id/edit',
  }
];

export default routes;
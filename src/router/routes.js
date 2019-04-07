import ListWeek from '../pages/Week/ListWeek';
import CreateWeek from '../pages/Week/CreateWeek';
import EditWeek from '../pages/Week/EditWeek';
import ListSchedule from '../pages/Schedule/ListSchedule';
import CreateSchedule from '../pages/Schedule/CreateSchedule';

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
  },
  {
    component: ListSchedule,
    path: '/schedule',
  },
  {
    component: CreateSchedule,
    path: '/schedule/new',
  }
];

export default routes;
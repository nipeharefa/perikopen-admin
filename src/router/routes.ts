import ListWeek from '../pages/Week/ListWeek';
import CreateWeek from '../pages/Week/CreateWeek';
import EditWeek from '../pages/Week/EditWeek';
import ListSchedule from '../pages/Schedule/ListSchedule';
import CreateSchedule from '../pages/Schedule/CreateSchedule';
import ListTataIbadah from '../pages/TataIbadah/ListTataIbadah';
import CreateTataIbadah from '../pages/TataIbadah/CreateTataIbadah';
import ListDressCode from '../pages/DressCode/ListDressCode';
import CreateDressCode from '../pages/DressCode/CreateDressCode';
import ListPerikopen from '../pages/Perikopen/ListPerikopen';
import CreatePerikopen from '../pages/Perikopen/CreatePerikopen';

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
  // Schedule
  {
    component: ListSchedule,
    path: '/schedule',
  },
  {
    component: CreateSchedule,
    path: '/schedule/new',
  },
  // TataIbadah
  {
    component: ListTataIbadah,
    path: '/agendre',
  },
  {
    component: CreateTataIbadah,
    path: '/agendre/new',
  },
  // DressCode
  {
    component: ListDressCode,
    path: '/dress-code',
  },
  {
    component: CreateDressCode,
    path: '/dress-code/new',
  },
  // Perikopen
  {
    component: ListPerikopen,
    path: '/perikopen',
  },
  {
    component: CreatePerikopen,
    path: '/perikopen/new',
  }
];

export default routes;

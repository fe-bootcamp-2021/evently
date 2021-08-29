import {
  pink,
  purple,
  teal,
  amber,
  deepOrange,
} from "@material-ui/core/colors";

export const appointments = [
  {
    id: 0,
    title: 'Watercolor Landscape',
    roomId: 1,
    members: [1],
    startDate: new Date(2017, 4, 1, 9, 30),
    endDate: new Date(2017, 4, 1, 11),
    rRule: 'FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10',
  }
];

export const resourcesData = [
  {
    text: 'Room 101',
    id: 1,
    color: amber,
  }
];

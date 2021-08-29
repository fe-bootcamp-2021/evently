import { green, deepOrange, lightBlue } from "@material-ui/core/colors";

export const tasks = [
  {
    title: "Recall Rebate Form",
    priorityId: 2,
    startDate: "2018-04-17T09:30",
    endDate: "2018-04-17T10:00",
  },
];

export const priorities = [
  { id: 1, text: "Low Priority", color: green },
  { id: 2, text: "Medium Priority", color: lightBlue },
  { id: 3, text: "High Priority", color: deepOrange },
];

export const owners = [
  {
    text: "Tigran Khanaghyan",
    id: 1,
    color: "red",
  },
];

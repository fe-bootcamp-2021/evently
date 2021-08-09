const RadioColors = () => {
  const colorData = [
    {
      id: 1 + Math.random(),
      name: "colors",
      color: "bg-yellow-300",
      value: 1,
    },
    {
      id: 2 + Math.random(),
      name: "colors",
      color: "bg-green-200",
      value: 2,
    },
    {
      id: 3 + Math.random(),
      name: "colors",
      color: "bg-blue-400",
      value: 3,
    },
    {
      id: 4 + Math.random(),
      name: "colors",
      color: "bg-purple-500",
      value: 4,
    },
    {
      id: 5 + Math.random(),
      name: "colors",
      color: "bg-red-300",
      value: 5,
    },
    {
      id: 6 + Math.random(),
      name: "colors",
      color: "bg-pink-500",
      value: 6,
    },
    {
      id: 7 + Math.random(),
      name: "colors",
      color: "bg-red-500",
      value: 7,
    },
  ];

  return colorData;
};

export default RadioColors;

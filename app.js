const dangerousArr = [
  "Lilian Napoleon",
  {
    nickName: ["Lily", "Dupe"],
    hobbies: ["Swimming", "Singing"],
    favTools: {
      css: 3,
      JS: 1,
      JSX: 2,
      HTML: 4,
    },
  },
  {
    luckyNumbers: [7, 2, 8, 1],
  },
  ["White", "Blue", "Teal", "Cream", "Black"],
];

console.log(
  typeof dangerousArr[0],
  typeof dangerousArr[1],
  typeof dangerousArr[2],
  typeof dangerousArr[3]
);

console.log(
  typeof dangerousArr[1].nickName,
  typeof dangerousArr[1].hobbies,
  typeof dangerousArr[1].favTools
);

console.log(typeof dangerousArr[1].hobbies[1])


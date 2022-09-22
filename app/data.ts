interface DataShape {
  user: string;
  username: string;
  location: string;
  caption: string;
  likes: number;
  comments: number;
  days: number;
  bg: string;
  pic: string;
  peopleFollowed: string;
}

const data: DataShape[] = [
  {
    user: "./app/img/user.png",
    username: "Jotica012",
    location: "Cali",
    caption: "Wenas juanes",
    likes: 10,
    comments: 10,
    days: 2,
    bg: "./app/img/bg.png",
    pic: "./app/img/user3.png",
    peopleFollowed: "lidalee_01113"
  },
  {
    user: "./app/img/user5.png",
    username: "Jotica012",
    location: "Cali",
    caption: "Wenas juanes",
    likes: 10,
    comments: 10,
    days: 2,
    bg: "./app/img/bg.png",
    pic: "./app/img/user5.png",
    peopleFollowed: "lidalee_01113"
  },
];


export default data;

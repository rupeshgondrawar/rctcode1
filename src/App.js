import "./styles.css";
import Button from "./components/Button";
import Avatar from "./components/Avatar";

// const squaredArr = [1, 2, 3].map((el) => <li>{el}</li>);
const users = [
  {
    id: 1,
    Avatar_url:
      "https://media.gettyimages.com/id/1161173063/photo/ms-dhoni-of-india-in-action-batting-during-the-semi-final-match-of-the-icc-cricket-world-cup.jpg?s=612x612&w=gi&k=20&c=RXNcEisunuyosW8pqtLFatd0WNVJ2IxQjZmUnyTuOis=",
    name: "mahi",
    rounded: "true"
  },
  {
    id: 2,
    Avatar_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ratan_Tata_photo.jpg/437px-Ratan_Tata_photo.jpg",
    name: "ratan_tata",
    rounded: "true"
  }
];

const userAvatars = users.map((el) => (
  <Avatar
    key={users.id}
    src={el.Avatar_url}
    name={el.name}
    rounded={el.rounded}
  />
));

export default function App() {
  return (
    <div className="App">
      <h1>Hello RCT-101</h1>
      {userAvatars}
      <Button text="click me!"></Button>
      {/* {1>0 ? "true" : "false"} ternary operator */}
    </div>
  );
}

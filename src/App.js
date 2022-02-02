import "./styles.css";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function App() {
  return (
    <div className="App">
      <h1>Live Spaces</h1>
      <p>
        <IoIosCheckmarkCircle style={{ paddingRight: "8px" }} />
        All NFTs Cyber either belong to or were minted by their space creater.
      </p>
    </div>
  );
}

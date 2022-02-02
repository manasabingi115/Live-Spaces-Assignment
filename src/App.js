import "./styles.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Card from "./Card";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { IoDiamond } from "react-icons/io5";
import { GiAcid } from "react-icons/gi";
import { GiPolarBear } from "react-icons/gi";

export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          marginLeft: "15px",
          paddingTop: "20px"
        }}
      >
        Live Spaces
      </h1>
      <p className="marked-info" style={{ marginLeft: "15px" }}>
        <IoIosCheckmarkCircle
          style={{ paddingRight: "8px", fontSize: "30px" }}
        />
        All NFTs Cyber either belong to or were minted by their space creater.
      </p>
      <div className="filters-block">
        <p
          className="filters"
          style={{ backgroundColor: "black", border: "none", color: "white" }}
        >
          <MdOutlineLocalFireDepartment
            style={{ marginRight: "5px", fontSize: "20px", color: "orange" }}
          />
          24h Trending
        </p>
        <p className="filters">Latest shows</p>
        <p className="filters">Most Popular</p>
        <p className="filters">
          <IoDiamond
            style={{ color: "skyblue", marginRight: "5px", fontSize: "20px" }}
          />
          In Genesis
        </p>
        <p className="filters">
          <GiAcid
            style={{
              marginRight: "5px",
              fontSize: "20px",
              color: "rgba(207, 112, 4, 0.911)"
            }}
          />
          In Temple
        </p>
        <p className="filters">In Void</p>
        <p className="filters">
          <GiPolarBear
            style={{
              marginRight: "5px",
              fontSize: "23px",
              color: "gray"
            }}
          />
          #BAYC
        </p>
      </div>
      <br />
      <Card />
    </div>
  );
}

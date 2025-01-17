import Hero from "../components/Hero";
import "../styles/Home.css";
import { hotDropsData } from "../constants/MockupData";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import powerstations from "../data/powerstations.json";
import MemberCard from "../utils/MemberCard";
import Sellers from "../data/Sellers.json";

const P2PMarketplace = () => {
  let navigate = useNavigate();
  const topMostEfficeincyPlants = powerstations.powerstations.filter(
    (item) => item.efficiency > 3
  );
  return (
    <div id="home">
      <div className=" px-20 pt-10">
        <Link to="">
          <MdOutlineKeyboardBackspace
            onClick={() => navigate(-1)}
            color="white"
            size={50}
          />
        </Link>
      </div>
      <Hero list={hotDropsData} text="P2P" url="/p2p-explore" />
      <p id="card-list-header-text"> Most Trade Users </p>

      <div className="grid grid-cols-4 gap-4 mt-4 container mx-auto">
        {Sellers.sellers.slice(0,4).map((item, i) => {
          return <MemberCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default P2PMarketplace;

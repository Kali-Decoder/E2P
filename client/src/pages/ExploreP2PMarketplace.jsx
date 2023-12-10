import react,{useState} from "react";
import "../styles/Explore.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sellers from "../data/Sellers.json";
import MemberCard from "../utils/MemberCard";
import { useUserDataContext } from "../context/DataContext";
const ExploreP2PMarketplace = () => {
const [isOpen, setIsOpen] = useState(false);
const {GenerateInvoice} = useUserDataContext();
  let navigate = useNavigate();
  return (
    <>
      <div className=" px-20 pt-10">
        <Link to="">
          <MdOutlineKeyboardBackspace
            onClick={() => navigate(-1)}
            color="white"
            size={50}
          />
        </Link>
      </div>
      <div id="hero" className="flex justify-center items-center flex-col">
        <h1 id="header-text-first"> 🔋 </h1>
        <h1 id="header-text-second"> Explore P2P Marketplace</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4 container mx-auto">
      {Sellers.sellers.map((item, i) => {
        return <MemberCard setIsOpen={setIsOpen}  item={item} key={i} />;
      })}
      </div>


      {isOpen ? (
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0 transparent "
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center backdrop-blur-md bg-white/30 border-2 border-blue-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="group relative w-full md:w-full lg:w-full mb-3">
                  <label
                    for="1"
                    class="block w-full pb-1 mb-3 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Number of Units
                  </label>
                  <input
                    id="1"
                    type="number"
                    class="peer h-10 w-full rounded-md bg-black border px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-white focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
              </div>
              <div className="bg-black px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                   onClick={GenerateInvoice}
                  type="button"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  <i className="fas fa-plus"></i> Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

    </>
  );
};

export default ExploreP2PMarketplace;

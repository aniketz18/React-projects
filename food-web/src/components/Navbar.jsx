/* import { useContext } from "react";
import { SearchContext } from "../context/SearchContext"; */
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../redux/actions/SearchSlice";
function Navbar() {
  const dispatch = useDispatch()
  const search = useSelector((state)=>state.search)
 /*  const { search, setSearch } = useContext(SearchContext); */
  return (
    <div
      style={{
        width: "100%",
        height: "15vh",
        display: "flex",
        position: "fixed",
        backgroundColor: "white",
        top: "0",
      }}
    >
      <input
        style={{
          width: "100%",
          fontSize: "32px",
          paddingLeft: "5vh",
          borderBottom: "1px solid gray",
        }}
        type="text"
        placeholder="Search.."
        value={search}
      /*   onChange={(e) => setSearch(e.target.value)} */
      onChange={(e)=> dispatch(searchFilter(e.target.value))}
      />
    </div>
  );
}

export default Navbar;

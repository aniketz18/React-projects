import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

function FilterBoxes() {
  const { setCategory, setRating,/*  setSearch, */ setPrice } =
    useContext(SearchContext);

  return (
    <div style={{ width: "100%", margin: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          borderBottom: "1px solid gray",
          width: "20vh",
          width: "100%",
          paddingBottom: "15px",
        }}
      >
        <h2>Category</h2>
        <span style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
          <button
            value={"place"}
            onClick={(e) => {
              setCategory(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "10px 22px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            🏡 Place
          </button>
          <button
            value={"Food"}
            onClick={(e) => {
              setCategory(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "10px 22px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            🍔 Food
          </button>
        </span>
      </div>
      {/*  //2nd div */}

      <div
        style={{
          fontFamily: "monospace",
          fontSize: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "0px",
          borderBottom: "1px solid gray",
          paddingBottom: "15px",
        }}
      >
        <h2 style={{ margin: "15px 0px", fontWeight: "bold" }}>Location</h2>
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            gap: "20.8vh",
            display: "flex",
          }}
        >
          American <input style={{ paddingLeft: "30px" }} type="checkbox" />
        </label>

        <label
          style={{
            display: "block",
            marginBottom: "10px",
            gap: "22vh",
            display: "flex",
          }}
        >
          Chinese <input type="checkbox" />
        </label>

        <label style={{ display: "block", gap: "22vh", display: "flex" }}>
          Italian <input type="checkbox" />
        </label>
      </div>
      {/* 3rd div */}

      <div
        style={{
          fontFamily: "monospace",
          fontSize: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "0px",
          borderBottom: "1px solid gray",
          paddingBottom: "15px",
        }}
      >
        <h2 style={{ margin: "15px 0px", fontWeight: "bold" }}>
          Price Range : (1 : 100)
        </h2>
        <input
          onChange={(e) => setPrice(e.target.value)}
          style={{ margin: "auto 60px auto 5px" }}
          type="range"
          min="10"
          max="100"
          defaultValue="100"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "250px",
          }}
        >
          <span> 0-1000 Rs</span>
          <span>100000 Rs</span>
        </div>
      </div>

      {/* 4rth div */}

      <div
        style={{
          fontFamily: "monospace",
          fontSize: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "0px",
          borderBottom: "1px solid gray",
          paddingBottom: "15px",
        }}
      >
        <h2 style={{ margin: "15px 0px", fontWeight: "bold" }}>Star Rating</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <button
            value={1}
            onClick={(e) => {
              setRating(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "5px 10px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            ⭐ 1
          </button>
          <button
            value={2}
            onClick={(e) => {
              setRating(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "5px 10px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            ⭐ 2
          </button>
          <button
            value={3}
            onClick={(e) => {
              setRating(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "5px 10px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            ⭐ 3
          </button>
          <button
            value={4}
            onClick={(e) => {
              setRating(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "5px 10px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            ⭐ 4
          </button>
          <button
            value={4.5}
            onClick={(e) => {
              setRating(e.target.value);
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "5px 10px", // height auto matches width
              borderRadius: "6px",
              fontSize: "16px",
              fontFamily: "monospace",
              cursor: "pointer",
            }}
          >
            ⭐ 4.5
          </button>
        </div>
      </div>
      {/* last div */}

      <div
        style={{
          fontFamily: "monospace",
          fontSize: "16px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "0px",
          borderBottom: "1px solid gray",
          paddingBottom: "15px",
        }}
      >
        <button
          onClick={() => {
            (setSearch(""), setCategory(""), setRating(),setPrice(100*1000));
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            padding: "5px 10px", // height auto matches width
            borderRadius: "6px",
            fontSize: "16px",
            fontFamily: "monospace",
            cursor: "pointer",
            margin: "20px 60px",
          }}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}

export default FilterBoxes;

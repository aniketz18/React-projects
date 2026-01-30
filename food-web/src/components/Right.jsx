import React, { useContext } from "react";
import { Products } from "../data/Products";
import { SearchContext } from "../context/SearchContext";
import { useSelector } from "react-redux";
function Right() {
  const search = useSelector((state)=>state.filter.search)
  console.log(search);
  
  const { /* search, */ category, rating, price } = useContext(SearchContext);
  const filteredProducts = Products.filter((product) => {
   
    const matchSearch = {search}
      ? product.title.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchCategory = category
      ? product.category.toLowerCase() === category.toLowerCase()
      : true;
    const matchRating = rating ? product.rating >= rating : true;
    const matchPrice = price ? product.price <= price*1000 : true;

    return matchCategory && matchSearch && matchRating && matchPrice;
  });

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "20%",
        paddingTop: "3vh",
        marginTop: "15vh",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {filteredProducts.map((item, index) => (
        <div
          key={index}
          style={{
            width: "385px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "top",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src={item.thumbnail}
            alt="card"
          />
          <div style={{ marginTop: "15px", display: "flex", gap: "25vh" }}>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {item.title}
            </h1>
            <span
              style={{
                backgroundColor: "skyblue",
                padding: "5px",
                borderRadius: "8px",
                width: "3rem",
                height: "2rem",
              }}
            >
              ⭐{item.rating}
            </span>
          </div>
          <div style={{ marginTop: "20px", display: "flex", gap: "30vh" }}>
            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "monospace",
              }}
            >
              {item.category}
            </h2>
            <span
              style={{
                padding: "5px",
                borderRadius: "8px",
                width: "3rem",
                height: "2rem",
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              Rs.{item.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Right;

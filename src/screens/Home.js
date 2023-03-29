import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]= useState('');

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api//foodData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    //console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel' style={{padding: "10px"}}>
    <div className="carousel-caption d-none d-md-block" style={{zIndex:10}}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h5 style={{fontSize: "28px", marginBottom: "10px"}}>Search for food</h5>
        <div className="input-group">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" 
            value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          <button className="btn btn-outline-success text-white" type="submit" style={{marginLeft: "5px", fontSize: "18px"}}>Go</button>
        </div>
      </div>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?chiken" className="d-block w-100" alt="Banana" style={{objectFit: "cover"}} />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?bread" className="d-block w-100" alt="Mango" style={{objectFit: "cover"}} />
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?biryani" className="d-block w-100" alt="Apple" style={{objectFit: "cover"}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
      <div className="container">
      {foodCat !== [] ? (
        foodCat.map((data) => {
          return (
            <div key={data._id} className="row mb-5">
              <div className="fs-3 m-3 text-uppercase">
                {data.CategoryName}
              </div>
              <hr className="mt-0 mb-3"  />
              {foodItem !==[] ? (
                foodItem
                  .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filterItems => {
                    return (
                      <div key={filterItems._id} className="col-12 col-md-6 col-lg-3 mb-4">
                        <Card foodItem={filterItems} options={filterItems.options[0]} />
                      </div>
                    )
                  })
              ) : (
                <div className="text-danger mt-4">No such data found</div>
              )}
            </div>
          );
        })
      ) : (
        ""
      )}
    </div>
    
      <div>
        <Footer />
      </div>
    </div>
  );
}

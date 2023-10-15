import "./Home.css";
import Card from "../../components/Card/Card";
import Category from "../../components/Category/Category";
import { useEffect, useState } from "react";

const Home = ({ nftData }) => {
  // States
  const [filterData, setFilterData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [pageCount, setPageCount] = useState({ prePage: 0, nextPage: 10 });

  const filterDataHandler = (data) => {
    let filteredArray = nftData.filter((element) =>
      element.attributes.find(
        (subElement) =>
          subElement.trait_type.toUpperCase() === data.category.toUpperCase() &&
          subElement.value.toUpperCase() === data.subCategory.toUpperCase()
      )
    );
    setFilterData(filteredArray);
    setPageCount({ prePage: 0, nextPage: 10 });
  };

  // Initailly Data set into display data and filter data states
  useEffect(() => {
    setFilterData(nftData);
    setDisplayData(nftData.slice(0, 10));
  }, [nftData]);

  useEffect(() => {
    setDisplayData(filterData.slice(pageCount.prePage, pageCount.nextPage));
  }, [pageCount]);

  return (
    <>
      <div className="home-page my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Category filterDataHandler={filterDataHandler} />
              <button
                className="btn btn-linear w-100"
                onClick={() => {
                  setFilterData(nftData);
                  setDisplayData(nftData.slice(0, 10));
                }}
              >
                Reset Filters
              </button>
            </div>
            <div className="col-md-9">
              <div className="row">
                <h2>Secret Society of Odd Fellos (SSOF) Gallery</h2>
                <h5>{filterData && filterData.length} items</h5>
              </div>
              <div className="row">
                {displayData.length > 0 ? (
                  displayData.map((item, index) => (
                    <div className="col-sm-4 col-6 mb-3" key={index}>
                      <Card name={item.name} img={item.image} />
                    </div>
                  ))
                ) : (
                  <div className="col text-center my-5">
                    <div className="spinner-border text-light" />
                  </div>
                )}
              </div>
              {displayData.length > 0 && (
                <div className="row">
                  <div className="col">
                    <button
                      className="btn btn-linear mx-auto d-block"
                      onClick={(e) =>
                        setPageCount({
                          prePage: pageCount.nextPage,
                          nextPage: pageCount.nextPage + 10,
                        })
                      }
                    >
                      Load More
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

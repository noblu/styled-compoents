import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Pagination from "../Pagination/Pagination";
import logo from "./img/icon-logo.svg";
// import banker from "./img/nft-babbu-banker.png";

const random = [
  "top bg-soft-pink",
  "top bg-natural",
  "top bg-grey",
  "top bg-soft-green",
  "top bg-purple",
  "top bg-soft-blue",
  "top bg-purple-1",
  "top bg-mint",
];

function ModalMarketNft({ babbuFamilyNftArray }: any) {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [todosPerPage, setTodosPerPage] = React.useState(8);
  const [pageNumber, setPageNumber] = React.useState(Array);

  const next = () => {
    if (currentPage != pageNumber.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage != 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const pageClick = (e: any) => {
    setCurrentPage(e);
  };

  const lastToDo = currentPage * todosPerPage;
  const firstToDo = lastToDo - todosPerPage;

  useEffect(() => {
    if (babbuFamilyNftArray) {
      const arr = [];
      for (let i = 1; i <= Math.ceil(babbuFamilyNftArray.length / todosPerPage); i++) {
        arr.push(i);
      }
      setPageNumber(arr);
    }    
  }, [babbuFamilyNftArray]);

  const onDetail = (id: any) => {
    console.log(id);
    navigate(`/market-auction/detail/${id}`);
  };

  return (
    <>
      <div className="listNft">
        <div className="row">
          {babbuFamilyNftArray &&
            babbuFamilyNftArray.slice(firstToDo, lastToDo).map((item: any, index: any) => (
              <div
                className="col-xl-3 col-lg-4 col-6"
                key={index}
                onClick={() => onDetail(item._id)}
                style={{ cursor: "pointer" }}
              >
                <div className="item">
                  <div
                    className={
                      random[Math.floor(Math.random() * random.length)]
                    }
                  >
                    <span className="percent badge md rounded bg-yellow-grad">
                      160x
                    </span>
                    <img src={item.image} alt="" />
                    <h4 className="title">
                      {item.title} (#{item.type})
                    </h4>
                  </div>
                  <div className="bottom">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>Live in:</div>
                      <div className="fw-bold">02h:40m:35s</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>Start Price:</div>
                      <div className="text-green">≈ $15,176</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between fw-bold">
                      <div>
                        <img src={logo} width={25} />
                        $BABU
                      </div>
                      <div>66,500,000</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* <Pagination
        next={next}
        prev={prev}
        pageNumber={pageNumber}
        currentPage={currentPage}
        pageClick={pageClick}
      /> */}
    </>
  );
}

export default ModalMarketNft;

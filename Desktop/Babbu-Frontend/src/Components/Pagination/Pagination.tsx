import "./pagination.css";
import paginate from "./img/icon-arrow-paginate.svg";

function Pagination({ next, prev, pageClick, pageNumber, currentPage }: any) {
  const min = currentPage == 1;
  const max = currentPage == pageNumber.length;
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={min ? "page-item prev disabled" : "page-item prev"} onClick={prev}>
            <a className="page-link">
              <img src={paginate} alt="" />
            </a>
          </li>
          {pageNumber &&
            pageNumber.map((item: any, index: any) => (
              <li
                className={
                  currentPage == item ? "page-item active" : "page-item"
                }
                key={item}
                onClick={() => pageClick(item)}
              >
                <a className="page-link">{item}</a>
              </li>
            ))}
          {/* <li className="page-item">
            <span className="page-link">...</span>
          </li> */}
          <li className={max ? "page-item next disabled" : "page-item next"} onClick={next}>
            <a className="page-link">
              <img src={paginate} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;

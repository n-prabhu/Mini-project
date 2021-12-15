import "./pagination.css";
import { range } from "lodash";

const Pagination = (props) => {
  const { totalAccount, accountPerPage, paginate, currentPage } = props;

  const pages = Math.ceil(totalAccount / accountPerPage);
  const ArrayOfPage = range(pages);

  return (
    <div className="d-flex justify-content-center" id="Pagination">
      {totalAccount > 8 ? (
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {ArrayOfPage.map((page, idx) => {
              return (
                <li
                  key={page + 1}
                  class={`page-item ${
                    page + 1 === currentPage ? "active" : ""
                  }`}
                >
                  <div
                    class="page-link"
                    onClick={() => {
                      paginate(page + 1);
                    }}
                  >
                    {page + 1}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
export default Pagination;

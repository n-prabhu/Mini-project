const Pagination = () => {
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <div class="page-link">Previous</div>
          </li>
          <li class="page-item">
            <div class="page-link">1</div>
          </li>
          <li class="page-item">
            <div class="page-link">2</div>
          </li>
          <li class="page-item">
            <div class="page-link">3</div>
          </li>
          <li class="page-item">
            <div class="page-link">Next</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;

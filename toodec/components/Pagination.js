import { useState } from "react";

const Pagination = ({ handlePageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    handlePageChange(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    handlePageChange(currentPage - 1);
  };

  return (
    <div>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;

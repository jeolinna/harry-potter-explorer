import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPagesToShow = () => {
    const pages = [];
    const maxPagesToShow = 3;

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pagesToShow = getPagesToShow();

  return (
    <div className="flex justify-center items-center gap-2 mb-4 sm:mb-7 lg:mb-9">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 flex items-center justify-center bg-[#FDD42D] text-xs lg:text-lg text-[#281A0F] rounded-md lg-rounded-lg disabled:opacity-50 font-bold hover:bg-yellow-400 transition-colors"
        title="First page"
      >
        «
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 flex items-center justify-center bg-[#FDD42D] text-xs lg:text-lg text-[#281A0F] rounded-md lg-rounded-lg disabled:opacity-50 font-bold hover:bg-yellow-400 transition-colors"
      >
        ←
      </button>

      {pagesToShow.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 text-xs lg:text-lg rounded-md lg-rounded-lg font-semibold transition-colors ${
            currentPage === page
              ? "bg-[#FDD42D] text-[#281A0F]"
              : "bg-[#281A0F] text-[#FDD42D] hover:bg-[#181009]"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 flex items-center justify-center bg-[#FDD42D] text-xs lg:text-lg text-[#281A0F] rounded-md lg-rounded-lg disabled:opacity-50 font-bold hover:bg-yellow-400 transition-colors"
      >
        →
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="w-5 sm:w-7 lg:w-10 h-5 sm:h-7 lg:h-10 flex items-center justify-center bg-[#FDD42D] text-xs lg:text-lg text-[#281A0F] rounded-md lg-rounded-lg disabled:opacity-50 font-bold hover:bg-yellow-400 transition-colors"
        title="Last page"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;

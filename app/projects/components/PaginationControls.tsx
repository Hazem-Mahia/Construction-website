import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface PaginationControlsProps {
  page: string | string[];
  perPage: string | string[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalPages: number;
}

export const PaginationControls = ({
  page,
  perPage,
  hasNextPage,
  hasPreviousPage,
  totalPages,
}: PaginationControlsProps) => {
  const currentPage = Array.isArray(page) ? Number(page[0]) : Number(page);
  const currentPerPage = Array.isArray(perPage)
    ? Number(perPage[0])
    : Number(perPage);

  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-4">
        {/* Previous Page Link */}
        <Link
          href={`/projects?page=${currentPage - 1}&perPage=${currentPerPage}`}
          className={`${
            hasPreviousPage
              ? "text-primary hover:text-primary"
              : "text-gray-300 cursor-not-allowed"
          }`}
          aria-disabled={!hasPreviousPage}
        >
          <span aria-hidden="true">
            <FaArrowLeft />
          </span>
        </Link>

        {/* Page Number Links */}
        {[...Array(totalPages)].map((_, index) => {
          const pageIndex = index + 1; // Adjusted to be 1-based
          return (
            <Link
              key={pageIndex}
              href={`/projects?page=${pageIndex}&perPage=${currentPerPage}`}
              className={`${
                currentPage === pageIndex
                  ? "text-primary font-bold"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {pageIndex}
            </Link>
          );
        })}

        {/* Next Page Link */}
        <Link
          href={`/projects?page=${currentPage + 1}&perPage=${currentPerPage}`}
          className={`${
            hasNextPage
              ? "text-primary hover:text-primary"
              : "text-gray-300 cursor-not-allowed"
          }`}
          aria-disabled={!hasNextPage}
        >
          <span aria-hidden="true">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

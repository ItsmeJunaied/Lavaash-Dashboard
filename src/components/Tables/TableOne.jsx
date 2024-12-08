
import Image from "next/image";
import { useState } from "react";
import { useCurrentUser } from "../../hooks/currentUserApi";



const TableOne = () => {
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [planName, setPlanName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);  // For pagination
  const [itemsPerPage] = useState(10);  // Items per page

  // Fetch user data using the custom hook
  const { data, error, isLoading, isError } = useCurrentUser(email, teamName, planName);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // Ensure `data.users` is an array before using .slice
  const currentItems = Array.isArray(data?.users) ? data.users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Premium Members
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              E-mail
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Team Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Total API Calls
            </h5>
          </div>
        </div>

        {/* Render current page items */}
        {currentItems?.map((user, key) => (
          <div
            className={`grid grid-cols-4 ${key === currentItems.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"}`}
            key={user._id}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {user.teams?.[0]?.teamName || "No team"}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {user.teams?.[0]?.totalApicall || 0}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 mx-1 bg-gray-300 rounded-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentItems.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableOne;
function SortOptions() {
  return (
    <>
      <div className="mx-auto  w-64 my-2 py-2">
        <label
          htmlFor="SortBy"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Sort by option
        </label>
        <select
          id="SortBy"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a value</option>
          <option value="upvotes">Upvotes</option>
          <option value="downvotes">Downvotes</option>
          <option value="productName">ProductName</option>
        </select>
      </div>
      <div className="mx-auto  w-64 my-2 py-2">
        <label
          htmlFor="order"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Order
        </label>
        <select
          id="order"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a value</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <button onClick={sortProductsList}> Sort</button>
      </div>
    </>
  );
}

export default SortOptions;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Navbar({
  categories,
  chosenCategory,
  setChosenCategory,
  setSearchQuery,
  localSearchQuery,
  setLocalSearchQuery,
}) {
  const [suggestions, setSuggestions] = useState([]);

  // Handle category change and clear search
  const handleCategoryChange = (e) => {
    setChosenCategory(e.target.value);
    // setSearchQuery(""); // Clear search query when switching category
    // setLocalSearchQuery(""); // Clear search input field when switching category
  };

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearchQuery.trim() !== "") {
      setSearchQuery(localSearchQuery); // Set search query to the parent's state
      // setChosenCategory(""); // Clear the category when searching
    }
  };

  // Handle clearing search input when a new search is initiated
  const handleInputChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  // Handle search input changes and fetch suggestions
  useEffect(() => {
    if (localSearchQuery.trim() !== "") {
      fetch(`https://dummyjson.com/products/search?q=${localSearchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data.products.slice(0, 5)); // Limit suggestions to 5
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSuggestions([]);
    }
  }, [localSearchQuery]);

  return (
    <header className="bg-background border-b shadow-sm">
      <div className="container px-4 md:px-6 flex items-center justify-between h-16">
        <Link to={"/"} className="flex items-center gap-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="font-semibold text-lg">Qadir Store</span>
        </Link>

        <form className="relative flex-1 max-w-md" onSubmit={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className="flex h-10 border border-input px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full bg-muted pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search products..."
            type="text"
            value={localSearchQuery}
            onChange={handleInputChange}
          />

          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 bg-white w-full max-h-48 overflow-y-auto text-black border border-gray-300 rounded-md shadow-lg z-10">
              {suggestions.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="p-2 hover:bg-gray-100 flex items-center"
                  onClick={() => setSuggestions([])}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-10 h-10 object-cover mr-2"
                  />
                  <span>{product.title}</span>
                </Link>
              ))}
            </div>
          )}
        </form>

        <select
          value={chosenCategory}
          onChange={handleCategoryChange}
          className="p-2 border rounded-md text-black"
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Navbar;



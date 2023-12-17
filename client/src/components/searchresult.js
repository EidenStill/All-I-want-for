import React, { useState, useEffect } from 'react';

const SearchResults = () => {
const navigate = useNavigate();
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);

        // Make an API call to fetch search results
        const response = await fetch(`https://localhost:8000/search?q=${searchQuery}`);
        
        if (!response.ok) {
          // Handle error response
          throw new Error('Error fetching search results');
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the state with the fetched results
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        // Handle fetch error
        setError(error.message);
        setLoading(false);
      }
    };

    // Call the fetch function when the searchQuery changes
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{/* Render each search result item */}</li>
          ))}
        </ul>
      )}
	// Display message when no results are found
      {!loading && !error && searchResults.length === 0 && (
        <div>
          <p>No discounted products found for "{searchQuery}"</p>
          <button onClick={() => navigate('/')}>Go Back</button>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

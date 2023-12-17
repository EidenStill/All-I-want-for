import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const SearchResults = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('q'); // Extract searchQuery from URL
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                setLoading(true);

                // Make an API call to fetch search results
                const response = await fetch(`http://localhost:8000/search?q=${searchQuery}`);

                if (!response.ok) {
                    // Handle error response
                    throw new Error('Error fetching search results');
                }

                // Parse the JSON response
                const data = await response.json();
                console.log(data)
                setSearchResults(data || []); // Use an empty array as the default if data is undefined

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
    console.log(searchResults)
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {searchResults && searchResults.length > 0 && (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.discount_id}>
                            <div>
                                <img src={result.item_img} alt={result.item_name} />
                                <h3>{result.item_name}</h3>
                                <p>{result.discount_description}</p>
                                <p>{result.discount_source}</p>
                                <p>{result.discount_code}</p>
                                <p>{result.discount_expiration}</p>
                                <p>{result.discount_url}</p>
                                {/* Render other properties as needed */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {!loading && !error && searchResults && searchResults.length === 0 && (
                /* Display message when no results are found */
                <div>
                    <p>No discounted products found for "{searchQuery}"</p>
                    <button onClick={() => navigate('/')}>Go Back</button>
                </div>
            )}
        </div>
    );
};

export default SearchResults;

const apiKey =
  "591FdGQ65mCIqEZj1CiH8FYK8TlFE4p5QoOzNwd6q1QgzV75pZVjzwZRXSq-NxAJdY5vD6Lc8Wv8TU39QZZZe9rweZvlwHLbx6hy7_H1BlfHxsGuPK_sNtRsL_NbZHYx";
const yelpBaseUrl =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

export const yelpApi = async (searchTermState, locationState, sortByState) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `bearer ${apiKey}`,
    },
  };
  const searchEndpoint = `?term=${searchTermState}&location=${locationState}&sort_by=${sortByState}`;
  const requestParams = `api_key=${apiKey}`;
  const urlToFetch = `${yelpBaseUrl}${searchEndpoint}${requestParams}`;

  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok) {
      const jsonResponse = await response.json();

      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map((business) => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        }));
        
      }
    } else {
      throw new Error("Request Failed!");
    }
  } catch (error) {
    console.log(error);
  }
};

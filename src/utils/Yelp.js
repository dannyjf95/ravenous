//yelp api key
const apiKey =
  "4njiSx-asXAWOw0q4nZtQxTRuwvtuOqZ-E0-ZLJYmMRUx9iwEwFAgZXD5L20o5sK0ZSBPeNC5ZnE7gp19N8no6qwkjnQmDcrwHk6pcI7pwb4N8LOL7IzSocF7FddZHYx";

const Yelp = {
  async searchYelp(searchTerm, location, sortBy) {
    const options = {
      method: "GET",
      accept: "application/json",
      headers: {
        Authorization: `bearer ${apiKey}`,
      },
    };

    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${location}&sort_by=${sortBy}`,
        options
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        //response is ok!
        // console.log(response);
        // console.log(jsonResponse);
        return jsonResponse.businesses.map((yelpBusiness) => ({
          id: yelpBusiness.id,
          imgSrc: yelpBusiness.image_url,
          name: yelpBusiness.name,
          address: yelpBusiness.location.address1,
          city: yelpBusiness.location.city,
          state: yelpBusiness.location.state,
          zipCode: yelpBusiness.location.zip_code,
          category: yelpBusiness.categories[0].title,
          rating: yelpBusiness.rating,
          reviewCount: yelpBusiness.review_count,
        }));
        
      }
    } catch (error) {//
      console.log(error);
    }
  },
};

//test along with console.log(jsonResponse) line23 ish
// Yelp.searchYelp("pizza", "New York", "best_match");

export default Yelp;



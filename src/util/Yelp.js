// const ClientId = 'ZDO86MkVR4pcFFKZyBmFZA'

const apiKey = 'a8IEatwG2PiGwOR8CRHozKmJ-QSXTjH15bDhEf5NohgioX4i_UA5BZCfXeR7vs1WHtKXWDFsZijR_ruarWeCl-Bbsv4oIr9u2JeUx5vT0-WdNOfHAhywtafwInC3XXYx'


const Yelp = {
  search(term, location, sortBy) {
    let urlToFetch = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
      return fetch('https://cors-anywhere.herokuapp.com/'+urlToFetch, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then((response) => {
        return response.json()
      }).then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business)
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });
        }
      })
}
}

export default Yelp;

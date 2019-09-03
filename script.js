'use strict';

const apiKey = '1AX6CKlRzxx3D4RjipBxDmi6sN46rhmWBIif60IV';
const searchURL = 'https://developer.nps.gov/api/v1';

function formatParams(params) {
  const queryItems = Object.keys(params)
  .map(key -> `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function getParks() {
  const params = {
    key: apiKey,
    q: query,
    part: '?',
    maxResults
  };

  const queryString = formatParams(params)
  const url = searchURL + '?' + queryString;

  fetch(url)
    .then(response => {
      if(response.ok) {
        return (response.json);
      }
      throw new Error(reponse.statusText);
    })

    .then(responseJson => console.log())
    ,catch(err => {
      $('#js-error-message').text(`"This is embarassing. ${err.message}Something's not right."`)
    });

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('js-search').val();
    const maxResults = $('js-max-results').val();
    console.log('watchform working');
    getParks();
  });
}

$(watchForm);




/* SAMPLE:
https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=1AX6CKlRzxx3D4RjipBxDmi6sN46rhmWBIif60IV */ 

// Review The National Parks Services API documentation and create an API key.


// Review the API Guide on Authentication for ways to pass your API key as part of the request.


// Review the /parks endpoint and data model to understand how it works.


// -------------------------------------DISPLAY
// The parks in the given state must be displayed on the page. Include at least:
// Full name (fullName)
// Description (description)
// Website URL (url)
// Directions URL (directionsUrl)

// The user must be able to make multiple searches and see only the results for the current search.

// -------------------------------------EXTRA CREDIT
// As a stretch goal, try adding the park's address to the results. (directionsInfo)





// -------------------------------------API DOCUMENTATION
// Each API request contains:
// Resource Endpoint
// Query String Parameters
// HTTP Request Header with an API Key

/* For example, consider the following URL:
https://developer.nps.gov/api/v1/alerts?parkCode=acad,dena

In the above request, two of the three necessary components are represented.
Resource Endpoint - https://developer.nps.gov/api/v1/alerts
Query String Parameters - parkCode=acad,dena
However, just pasting that URL in a browser address bar won't return any results as you also need to send your API key in the HTTP request header. In order to learn more about that, be sure to read the API Guides page about authentication. Also, test out queries and learn more about the API in the API Documentation section of this website.

Good luck with your programming project and thanks for using NPS data. */ 
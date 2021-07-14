const express = require("express"); 
const fetch = require("node-fetch") ;


const app = express() ;
const PORT = process.env.PORT || 3000 ;
require('dotenv').config() ;

app.use(express.static("public"));

const url = "https://api.github.com/graphql" ;
const query = ` {
    search(query: "stars:>50000", type: REPOSITORY, first: 10) {
        repositoryCount
        edges {
            node {
            ... on Repository {
                name
                owner {
                login
                }
                stargazers {
                totalCount
                }
            }
            }
        }
        }
  }
  ` ;

const options = {
    method: "post",
    headers: {
        "content-type": "application/json",
        authorization: "bearer " + process.env.APIKEY 
    },
    body: JSON.stringify({ query: query }),
}

app.get("/data", async (req, res) => {
    let response
    try {
        response = await fetch(url, options);
    } catch (error) {
        console.error(error)
    }
    const data = await response.json() ;
    res.json(data);
})

app.listen(PORT)
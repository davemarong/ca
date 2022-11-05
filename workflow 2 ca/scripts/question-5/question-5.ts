// API url: https://graphqlzero.almansi.me/ap
import axios from "axios";
import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";

let results_list: Element = document.querySelector(".results-list")!;
let data;
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
});
client
  .query({
    query: gql`
      {
        posts(options: { paginate: { page: 1, limit: 10 } }) {
          data {
            id
            title
          }
          meta {
            totalCount
          }
        }
      }
    `,
  })
  .then((res) => {
    console.log(res);
    data = res.data.posts.data;
    // The id is a string, and lodash does not takes this into consideration, so the sorting is not perfect.
    data = orderBy(res.data.posts.data, ["id"], ["desc"]);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      results_list.innerHTML += `
      <li>
        Id: ${data[i].id} <br/>
        Title: ${data[i].title}
      </li>
      </br>`;
    }
  });

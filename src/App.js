import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import NavAppBar from './NavBar';
import Spinner from './Spinner';
import Repositories from './Repositories'

import './App.css';


const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-learn-react") {
      repositories(first: 20) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
            stargazers {
              totalCount
            }
            object(expression:"master") {
              ... on Commit {
                history {
                  totalCount
                  nodes {
                    author {
                      name
                      avatarUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


const App = () => (
  <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
    {({ data: { organization }, loading }) => {
      if (loading || !organization) {
        return <Spinner />
      }

      return (
        <>
          <NavAppBar/>
          <Repositories repositories={organization.repositories} />
        </>
      );
    }}
  </Query>
);

export default App;

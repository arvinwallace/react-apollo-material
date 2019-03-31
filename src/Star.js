import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import ActionButton from './ActionButtons'

const STAR_REPOSITORY = gql`
  mutation($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;


const Star = ({ id }) => (
  <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
    {starRepository => (
      <div onClick={starRepository}>
        <ActionButton star={true} type="button"  />
      </div>
    )}
  </Mutation>
);

export default Star
import React from 'react'
import Star from './Star'
import SimpleCard from './Card'
import ActionButton from './ActionButtons'
import BadgeBar from './BadgeBar'


const topFive = (ray) => {
  const group = ray.reduce((acc,node) => {
    const author = node.author.name;
    if(acc[author]){ acc[author]['commits'] ++}
    else {acc[author] = {commits : 1, avatar : node.author.avatarUrl}}
    return acc
  },{})
  const rayGroup = Object.keys(group).map(key => {
    return {author: key, commits: group[key]['commits'], avatar: group[key]['avatar']}
  })
  return rayGroup.sort((a,b) => b.commits - a.commits).slice(0,5)
}

const RepositoryList = ({
  repositories,
  selectedRepositoryIds,
  toggleSelectRepository,
}) => (
  <ul>
    {repositories.edges.map(({ node }) => {
      const isSelected = selectedRepositoryIds.includes(node.id);
      const commits = node.object.history.totalCount;
      const stars = node.stargazers.totalCount;
      const topContributors = topFive(node.object.history.nodes);
      const rowClassName = ['row'];

      if (isSelected) {
        rowClassName.push('row_selected');
      }
      return (
      
        <li className={rowClassName.join(' ')} key={node.id}>
        <SimpleCard name={node.name} url={node.url}>
        <div className="button-container">
          <Select
            id={node.id}
            isSelected={isSelected}
            toggleSelectRepository={toggleSelectRepository}
          />{' '}
            <ActionButton href={node.url}>
            <a href={node.url}>{node.name}</a>{' '}
            </ActionButton>
            {!node.viewerHasStarred && 
                <Star id={node.id} />
            }
          </div>
          <BadgeBar 
            commits={commits} 
            stars={stars} 
            topFive={topContributors}
          />
        </SimpleCard>
        </li>
      );
    })}
  </ul>
);


const Select = ({ id, isSelected, toggleSelectRepository }) => (
  <div onClick={() => toggleSelectRepository(id, isSelected)}>
    <ActionButton
      select={isSelected ? 'Deselect' : 'Select'}  
    />
  </div>
);

export default RepositoryList;
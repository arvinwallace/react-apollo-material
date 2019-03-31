import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
    marginRight: '5px'
  },
});

function ListAvatar(props) {
  const { classes, topFive } = props;
  return topFive.map((node) => (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={node.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={node.author}
          secondary={
            <React.Fragment>
              <Typography component="span" className={classes.inline} color="textPrimary">
                Commits:
              </Typography>
              {node.commits}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  ) 
  );
}

ListAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListAvatar);
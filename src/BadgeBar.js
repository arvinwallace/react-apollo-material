import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TopDialog from './TopDialog'

const styles = theme => ({
  margin: {
    marginTop: '10px',
    borderRadius: '30px',
    backgroundColor: '#303030'
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

function BadgeBar(props) {
  const { classes, commits, stars, topFive } = props;
  // console.log('tops', topFive)
  return (
    <div>
      <AppBar position="static" className={classes.margin}>
        <Tabs value={0}>
          <Tab
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={commits} max={999}>
                Commits
              </Badge>
            }
          />
          <Tab value={0}
            label={
              <Badge className={classes.padding} color="secondary" badgeContent={stars} max={9999}>
                Stars
              </Badge>
            }
          />
          
            <TopDialog topFive={topFive}/>
        </Tabs>
      </AppBar>
    </div>
  );
}

BadgeBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BadgeBar);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  lor: {
    color: '#f50057'
  }
});

function ActionButton(props) {
  const { classes } = props;
  return (
    <div>
      {props.select &&
        <Fab variant="extended" aria-label="Select" className={[classes.fab, classes.lor]}>
        <NavigationIcon className={classes.extendedIcon} />
          {props.select}
        </Fab>
      }

      {props.href &&
        <Fab variant="extended" aria-label="Select" className={[classes.fab, classes.lor]}>
        <NavigationIcon className={classes.extendedIcon} />
          {props.children}
        </Fab>
      }
      {props.star && 
        <Fab color="secondary" aria-label="star" className={classes.fab}>
          <Icon>star</Icon>
        </Fab>
      }
    </div>
  );
}

ActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionButton);
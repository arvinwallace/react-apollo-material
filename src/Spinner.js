import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styled } from '@material-ui/styles';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const MyCircProg = styled(CircularProgress)({
  color: "#45ca28de",
})

function Spinner(props) {
  const { classes } = props;
  return (
    <div style={{textAlign: "center", paddingTop: "10%"}}>
      <MyCircProg size={200} className={classes.progress} />
    </div>
  );
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spinner);
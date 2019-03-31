import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';

const styles = {
  card: {
    minWidth: 275,
    backgroundColor: "inherit",
    '&:hover': {
      color: "white",
   },

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  words: {
    color: 'inherit'
  },
  title: {
    fontSize: 14,
    color: '#888'
  },
  pos: {
    marginBottom: 12
  },
};

function SimpleCard(props) {
  const { classes, name, url } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={[classes.title, classes.words]} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography  className={classes.words} variant="h5" component="h2">
        {name}
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
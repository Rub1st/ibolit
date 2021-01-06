import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import { Assistant } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: 520,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ProvideHistoryItem = ({el}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {el.created_at}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {el.count * el.product.price} б. р.
        </Typography>
        <Typography variant="body2" component="p">
          {el.product.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" component="p">
          {el.count} шт.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Assistant/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProvideHistoryItem
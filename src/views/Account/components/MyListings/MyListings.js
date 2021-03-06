import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Button,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  btnstyle: {
    marginLeft: 'auto',
  },
  activeInactive: {
    border: '1px solid black',
    borderRadius: 5
  },
  price: {
    textAlign: 'right',
    paddingRight: 35
  },
  productImg: {
    height: 80,
    width: 80,
  },
  productDetail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    textAlign: 'center'
  },
  description: {
    paddingLeft: 20,
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const product = {
    avatar: '/images/products/product_4.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <Grid container>
            <Grid item md={8} xs={12}>
            <Typography
              gutterBottom
              variant="h2"
            >
              My Listings
            </Typography>
            </Grid>  
            <Grid item md={4} xs={12}>
            <CardActions className={classes.btnstyle}>
            <div className={classes.activeInactive}>
            <Button
              color="primary"
              variant="text"
            >
              Active
            </Button>
            <Button
              color="primary"
              variant="text"
            >
              Inactive
            </Button>
            </div>
            <Button
              color="primary"
              variant="contained"
              href="/account/newlisting"
            >
              NEW LISTING
        </Button>
        </CardActions>
            </Grid>
          </Grid> 
          
        </div>
      </CardContent>
      <Divider />

      <div>
        <Divider />
        <CardContent>
          <Grid
            container
            className={classes.productDetail}
          >
            <Grid
              className={classes.image}
              item
              md={1}
              xs={12}
            >
            <img className={classes.productImg} src={product.avatar} alt="product" />
            </Grid>
            <Grid
              className={classes.description}
              item
              md={8}
              xs={12}
            >
            <Typography
              gutterBottom
              variant="h3"
              >Black suit</Typography>

              <Typography
              gutterBottom
              variant="h6"
              color="textSecondary"
              >HUGO BOSS</Typography>
              
              <Typography
              gutterBottom
              variant="h5"
              >Medium | Practically New | Chic | Black</Typography>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
            >
            <Typography
              className={classes.price}
                gutterBottom
                variant="h4"
                color="primary"
                >$20 / day</Typography>
                <CardActions className={classes.btnstyle}>
                    <Button
                      className={classes.uploadButton}
                      color="primary"
                      variant="text"
                    >
                      MAKE IT INACTIVE
                    </Button>
                    <Button
                      // className={classes.uploadButton}
                      color="primary"
                      variant="text"
                    >
                      Update
                    </Button>
                </CardActions> 

            </Grid>
          </Grid>
        </CardContent>
      </div>
      <Divider />

    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;

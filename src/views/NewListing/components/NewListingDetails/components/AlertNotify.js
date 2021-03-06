import React, {useState} from 'react';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {},
    alertNotify: {
        backgroundColor: 'lightgreen',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 100,
        right: 0,
        width: 280,
        border: '1px solid black',
        borderRadius: 5,
        padding: 10
    },
    successicon: {
        fill: 'green',
        marginRight: 10
    }
}));

const AlertNotify = (props) => {
  const classes = useStyles();
  const [alert, setAlert] = useState(true);

    setTimeout(() => {
        setAlert(false)
    }, 3000);
    
  return (
      <div className={classes.wrapper}>
        <Slide direction="left" in={alert} mountOnEnter unmountOnExit>
            <div className={classes.alertNotify}>
            <CheckCircleRoundedIcon className={classes.successicon} />
            <div>
                <Typography variant="h6">Yay!</Typography>
                <Typography variant="h6">Your listing has been created!</Typography>
            </div>
        </div>
        </Slide>
      </div>
  );
}

export default AlertNotify;










// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/styles';
// import { Alert } from '@material-ui/lab';
// import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
// import { Typography } from '@material-ui/core';



// const useStyles = makeStyles(theme => ({
    // root: {},
    // alertNotify: {
    //     backgroundColor: 'lightgreen',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     position: 'absolute',
    //     top: 100,
    //     right: 0,
    //     width: 280,
    //     border: '1px solid black',
    //     borderRadius: 5,
    //     padding: 10
    // },
    // successicon: {
    //     fill: 'green',
    //     marginRight: 10
    // }
// }));

// const AlertNotify = props => {
//   const { className, ...rest } = props;

//   const classes = useStyles();

//   return (
    //   <div className={classes.alertNotify}>
    //     <CheckCircleRoundedIcon className={classes.successicon} />
    //     <div>
    //         <Typography variant="h6">Yay!</Typography>
    //         <Typography variant="h6">Your listing has been created!</Typography>
    //     </div>
    //   </div>

//   );
// };

// AlertNotify.propTypes = {
//   className: PropTypes.string
// };

// export default AlertNotify;

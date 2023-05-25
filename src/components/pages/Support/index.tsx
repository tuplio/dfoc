import { Typography } from '@mui/material';

import classes from './support.module.css';
import cashapp from '../../../assets/cash-app.png';
import eth from '../../../assets/eth.png';

const Support = () => {

    return (
        <div className={classes.root}>
            <div className={classes.donationContainer}>
                <div className={classes.donationItemContainer}>

                    <div className={classes.donationLabelContainer}>
                        <img className={classes.logo} src={cashapp} />
                        <Typography variant='h3'>
                            Cashapp
                        </Typography>
                    </div>

                    <Typography variant='h6'>
                        $RupleTuplio
                    </Typography>

                </div>
                <div className={classes.donationItemContainer}>
                    <div className={classes.donationLabelContainer}>
                        <img className={classes.logo} src={eth} />
                        <Typography variant='h3'>
                            Ethereum
                        </Typography>
                    </div>

                    <Typography variant='h6'>
                        0xD64C5BC7556E5b51c199cC387F194fcf40846AC0
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default Support;
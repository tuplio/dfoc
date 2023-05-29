import classes from './uploaded.module.css';
import uploaded from '../../../assets/uploaded.png';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Uploaded = () => {
    return (
        <div className={classes.root}>
            <img className={classes.image} src={uploaded} />
            <Typography className={classes.text} variant='h4'>
                {'Image finalized. Thanks for using deepnudes.click! Please visit our '}
                <Link to='/support' style={{ color: '#6834d7' }}>
                    Support page
                </Link>
                {' if you enjoyed this product.'}
            </Typography>
        </div>
    );
}

export default Uploaded;
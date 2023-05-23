import { Button, Typography } from '@mui/material';
import backdrop from '../../../assets/home-backdrop-1.jpg';

import classes from './home.module.css';

interface HomeProps {
    
}
 
const Home = ({ }: HomeProps) => {
    return ( 
        <div className={classes.root}>
            <div className={classes.greetingContainer}>
                <div className={classes.greetingTextContainer}>
                    <Typography variant='h3'>
                        Welcome to deepnudes.click!
                    </Typography>
                    <Typography variant='h4'>
                        Powered by the open-source Deepnude algorithm, this is your one stop shop for making your own deepnudes!
                    </Typography>
                </div>
                <img className={classes.backdrop1} src={backdrop}></img>
            </div>
            <div>
                
            </div>
        </div>
    );
}
 
export default Home;
import { useTheme } from '@mui/material/styles';

import classes from './uploading.module.css';
import { Box, LinearProgress } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';


const PROGRESS_MULTIPLIER = 3;


const Uploading = () => {
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);

    const progressRef = useRef(() => {});

    const theme = useTheme();
    const navigate = useNavigate()

    useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                // navigate('/')
            } else {
                const progressDelta = Math.random() * PROGRESS_MULTIPLIER;
                const bufferDelta = Math.random() * PROGRESS_MULTIPLIER;
                setProgress(progress + progressDelta);
                setBuffer(progress + progressDelta + bufferDelta);
            }
        };
    });

    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 500);
    
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={classes.root} style={{ backgroundColor: theme.palette.secondary.main }}>
            <div className={classes.adContainer}>
            </div>
            <Box className={classes.progressContainer} sx={{ height: '2rem', width: '90%' }}>
                <LinearProgress className={classes.progressIndicator}
                    color='warning'
                    variant='buffer'
                    value={progress}
                    valueBuffer={buffer}
                />
            </Box>
        </div>
    );
};

export default Uploading;
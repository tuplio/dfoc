import { useTheme } from '@mui/material/styles';

import classes from './uploading.module.css';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { getPhrases, getRandomNum } from './phrases';


const STARTING_PROGRESS_MULTIPLIER = 5;


const phrases = getPhrases();


const Uploading = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [buffer, setBuffer] = useState(10);
    const [progressMultiplier, setProgressMultiplier] = useState(STARTING_PROGRESS_MULTIPLIER);

    const progressRef = useRef(() => {});

    const theme = useTheme();
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(
            () => setPhraseIndex(prev => ++prev % phrases.length),
            getRandomNum(3000, 8000)
        );

        return () => clearInterval(interval);
    }, [setPhraseIndex, getRandomNum, phrases.length]);

    useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                navigate('/');
            }
            
            if (progress > 99.9) {
                setProgressMultiplier(0.0001);
            } else if (progress > 99.5) {
                setProgressMultiplier(0.001);
            } else if (progress > 99) {
                setProgressMultiplier(0.01);
            } else if (progress > 95) {
                setProgressMultiplier(0.1);
            } else if (progress > 90) {
                setProgressMultiplier(1);
            } else if (progress > 75) {
                setProgressMultiplier(2);
            } else if (progress > 50) {
                setProgressMultiplier(3);
            } else if (progress > 25) {
                setProgressMultiplier(4);
            }

            const progressDelta = Math.random() * progressMultiplier;
            const bufferDelta = Math.random() * progressMultiplier;
            setProgress(progress + progressDelta);
            setBuffer(progress + progressDelta + bufferDelta);
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
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9262369645660806" crossOrigin="anonymous" />
            </div>
            <Box className={classes.progressContainer} sx={{ height: '2rem', width: '90%' }}>
                <LinearProgress className={classes.progressIndicator}
                    color='warning'
                    variant='buffer'
                    value={progress}
                    valueBuffer={buffer}
                />
                <Typography className={classes.progressLabel} variant="body2" color="text.secondary">
                    {`${progress.toFixed(2)}%`}
                </Typography>
            </Box>
            <Typography variant="h5" color="text.secondary">{ phrases[phraseIndex] }</Typography>
        </div>
    );
};

export default Uploading;
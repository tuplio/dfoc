import classes from './home.module.css';
import { useEffect, useRef, useState } from 'react';


const Dropzone = () => {
    const dropzoneRef = useRef<HTMLDivElement>(null);

    const [dragActive, setDragActive] = useState(false);
    const [dropzoneClassName, setDropzoneClassName] = useState(classes.dropzone);

    const onDrop = () => {};

    const onDragOver = () => setDragActive(true);
    const onDragLeave = () => setDragActive(false);

    useEffect(() => {
        setDropzoneClassName(`${classes.dropzone} ${
            dragActive
                ? classes.validDragOver
                : ''
        }`);
    }, [classes, dragActive]);

    return (
        <div ref={ dropzoneRef } className={ dropzoneClassName }
            onDrop          ={ onDrop }
            onDragOver      ={ onDragOver }
            onDragLeave     ={ onDragLeave }
        >
            {dragActive ? "Drop it like it's hot!" : 'Click me or drag a file to upload!'}
        </div>
    );
};

export default Dropzone;

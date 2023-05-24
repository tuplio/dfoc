import { useEffect, useRef, useState, DragEvent as rDragEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { UPLOADING_PATH } from '../../../Router';

import classes from './home.module.css';

interface ValidationT {
    valid: boolean,
    message: string,
}

const validateFiles = (files: FileList): ValidationT => {
    if (files.length < 1) {
        return {
            valid: false,
            message: 'Please upload a valid file.',
        } as ValidationT
    }

    if (files.length > 1) {
        return {
            valid: false,
            message: 'Please upload only a single file.',
        } as ValidationT
    }

    const re = /(\.jpg|\.jpeg|\.png|\.tiff)$/i;
    if (!re.exec(files[0].name)) {
        return {
            valid: false,
            message: 'Please upload one of the following formats: jpg, jpeg, png, tiff',
        } as ValidationT
    }

    return {
        valid: true,
        message: '',
    } as ValidationT
}

const Dropzone = () => {
    const dropzoneRef = useRef<HTMLDivElement>(null);

    const [dragActive, setDragActive] = useState(false);
    const [dropzoneClassName, setDropzoneClassName] = useState(classes.dropzone);
    const [dropValidation, setDropValidation] = useState<ValidationT | null>(null);
    const [dropzoneMessage, setDropzoneMessage] = useState<string>('Click Me or drag a file to upload');

    const navigate = useNavigate();

    const onDrop = (e: rDragEvent) => {
        e.preventDefault();

        setDragActive(false);

        const validation = validateFiles(e.dataTransfer.files);
        if (validation.valid) {
            navigate(UPLOADING_PATH);
        }

        setDropValidation(validation);

    };

    const onDragOver = (e: rDragEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setDragActive(true);
    }
    const onDragLeave = () => setDragActive(false);

    useEffect(() => {
        if (dragActive) {
            setDropzoneMessage('Drop it like its hot!');

            setDropzoneClassName(`
                ${ classes.dropzone }
                ${ dragActive ? classes.validDragOver : '' }
            `);
        } else if (dropValidation && !dropValidation.valid) {
            setDropzoneMessage(dropValidation.message);

            setDropzoneClassName(`
                ${ classes.dropzone }
                ${ dropValidation ? (!dropValidation.valid && classes.invalidDrop) : '' }
            `);
        }

        if (dropValidation && !dropValidation.valid) {

        }
    }, [classes, dragActive, dropValidation]);

    return (
        <div ref={ dropzoneRef } className={ dropzoneClassName }
            onDrop          ={ onDrop }
            onDragOver      ={ onDragOver }
            onDragLeave     ={ onDragLeave }
        >
            { dropzoneMessage }
        </div>
    );
};

export default Dropzone;

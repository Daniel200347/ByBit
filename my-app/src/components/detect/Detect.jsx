import React from 'react';
import { detect } from 'detect.js';

const DetectOS = () => {
    const os = detect.parse(navigator.userAgent).os.family;

    return (
        <div>
            <h1>Detected Operating System</h1>
            <p>Your operating system is: {os}</p>
        </div>
    );
};

export default DetectOS;

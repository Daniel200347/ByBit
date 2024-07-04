// DetectButton.js
import React, {useState, useEffect} from 'react';
import {detect} from 'detect.js';

const DetectButton = () => {
    const [isWindows, setIsWindows] = useState(false);
    const [osName, setOsName] = useState('');

    useEffect(() => {
        const os = detect.parse(navigator.userAgent).os.family;
        setOsName(os);
        setIsWindows(os.includes('Windows'));
    }, []);

    return (
        <div>
            <p>Detected OS: {osName}</p>
            <button disabled={!isWindows}>
                {isWindows ? 'Active' : 'Disabled'}
            </button>
        </div>
    );
};

export default DetectButton;

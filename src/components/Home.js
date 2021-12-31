import React, { useState } from 'react';
import { useSessionStorage } from '../hooks/useSessionStorage';

function Home() {

    const [termsAccepted, setTermsAccepted] = useState(
        useSessionStorage('terms', false)
    );
    if (!termsAccepted) {
        return (
            <>
                <h1>Terms of Service</h1>
                <p>These are the terms for using the application.</p>
                <button
                    onClick={() => {
                        setTermsAccepted(true);
                    }}
                >
                    I accept
                </button>
            </>
        );

    }

    return (
        <div>This is the home page</div>
    )
}

export default Home;

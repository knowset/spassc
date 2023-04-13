import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useCallback, useState } from 'react';

interface AdminProps {
    update?: boolean;
    delete?: boolean;
    toggleUpdate?: any;
    toggleDelete?: any;
}

export default function App({ Component, pageProps}: AppProps) {
    const [updateState, setUpdateState] = useState(false);
    const [deleteState, setDeleteState] = useState(false);

    const toggleUpdateState = useCallback(() => {
        setUpdateState((current) => !current);
    }, []);

    const toggleDeleteState = useCallback(() => {
        setDeleteState((current) => !current);
    }, []);

    const adminProps = {
        update: updateState,
        delete: deleteState,
        toggleUpdate: toggleUpdateState,
        toggleDelete: toggleDeleteState
    } as AdminProps;

    return (
        <>
        <Component {...pageProps} {...adminProps} />
        </>
    );
}

import { useEffect, useState } from "react";

export const useCreatePost = ({data}: any) => {
    const [engine, setEngine] = useState(null);
    const [db, setDB] = useState(null);
    const [windowWatcher,setWindowWatcher] = useState(false);

    useEffect( () => {
        if( window ) {
            console.log("Running in a browser, checking for loadSQL" )
      
            const timer = setInterval( () => {
                console.log( "Polling..." );

                // @ts-ignore
                if( window.loadSQL ) {
                    console.log("Clearing timer")
                    clearInterval( timer );
                    setWindowWatcher(true)
                }
            }, 500)
        }
    }, [])

    useEffect( () => {
        console.log( "Looking for loadSQL")
        // @ts-ignore
        if( window.loadSQL ) {
            console.log( "Should try initSQLJS")
            // @ts-ignore
            window.loadSQL().then( (db) => {
                console.log( "I have the database" )
                setEngine( db )
            })
        }
        return () => {}
    }, [windowWatcher] )

    useEffect( () => {
        if (engine && data) {
            // setDB( new engine.Database(new String(data)) as any)
        }
    })
} 
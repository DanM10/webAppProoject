//_app.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp ({Component, pageProps}){
    return (
        <>
            <Component{...pageProps}/>
        </>
    )
}
export default MyApp

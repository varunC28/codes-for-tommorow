import React, { useEffect, useState } from "react";

const Loading = ({children}) => {
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setTimeout(() => {
            setLoading(false);
        },5000);
    },[]);

    if(loading) {
        return <div>Loading..</div>
    }
    return children;
}

export default Loading;
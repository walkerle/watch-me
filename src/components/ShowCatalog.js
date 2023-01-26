import React, {useEffect, useState} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {

    const [shows, setShows] = useState([]);
    const [watchList, setWatchList] = useState([])

    useEffect(() => {
        fetch("http://localhost:8081/shows")
        .then(resp => resp.json())
        .then(data => {
            setShows(data)
    })
}, [])


    return(
        <>
            <MyWatchList watchList={watchList}/>
            <hr/>
            <ShowList shows={shows} />
        </>
    );
}

export default ShowCatalog;
import React from 'react';
import 

function MyWatchList({watchList}) {

    const showCards = watchList.map(show => {
        return <ShowCard key={show.id} show={show}/>
    })
    return(
        <div className="watch-list-container">
            {showCards}
        </div>
    )
}

export default MyWatchList;
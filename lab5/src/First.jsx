import React from 'react'



export default function First() {
    function canIGoOutNow() {
        const p1 = getWeatherFromMeteo();
        p1.then(result => {
            console.log("can I go out now?", result);
        })
    }

    function getCurrentTime(result, seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result);
            }, 1000 * seconds);
        })
    }


    function getMyLocation(result, seconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(result);
            }, 1000 * seconds);
        })
    }

    function getWeatherFromMeteo() {
        // const p1 = getCurrentTime(true, 2);
        // const p2 = getMyLocation(true, 3);
        return Promise.all([
            getCurrentTime(true, 2),
            getMyLocation(true, 3)
        ])
    }

    return (
        <div>
            <button onClick={canIGoOutNow}>
                click me
            </button>
        </div>
    )
}
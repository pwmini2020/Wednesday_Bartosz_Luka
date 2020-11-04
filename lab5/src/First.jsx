import React from 'react'



export default function First() {
    function canIGoOutNow() {
        Promise.race([
            getWeatherFromMeteo(),
            getWeatherFromOnet(),
            getWeatherFromGoogle()
        ]).then(result => {
            console.log("can I go out now?", result);
        }).catch(result=>{
            console.log("catch", result);
        })
    }

    function getCurrentTime(result, seconds, source, shouldFail) {
        console.log(source, "getCurrentTime start");
        return new Promise((resolve, reject) => {
            console.log(source, "getCurrentTime before timeout")
            setTimeout(() => {
                if (shouldFail) {
                    console.log(source, "getCurrentTime in timeout FAILED")
                    reject({ result, source });
                }
                else {
                    console.log(source, "getCurrentTime in timeout")
                    resolve({ result, source });
                }
            }, 1000 * seconds);
        })
    }


    function getMyLocation(result, seconds, source) {
        console.log(source, "getMyLocation start");
        return new Promise((resolve, reject) => {
            console.log(source, "getMyLocation before timeout")
            setTimeout(() => {
                console.log(source, "getMyLocation in timeout")
                resolve({ result, source });
            }, 1000 * seconds);
        })
    }

    function getWeatherFromMeteo() {
        return Promise.all([
            getCurrentTime(true, 2, "Meteo"),
            getMyLocation(true, 3, "Meteo")
        ])
    }

    function getWeatherFromOnet() {
        return Promise.all([
            getCurrentTime(true, 4, "Onet"),
            getMyLocation(true, 2, "Onet")
        ])
    }

    function getWeatherFromGoogle() {
        return Promise.all([
            getCurrentTime(true, 1, "Google", true),
            getMyLocation(true, 1, "Google")
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
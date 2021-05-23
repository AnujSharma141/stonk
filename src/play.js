#!/usr/bin/env node

import Control from 'spotify-control';

const spotify = new Control({
    token: "BQBVhpcXPJAMnqCE9t-xbypP7MWE9lKncHlTDNWoVEIz6u9kqF-MEPhSurx9b6R1l61ukzQRGPsFHUpPnYO-8xdF0gextfOuyU7dyz_HbqCYE1mQmhFhnr6PkhNwzpOZ-5zxMkbT04hDEujRxGRga7E3tgalzTGcaY1uXE7HeqafeX8uvJk4dPJiyGpF4fEoh4qsqMLkJeKcgF5zZ-KuNi04zLj52tS2jaCj9FqBd--kpp5bvetaqNHgWdJnEZLAvqdXYvJX8MkEDNnqxsmdZ5PeSgppY6rzEtTqlt2H"
})

spotify.connect().then(v => {
    console.log("Started");
    spotify.play("spotify:track:4LYt31Tg51qsQqWOaZn4C6", "spotify:artist:5byg90wTxATnhB6kK253DF").then(v => {
        console.log("Played");
        spotify.startListener(["play", "pause"]).on("event", data => {
            console.log(JSON.stringify(data, null, 4));
        });
    }, err => {
        console.error(err);
    });
}, err => {
    console.error("Failed to start: " + err.message);
})
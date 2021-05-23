#!/usr/bin/env node

const spotifyApi = require('spotify-web-api-node')

const spotify = new spotifyApi

spotify.setAccessToken('BQBVhpcXPJAMnqCE9t-xbypP7MWE9lKncHlTDNWoVEIz6u9kqF-MEPhSurx9b6R1l61ukzQRGPsFHUpPnYO-8xdF0gextfOuyU7dyz_HbqCYE1mQmhFhnr6PkhNwzpOZ-5zxMkbT04hDEujRxGRga7E3tgalzTGcaY1uXE7HeqafeX8uvJk4dPJiyGpF4fEoh4qsqMLkJeKcgF5zZ-KuNi04zLj52tS2jaCj9FqBd--kpp5bvetaqNHgWdJnEZLAvqdXYvJX8MkEDNnqxsmdZ5PeSgppY6rzEtTqlt2H')

spotify.pause()
.then(()=> console.log('Playback paused')
 , err => console.log('Something went wrong!', err))
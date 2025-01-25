// script for page and player

function playSong(songPath, element) {
    const audio = document.getElementById('audio');
    const audioSource = document.getElementById('audioSource');
    audioSource.src = songPath;
    audio.load();
    audio.play();

    // Remove 'selected' class from all songs
    const songs = document.querySelectorAll('.song');
    songs.forEach(function(song) {
        song.classList.remove('selected');
    });

    // Add 'selected' class to the clicked song
    element.classList.add('selected');
}
// Obtener todos los elementos de audio en la página
const audios = document.querySelectorAll('audio');

// Agregar un evento para cada elemento de audio
audios.forEach(audio => {
    audio.addEventListener('play', () => {
        // Pausar todos los demás audios cuando se reproduce uno
        audios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});

const tracks = [
    { url: 'track/Ciara, Chamillionaire – Get Up Main Version.mp3', cover: 'track/img1.jpg', name: 'Ciara, Chamillionaire – Get Up Main Version' },
    { url: 'track/Ne-Yo – One In A Million.mp3', cover: 'track/img2.jpg', name: 'Ne-Yo – One In A Million' },
    { url: 'track/Diddy, Keyshia Cole – Last Night.mp3', cover: 'track/img3.jpg', name: 'Diddy, Keyshia Cole – Last Night' }
  ];
  
  let currentTrackIndex = 0;
  let isPlaying = false;
  const audio = new Audio();
  const cover = document.getElementById('cover');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const nextBtn = document.getElementById('nextBtn');
  const trackList = document.getElementById('trackList');
  
  // Load the initial track
  function loadTrack(index) {
    audio.src = tracks[index].url;
    cover.src = tracks[index].cover;
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
  }
  
  // Toggle play/pause
  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
      playPauseBtn.textContent = 'Play';
    } else {
      audio.play();
      playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
  }
  
  // Play the next track
  function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    togglePlayPause();
  }
  
  // Set up event listeners
  playPauseBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', playNextTrack);
  trackList.addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
      currentTrackIndex = parseInt(e.target.getAttribute('data-index'));
      loadTrack(currentTrackIndex);
      togglePlayPause();
    }
  });
  
  // Initialize the player
  loadTrack(currentTrackIndex);
  
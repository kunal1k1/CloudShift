function updateClock() {
  const now = new Date();

  // Time
  const hrs = String(now.getHours()).padStart(2, '0');
  const mins = String(now.getMinutes()).padStart(2, '0');
  const secs = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hrs}:${mins}:${secs}`;

  // Date
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  document.getElementById('date').textContent = `${day}-${month}-${year}`;
}

setInterval(updateClock, 1000);
updateClock();

// Video sync with real time (manual control)
function syncVideoTime() {
  const video = document.getElementById('bg-video');
  const now = new Date();

  const start = new Date(now);
  start.setHours(7, 20, 0, 0);
  if (now < start) start.setDate(start.getDate() - 1);

  const totalSeconds = 86399;
  const videoDuration = 22.0;
  const secondsPassed = (now - start) / 1000;

  const currentVideoTime = (secondsPassed % totalSeconds) * (videoDuration / totalSeconds);

  video.pause(); // force manual syncing
  video.currentTime = currentVideoTime;
}

setInterval(syncVideoTime, 1000);
document.getElementById('bg-video').addEventListener('loadeddata', syncVideoTime);

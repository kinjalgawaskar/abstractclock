const video = document.getElementById('my-video');

const videoSources = [
  'path/to/day.mp4',
  'path/to/night.mp4',
  'path/to/day.mp4'
];

let index = 0;
setInterval(() => {
  video.src = videoSources[index];
  index = (index + 1) % videoSources.length;
}, 5000);

const cells = document.querySelectorAll('.grid-container');

for (let i = 0; i < cells.length; i++) {
  const x = i % 12 + 1;
  const y = Math.floor(i / 12) + 1;
  cells[i].textContent = `${x},${y}`;
  cells[i].classList.add('has-coordinate');
}

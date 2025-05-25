const scrollContainer = document.getElementById('scrollContainer');
const hole = document.getElementById('hole');

  // Starting trapezoid points (objectBoundingBox coords, 0 to 1)
  const startPoints = [
    {x: 0.793, y: 0},
    {x: 0.914, y: 0.425},
    {x: 0.069, y: 0.425},
    {x: 0.224, y: 0}
  ];

  // End points (full rectangle covering the mask)
  const endPoints = [
    {x: 1, y: 0},
    {x: 1, y: 1},
    {x: 0, y: 1},
    {x: 0, y: 0}
  ];

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }

  scrollContainer.addEventListener('scroll', () => {
    const scrollTop = scrollContainer.scrollTop;
    const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    const progress = Math.min(scrollTop / maxScroll, 1);

    const points = startPoints.map((p, i) => {
      const ep = endPoints[i];
      return `${lerp(p.x, ep.x, progress)} ${lerp(p.y, ep.y, progress)}`;
    }).join(' ');

    hole.setAttribute('points', points);
  });
  
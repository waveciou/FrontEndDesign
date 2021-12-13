(function () {
  const $overlay = $('.overlay');
  const overlayWidth = $overlay.innerWidth();
  const overlayHeight = $overlay.innerHeight();
  const $ball = $('.ball');
  let percentX = 0;
  let percentY = 0;
  let mouseX, mouseY;

  function setPosition(positionX, positionY) {
    $ball.css({
      '-webkit-transform': `translate(${positionX}%, ${positionY}%)`,
      'transform': `translate(${positionX}%, ${positionY}%)`
    });
  }

  $overlay.on('mousemove', function (e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;

    percentX = (Math.floor((mouseX / overlayWidth) * 100) - 50) * 2;
    percentY = (Math.floor((mouseY / overlayHeight) * 100) - 50) * 2;

    console.log(percentX, percentY)
    setPosition(percentX, percentY);
  });
})()
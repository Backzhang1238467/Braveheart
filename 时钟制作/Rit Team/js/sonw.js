$(function () {
  var generateCanvasImageUrl = function generateCanvasImageUrl() {
  var _window = window,
      innerHeight = _window.innerHeight,
      innerWidth = _window.innerWidth;

  var pixels = innerHeight / 1 * (innerWidth / 1);
  var $canvas = document.createElement('canvas');
  var context = $canvas.getContext('2d');
  $canvas.height = innerHeight / 1;
  $canvas.width = innerWidth / 1;
  for (var pixel = 0; pixel < pixels; pixel++) {
    var x = pixel % innerWidth;
    var y = Math.floor(pixel / innerWidth);
    var size = Math.floor(Math.random() * 3 + 1);
    context.fillStyle = '#fff';
    if (Math.random() > 0.9999) context.fillRect(x, y, size, size);
  }
  return $canvas.toDataURL();
};

var $snowSlides = document.querySelectorAll('.snow');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = $snowSlides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var $slide = _step.value;
    $slide.style.background = 'url(' + generateCanvasImageUrl() + ')';
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
})

var React = require('react');
var raf = require('raf');

module.exports = React.createClass({
  propTypes: {
    // The start position of the bubble
    origin: React.PropTypes.shape({
      // Assume percentages
      bottom: React.PropTypes.string,
      right: React.PropTypes.string
    })
  },

  // Private props
  // The right and bottom percentages as numbers
  _right: null,
  _bottom: null,
  _vx: 0,
  _vy: null,
  _max_bottom: null,

  // If the bubble should stop
  _stop: false,

  /**
   * Calculates the bubble's opacity.
   * @return {Number} The opacity between 0 and 1.
   */
  _getOpacity: function() {
    var opacity = 1;
    var bot = this._bottom;
    if (bot < 10) {
      opacity = (bot - 5) / 5;
    } else if (bot > this._max_bottom) {
      opacity = (10 - (bot - this._max_bottom)) / 10;
    }
    return 0.3 * Math.max(0, opacity);
  },

  /**
   * Resets the max bottom. The max bottom value before the bubble fades.
   */
  _resetMaxBottom: function() {
    this._max_bottom = Math.random() * 30 - 15 + 80;
  },

  /**
   * Resets the vertical speed of the bubble.
   */
  _resetVy: function() {
    this._vy = Math.random() * 0.1 + 0.1;
  },

  componentDidMount: function() {
    var self = this;
    // Randomly delay between 0 and 10 sec
    setTimeout(function() {
      var domNode = self.refs.img.getDOMNode();
      var originRight = +self.props.origin.right.substring(0, self.props.origin.right.length - 1);
      var originBottom = +self.props.origin.bottom.substring(0, self.props.origin.bottom.length - 1);
      self._right = originRight;
      self._bottom = originBottom;
      self._resetVy();
      self._resetMaxBottom();
      raf(function tick(newtime) {
        if (!self._stop) {
          raf(tick);
        }

        // Animate
        // Reset if necessary
        if (self._bottom > 95) {
          self._bottom = originBottom;
          self._right = originRight;
          self._vx = 0;
          self._resetVy();
          self._resetMaxBottom();
        }

        // Update
        self._vx += (Math.random() - 0.5) / 100;
        self._bottom += self._vy;
        self._right -= self._vx;
        var opacity = self._getOpacity();

        // Set styles
        domNode.style.right = self._right + '%';
        domNode.style.bottom = self._bottom + '%';
        domNode.style.opacity = opacity;
      });
    }, Math.random() * 10000);
  },

  render: function() {
    return (
      <img ref='img' className='Bubble' src='images/bubble.svg' />
    );
  }
});

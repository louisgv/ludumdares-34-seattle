var React = require('react');
var raf = require('raf');

module.exports = React.createClass({
  /**
   * The water height varies on the width of the browser.
   * Update the boat height off the water on load and when the window resizes.
   */
  _updateBoatHeightOffWater: function() {
    var browserWidth = window.innerWidth;
    this.refs.Boat.getDOMNode().style.bottom = (Math.pow(browserWidth, 2) / 100000) + 'px';
  },

  componentDidMount: function() {
    var self = this;
    self._updateBoatHeightOffWater();
    window.addEventListener('resize', function(e) {
      self._updateBoatHeightOffWater();
    });
  },

  render: function() {
    return (
      <div className='Boat' ref='Boat'>
        <div className='boat-container'>
          <img ref='img' className='boat-img' src='images/boat.svg' />
        </div>
      </div>
    );
  }
});

var React = require('react');
var Button = require('../button/button.jsx');

module.exports = React.createClass({
  render: function() {
    var d = new Date();
  	var n = d.getHours();
    var time = "SplashSection page-section";
  	if (n >= 20 || n < 6)
  	  time += " night";
  	else if (n > 16 && n < 20)
  	  time += " evening";
  	else
  	  time += " morning";

    return (
      <section className={time}>
        <img className='skyline' src='images/skyline.svg' />
        <div className='center'>
          <img className='logo' src='images/logo.svg' />
          <h3 className='subtitle date'>October 17-18, 2015</h3>
          <h4 className='subtitle location'>UW, Seattle</h4>
        </div>
        <ul className='clouds'>
          <img className='cloud form1' src='images/cloud1.svg' />
          <img className='cloud form2' src='images/cloud2.svg' />
          <img className='cloud form3' src='images/cloud3.svg' />
        </ul>
        <ul className='planes'>
          <img className='plane' src='images/plane.svg' />
        </ul>
      </section>
    );
  }
});

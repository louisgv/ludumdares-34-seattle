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

        <img className='skyline' src='images/skyline.svg'/>
        <div className='center'>
          <a href="https://www.amazon.com/" target='_blank'>
            <img className='amz' src='images/amazon.png'/>
          </a>
          <h4>presents</h4>
          <a href="http://ludumdare.com/compo/" target='_blank'>
            <img className='logo' src='images/ld-logo.png'/>
          </a>
          <h3 className='subtitle date'>Dec 11-14, 2015</h3>

          <h4 className='subtitle location'>
            <a href="http://www.surfincubator.com/" target='_blank'>
              Surf Incubator, Seattle
            </a>
          </h4>

          <a href='https://www.eventbrite.com/e/ludumdare34-seattle-hackathon-tickets-19650967573' target='_blank'>
            <button className='sign-up'>
                <Button icon='eventbrite'/> |
                Sign up here
            </button>
          </a>

        </div>

        <ul className='clouds'>
          <img className='cloud form1' src='images/cloud1.svg'/>
          <img className='cloud form2' src='images/cloud2.svg'/>
          <img className='cloud form3' src='images/cloud3.svg'/>
        </ul>
        <ul className='planes'>
          <img className='plane' src='images/plane.svg'/>
        </ul>
      </section>
    );
  }
});

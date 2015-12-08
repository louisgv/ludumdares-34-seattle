var React = require('react');
var Button = require('../button/button.jsx');

module.exports = React.createClass({
  scrollToSection: function(sectionName) {
    return function() {
      window.scrollTo(0, 0);
      window.scrollTo(0, document.getElementById(sectionName).getBoundingClientRect().top - 60);
    };
  },

  render: function() {
    // <a target='_blank' href='/apply'><li className='register-button'><Button content='Apply!' flavor={Button.flavors.solid} /></li></a>
    // <a target='_blank' href='/mentor'><li className='register-button'><Button content='Mentor!' flavor={Button.flavors.solid} /></li></a>
    // <a target='_blank' href='/volunteer'><li className='register-button'><Button content='Volunteer!' flavor={Button.flavors.solid} /></li></a>
    return (
      <section className='HeaderSection page-section' id='top'>
        <img className='logo' src='images/ld-logo.png' onClick={this.scrollToSection('top')}/>
        <nav className='nav'>
          <ul className='nav-buttons'>
            <li onClick={this.scrollToSection('schedule')}><Button content='Schedule'/></li>
            <li onClick={this.scrollToSection('faq')}><Button content='FAQ'/></li>
            <li onClick={this.scrollToSection('sponsor')}><Button content='Sponsors'/></li>
          </ul>
        </nav>
        {/*
          <ul className='social-buttons'>
          <li>

          </li>
        </ul>*/}
        <ul className='social-buttons'>
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value="BQ9CVCWMHJHF4"/>
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
        </ul>
      </section>
    );
  }
});

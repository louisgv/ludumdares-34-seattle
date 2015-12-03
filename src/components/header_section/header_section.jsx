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
        <ul className='social-buttons'>

          <li>
            <a href='https://www.eventbrite.com/e/ludumdare34-seattle-hackathon-tickets-19650967573' target='_blank'>
              <Button icon='eventbrite'/>
            </a>
          </li>

        </ul>
      </section>
    );
  }
});

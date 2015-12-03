var React = require('react');

// <a href='http://grant.cm / '><li>Grant Timmerman</li></a>
 // <a href='https://www.linkedin.com/in/skylerkidd'><li>Skyler Kidd</li></a>
// <a href='http://mahirk.com/'><li>Mahir Kothary</li></a>
// <a href='https://twitter.com/naomimusgrave'><li>Naomi Musgrave</li></a>
// <a href='https://twitter.com/NavidAzodi'><li>Navid Azodi</li></a>
// <a href='http://davidcoven.me'><li>David Coven</li></a>
// <a href='http://anwell.me/'><li>Anwell Wang</li></a>
// <a href='http://christopher.su/'><li>Christopher Su</li></a>
// <a href='http://www.lucascolusso.com/'><li>Lucas Colusso</li></a>
// <a href='http://www.linkedin.com/in/MaliaImayama'><li>Malia Imayama</li></a>

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FooterSection page-section'>
        <div className='main footer'>
          <div className='col organizers'>
            <h5 className='title'>Seattle LudumDares 34 Organizers</h5>
            <ul className='organizers-list'>


            </ul>
          </div>
          <div className='col logo'>
            <img className='logo' src='/images/ld-logo.png' />
          </div>
          <div className='col links'>
            <h5 className='title'>Links</h5>
            <ul className='links-list'>
              <li><a href='https://ld34sea.herokuapp.com/'>Seattle LudumDares 34</a></li>
              <li><a href='/code-of-conduct.pdf'>Code of Conduct</a></li>
              /*
              <li><a href='https://github.com/dubhacks/15f'>View Source</a></li>
              <li><a href='mailto:info@dubhacks.co'>Contact Us</a></li>
              <li><a href='https://www.facebook.com/uwhacks'>Facebook</a></li>
              <li><a href='https://twitter.com/dubhacks'>Twitter</a></li>
              <li><a href='https://medium.com/@dubhacks'>Press</a></li>
              */
            </ul>
          </div>
        </div>
        <div className='sub footer'>
          <div className='love'>Made with <span className='heart'>❤</span> in Seattle</div>
          <p className='TOS'>DubHacks is a student event. Our sponsors are sponsors of the event and not of the University of Washington.<br/>There is no implied endorsement of these companies by the University.</p>
          <p className='TOS'>IBM and the IBM logo are trademarks of International Business Machines Corp., registered in many jurisdictions worldwide</p>
        </div>
      </section>
    );
  }
});

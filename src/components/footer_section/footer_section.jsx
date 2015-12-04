var React = require('react');
module.exports = React.createClass({
  render: function() {
    return (
      <section className='FooterSection page-section'>
        <div className='main footer'>
          <div className='col organizers'>
            <h5 className='title'>Seattle LudumDares 34 Organizers</h5>
            <ul className='organizers-list'>
                <a href='https://www.facebook.com/aya.tanaka.71404'  target='_blank'><li>Kawan Wealth</li></a>
                <a href='https://louisgv.github.io' target='_blank'><li>L.A.B</li></a>
                <a href='
                http://www.eviemakesgames.com/' target='_blank'><li>Evie Powell</li></a>

            </ul>
          </div>
          <div className='col logo'>
            <img className='logo' src='/images/ld-logo.png'/>
          </div>
          <div className='col links'>
            <h5 className='title'>Links</h5>
            <ul className='links-list'>
              <li>
                <a href='https://ld34sea.herokuapp.com/'>
                  Seattle LudumDares 34
                </a>
              </li>
              <li>
                <a href='/code-of-conduct.pdf'>Code of Conduct</a>
              </li>
              {/*
              <li><a href='https://github.com/dubhacks/15f'>View Source</a></li>
              <li><a href='mailto:info@dubhacks.co'>Contact Us</a></li>
              <li><a href='https://www.facebook.com/uwhacks'>Facebook</a></li>
              <li><a href='https://twitter.com/dubhacks'>Twitter</a></li>
              <li><a href='https://medium.com/@dubhacks'>Press</a></li>
              */}
            </ul>
          </div>
        </div>
        <div className='sub footer'>
          <div className='love'>Made with
            <span className='heart'>❤</span>
            in Seattle</div>

          {/*<p className='TOS'>
            DubHacks is a student event. Our sponsors are sponsors of the event and not of the University of Washington.<br/>There is no implied endorsement of these companies by the University.
          </p>
          <p className='TOS'>
            IBM and the IBM logo are trademarks of International Business Machines Corp., registered in many jurisdictions worldwide
          </p>*/}

        </div>
      </section>
    );
  }
});

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FAQSection page-section' id='faq'>
        <h2 className='section title'>FAQ</h2>
        <div className='faqs'>
          <ul className='faq'>
            <li className='qa'>
              <h4 className='question'>What is LudumDares?</h4>
              <p>
                This is the local chapter of a tri-annual world wide event where people make a game in 48 or 72 hours.
              </p>
            </li>
            <li className='qa'>
              <h4 className='question'>Who can attend?</h4>
              <p>
                Anyone from absolute beginners to grandmasters. General paths of game creation are programming, art, music, writing, game design, voice acting, and dragon hatchery.
              </p>
            </li>
            <li className='qa'>
              <h4 className='question'>Where is it?</h4>
              <p>
                <a href='https://www.google.com/maps/place/SURF+Incubator/@47.6051062,-122.3351185,18z' target='_blank'>
                  Seattle Surf Incubator | 999 3rd Ave #700, Seattle, WA 98104
                </a>
              </p>
            </li>
            <li className='qa'>
              <h4 className='question'>Rules?</h4>
              <p>
                There are a
                <a href='http://ludumdare.com/compo/rules/' target='_blank'>
                  Jam Rule
                </a>
                and
                <a href='/code-of-conduct' target='_blank'>
                  the Code of Conduct
                </a>
              </p>
            </li>
            <li className='qa'>
              <h4 className='question'>How much does this event cost?</h4>
              <p>Absolutely <b>free</b>. We will provide you WiFi, meals, caffeine, swag, and the workspace.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>Should I come? Why?</h4>
              <p>Just Do it! Because Facebook isn't going to gain you skills, and sleeping at home isn't going to win you any new friends. Now come on. You can do it! One step at a time.</p>
            </li>
          </ul>
          <ul className='faq'>
            <li className='qa'>
              <h4 className='question'>Food?</h4>
              <p>
                + The awesome people at the
                <a href='https://developer.amazon.com/appsandservices/' target='_blank'>
                  <b>Amazon Appstore</b>
                </a>
                are providing lunch, dinner and snacks throughout the jam
              </p>
              <p>
                + There will be omnivore, vegetarian, vegan, pescitarian, and glutton free options. Contact us or let a staff member know if you have dietary restrictions.
              </p>
            </li>
            <li className='qa'>
              <h4 className='question'>Sleep?</h4>
              <p>
                + The hackathon space will be open for the entire jam including overnight. We actually recommend sleeping when you're tired, so that you can give your all to your projects.
              </p>
              <p>
                + Bringing your blankets, pillows, and sleeping bags may help your resting experiences.
              </p>
            </li>
            <li className='qa'>
              <h4 className='question'>What should I bring?</h4>
              <p>
                + Please bring a laptop, charger, and passion! Besides that, a toothbrush, sleeping bag/blanket, and change of clothes is recommended.
              </p>
              <p>
                + Don't forget to bring extra things you may need such as extension cord, mice, headphones, drawing devices, keyboards, chargers, usb cables, ect...
              </p>
            </li>
            {/*
            <li className='qa'>
              <h4 className='question'>I have a different question. Who can I ask?</h4>
              <p>
                Reach out to us at via
                <a href='http://twitter.com/dubhacks'>Twitter</a>,
                <a href='http://facebook.com/uwhacks'>Facebook</a>, or send an email to
                <a href='mailto:info@dubhacks.co'>info@dubhacks.co</a>.
              </p>
            </li>
            */}
          </ul>
        </div>
      </section>
    );
  }
});

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FAQSection page-section' id='faq'>
        <h2 className='section title'>FAQ</h2>
        <div className='faqs'>
          <ul className='faq'>
            <li className='qa'>
              <h4 className='question'>What is DubHacks?</h4>
              <p>DubHacks is the largest collegiate hackathon in the Pacific Northwest. The first of its kind in the Pacific Northwest, student developers and designers gather at the University of Washington in Seattle campus to form teams and build projects with the goal of creating solutions to real-world problems and learning new technologies. This is the second-ever DubHacks event.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>Who can attend?</h4>
              <p>Undergraduate university and high school students of all backgrounds are encouraged to apply and attend DubHacks.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>Where is it?</h4>
              <p>The opening and closing ceremonies will take place in Kane Hall on the University of Washington campus. Hacking and other activities will take place in Johnson Hall and Mary Gates Hall.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>What about travel reimbursement?</h4>
              <p>We will provide travel reimbursement to select participants. Up to $150 travel reimbursement for out-of-state students and up to $50 for in-state participants provided a valid receipt.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>How much does this event cost?</h4>
              <p>Absolutely free. We will provide you WiFi, meals, caffeine, swag, and the workspace.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>What should I build?</h4>
              <p>Anything really. The project is up to you and your team. You have 24 hours to make anything, ranging from web apps, desktop apps, mobile apps, or even hardware.</p>
            </li>
          </ul>
          <ul className='faq'>
            <li className='qa'>
              <h4 className='question'>How big are teams?</h4>
              <p>A team can be as big as 5 people. We'll help with pairing team members if you don't come with one.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>How do applications work?</h4>
              <p>Applications for out-of-state attendees must be submitted by September 18th. All other applications are due October 3rd.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>Will you have hardware prototyping equipment?</h4>
              <p>Yes. Our partners at MLH will have limited stock of Oculus Rifts, Myo arm-bands, Leap Motions, Arduinos, 3D printers and more to give out to hackers for the duration of the hackathon.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>Are we allowed to build on past projects?</h4>
              <p>A hackathon is an experience to build on something completely new within a set amount of time. With that in mind, you cannot work on past projects. Using your own APIs or third-party APIs is alright as long as the project is a fresh start.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>What should I bring?</h4>
              <p>Please bring a laptop, charger, student id and passion! Besides that, a toothbrush, sleeping bag/blanket, and change of clothes is recommended.</p>
            </li>
            <li className='qa'>
              <h4 className='question'>I have a different question. Who can I ask?</h4>
              <p>Reach out to us at via <a href='http://twitter.com/dubhacks'>Twitter</a>, <a href='http://facebook.com/uwhacks'>Facebook</a>, or send an email to <a href='mailto:info@dubhacks.co'>info@dubhacks.co</a>.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
});

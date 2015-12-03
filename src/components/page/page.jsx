var DescriptionSection = require('../description_section/description_section.jsx');
var FAQSection = require('../faq_section/faq_section.jsx');
var FooterSection = require('../footer_section/footer_section.jsx');
var React = require('react');
var HeaderSection = require('../header_section/header_section.jsx');
var ScheduleSection = require('../schedule_section/schedule_section.jsx');
var SplashSection = require('../splash_section/splash_section.jsx');
var SponsorSection = require('../sponsor_section/sponsor_section.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className='Page'>
        <HeaderSection/>
        <SplashSection/>
        <DescriptionSection/>
        <ScheduleSection/>
        <FAQSection/>
        <SponsorSection/>
        <FooterSection/>
      </div>
    );
  }
});

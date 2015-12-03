var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='DescriptionSection page-section'>
        <div className='text'>
          <h2 className='section title'>Educate Yourself</h2>
          <p className='description'>DubHacks is the <strong>largest collegiate hackathon</strong> in the Pacific Northwest. This fall, over 600 top college hackers will gather at the <strong>University of Washington</strong> to build the next generation of innovative software and hardware hacks.</p>
        </div>
        <img className='trees' src='images/trees.svg' />
      </section>
    );
  }
});

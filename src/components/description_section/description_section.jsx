var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='DescriptionSection page-section'>
        <div className='text'>
          <h2 className='section title'>Extra EXP</h2>
          <p className='description'>LudumDares is the
            <strong>largest indie gamejam</strong>
            recoganized globally. This winter, over 100 top game designers will gather at the
            <strong>Seattle Surf Incubator</strong>
            to networking and make awesome games.</p>
        </div>
        <img className='trees' src='images/trees.svg'/>
      </section>
    );
  }
});

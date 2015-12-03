var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='DescriptionSection page-section'>
        <div className='text'>
          <h2 className='section title'>Extra EXP</h2>
          <p className='description'>
            LudumDares is the <b> largest indie gamejam </b>
          recoganized globally. This winter, over 100 top game designers will gather at the <b> Seattle Surf Incubator </b>
            to networking and make awesome games.</p>
        </div>
        <img className='trees' src='images/trees.svg'/>
      </section>
    );
  }
});

var React = require('react');
var Bubble = require('../bubble/bubble.jsx');

module.exports = React.createClass({
  render: function() {
    var bubbleOrigin = {
      right: '18%',
      bottom: '3%'
    };

    return (
      <section className='SponsorSection page-section' id='sponsor'>
        <img className='squid' src='images/squid.svg'/>
        <h2 className='section title'>Sponsors</h2>

        <div className='tiers'>
          <ul className='platinum'>
            <li>
              <a href="http://www.amazon.com/" target="_blank">
                <img ref='img' src='images/company_logos/amazon.png'/>
              </a>
            </li>
          </ul>
          {/*<ul className='platinum'>
            <li>
              <a href="http://microsoft.com" target="_blank"><img ref='img' src='images/company_logos/microsoft.png'/></a>
            </li>
          </ul>
          <ul className='gold'>
            <li>
              <a href="https://developers.google.com/" target="_blank"><img ref='img' src='images/company_logos/Google_2015_logo.svg'/></a>
            </li>
            <li>
              <a href="http://a16z.com/" target="_blank"><img ref='img' src='images/company_logos/a16z.svg'/></a>
            </li>
            <li className='extraSmall'>
              <a href="http://developers.facebook.com" target="_blank"><img ref='img' src='images/company_logos/facebook.png'/></a>
            </li>
            <li>
              <a href="http://qumulo.com/" target="_blank"><img ref='img' src='images/company_logos/qumulo.png'/></a>
            </li>
            <li>
              <a href="http://isilon.com/" target="_blank"><img ref='img' src='images/company_logos/isilon.png'/></a>
            </li>
            <li>
              <a href="http://disneytechjobs.com/" target="_blank"><img ref='img' src='images/company_logos/disney.png'/></a>
            </li>
            <li>
              <a href="http://ibm.com" target="_blank"><img ref='img' src='images/company_logos/btnIBM.png'/></a>
            </li>
            <li>
              <a href="http://concur.com" target="_blank"><img ref='img' src='images/company_logos/logos_concur_horizontal.png'/></a>
            </li>
          </ul>
          <ul className='silver'>
            <li>
              <a href="http://www.taser.com/" target="_blank"><img ref='img' src='images/company_logos/taser.png'/></a>
            </li>
            <li>
              <a href="http://www.amazon.com/" target="_blank"><img ref='img' src='images/company_logos/amazon.png'/></a>
            </li>
            <li className='extraSmall'>
              <a href="http://www.ge.com/" target="_blank"><img ref='img' src='images/company_logos/ge.png'/></a>
            </li>
            <li>
              <a href="http://zillow.com" target="_blank"><img ref='img' src='images/company_logos/ZillowLogo.png'/></a>
            </li>
            <li>
              <a href="http://venmo.com" target="_blank"><img ref='img' src='images/company_logos/venmo.png'/></a>
            </li>
            <li>
              <a href="http://libertymutual.com" target="_blank"><img ref='img' src='images/company_logos/libertymutual.png'/></a>
            </li>
            <li>
              <a href="http://www.clarifai.com/" target="_blank"><img ref='img' src='images/company_logos/Clarifai.png'/></a>
            </li>
          </ul>
          <ul className='bronze'>
            <li>
              <a href="http://epic.com" target="_blank"><img ref='img' src='images/company_logos/epic_logo.png'/></a>
            </li>
            <li className='extraLarge'>
              <a href="http://extrahop.com" target="_blank"><img ref='img' src='images/company_logos/extrahop.png'/></a>
            </li>
            <li className='extraLarge'>
              <a href="http://algorithmia.com" target="_blank"><img ref='img' src='images/company_logos/algorithmia.png'/></a>
            </li>
            <li className='extraSmall'>
              <a href="http://www.go.co/" target="_blank"><img ref='img' src='images/company_logos/co2.png'/></a>
            </li>
            <li>
              <a href="https://www.soylent.com/" target="_blank"><img ref='img' src='images/company_logos/soylent.svg'/></a>
            </li>
            <li className='extraSmall'>
              <a href="http://www.bonsaimediagroup.com/" target="_blank"><img ref='img' src='images/company_logos/bonsai.gif'/></a>
            </li>
            <li>
              <a href="http://www.intel.com/" target="_blank"><img ref='img' src='images/company_logos/intel.png'/></a>
            </li>
            <li>
              <a href="https://www.namecheap.com/" target="_blank"><img ref='img' src='images/company_logos/namecheap.png'/></a>
            </li>
            <li>
              <a href="http://www.shippable.com/" target="_blank"><img ref='img' src='images/company_logos/shippable.png'/></a>
            </li>
            <li>
              <a href="http://www.wolfram.com/" target="_blank"><img ref='img' src='images/company_logos/wolfram.png'/></a>
            </li>
            <li>
              <a href="https://comotion.uw.edu/" target="_blank"><img ref='img' src='images/company_logos/comotion.svg'/></a>
            </li>
            <li>
              <a href="https://www.waopportunityscholarship.org/" target="_blank"><img ref='img' src='images/company_logos/wsos.png'/></a>
            </li>
            <li>
              <a href="https://www.tune.com/" target="_blank"><img ref='img' src='images/company_logos/tune.png'/></a>
            </li>
          </ul>
          <h2 className='section title'>Partners</h2>
          <ul className='partners'>
            <li>
              <a id="mlh-trust-badge" href="https://mlh.io/?utm_campaign=Trust%20Badge" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/f2015.png" alt="MLH Official - Fall 2015" style={{
      width: "160px"
      }}/></a>
            </li>
          </ul>*/}

        </div>

        <div className='bubbles'>
          <Bubble origin={bubbleOrigin}/>
          <Bubble origin={bubbleOrigin}/>
          <Bubble origin={bubbleOrigin}/>
          <Bubble origin={bubbleOrigin}/>
          <Bubble origin={bubbleOrigin}/>
          <Bubble origin={bubbleOrigin}/>
        </div>
        <img className='anchor' src='images/anchor.svg'/>
      </section>
    );
  }
});

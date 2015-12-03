var React = require('react');

module.exports = React.createClass({
  statics: {
    flavors: {
      solid: 'solid'
    }
  },

  propTypes: {
     // The text in the button
    content: React.PropTypes.string,

    // The name of the icon
    icon: React.PropTypes.string,

    // The flavor of the button
    flavor: React.PropTypes.oneOf(['solid'])
  },

  render: function() {
    return (
      <div className={'Button ' + (this.props.flavor ? this.props.flavor : '')}>
        {this.props.icon ?
          <img className='icon' src={'./images/icons/' + this.props.icon + '.svg'} />
        : ''}
        {this.props.content ? this.props.content : ''}
      </div>
    );
  }
});

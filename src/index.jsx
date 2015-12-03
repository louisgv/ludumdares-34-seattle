var React = require('react');
var Page = require('./components/page/page.jsx');

var $pageContainer = document.getElementsByClassName('page-container')[0];

React.render(<Page/>, $pageContainer);

var Boat = require('../boat/boat.jsx');
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    eventsByDay: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      eventsByDay: {
        1: [{
          number: 5,
          period: 'pm',
          title: 'Mingle-ing'
        }, {
          number: 6,
          period: 'pm',
          title: 'Theme announced'
        }, {
          number: 6,
          period: '15',
          title: 'Dinner!'
        }, {
          number: 6,
          period: '30',
          title: 'Keynotes'
        }, {
          number: 6,
          period: '45',
          title: 'Team Forming'
        }, {
          number: 7,
          period: 'pm',
          title: 'Jam Starts'
        }],
        2: [{
          number: 11,
          period: 'am',
          title: 'Lunch'
        }, {
          number: 6,
          period: 'pm',
          title: 'Dinner'
        }],
        3: [{
          number: 11,
          period: 'am',
          title: 'Lunch'
        }, {
          number: 5,
          period: 'pm',
          title: 'Dinner'
        }, {
          number: 6,
          period: 'pm',
          title: 'Singler Pens Down!'
        }, {
          number: 7,
          period: 'pm',
          title: 'LudumDares Upload Deadlines'
        },{
          number: 7,
          period: '10',
          title: 'Single Show Off'
        }, {
          number: 8,
          period: 'pm',
          title: 'Single Prizes'
        }],
        4: [{
          number: 11,
          period: 'am',
          title: 'Lunch'
        }, {
          number: 5,
          period: 'pm',
          title: 'Dinner'
        }, {
          number: 6,
          period: 'pm',
          title: 'Pens Down!'
        }, {
          number: 7,
          period: 'pm',
          title: 'LudumDares Upload Deadlines'
        },{
          number: 7,
          period: '10',
          title: 'Jam Show Off'
        }, {
          number: 8,
          period: 'pm',
          title: 'Judge and Prizes'
        },{
          number: 8,
          period: '30',
          title: 'Closing Ceremony / Clean Up'
        }, {
          number: 9,
          period: 'pm',
          title: 'Home Coming'
        }]
      }
    };
  },

  render: function() {
    var self = this;

    // Returns the html for a single event
    var getEvent = function(eventData) {
      return (
        <li className='event' key={eventData.title}>
          <time className='time'>
            <div className='number'>{eventData.number}</div>
            <div className='period'>{eventData.period}</div>
          </time>
          <div className='event-title'>{eventData.title}</div>
        </li>
      );
    };

    // Returns the list of events for a day
    var getEvents = function(dayNumber) {
      var events = self.props.eventsByDay[dayNumber];
      return (
        <ul className='events'>
          {events.map(function(eventData) {
            return getEvent(eventData);
          })}
        </ul>
      );
    };

    return (
      <section className='ScheduleSection page-section' id='schedule'>
        <h2 className='section title'>Schedule</h2>
        <ul className='days'>
          <li className='day'>
            <h3 className='day-title'> Saturday December 11th</h3>
            {getEvents(1)}
          </li>
          <li className='day'>
            <h3 className='day-title'> Sunday December 12th</h3>
            {getEvents(2)}
          </li>
          <li className='day'>
            <h3 className='day-title'> Monday December 13th</h3>
            {getEvents(3)}
          </li>
          <li className='day'>
            <h3 className='day-title'> Monday December 13th</h3>
            {getEvents(4)}
          </li>
        </ul>
        <Boat />
        <img className='sea' src='images/sea.svg' />
        <img className='sea' src='images/sea.svg' />
      </section>
    );
  }
});

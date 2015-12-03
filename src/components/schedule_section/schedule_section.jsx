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
          number: 3,
          period: 'pm',
          title: 'Check-in'
        }, {
          number: 5,
          period: 'pm',
          title: 'Opening Ceremony'
        }, {
          number: 7,
          period: 'pm',
          title: 'Start Hacking!'
        }, {
          number: 8,
          period: 'pm',
          title: 'Dinner'
        }, {
          number: 12,
          period: 'am',
          title: 'Midnight Snack Attack'
        }],
        2: [{
          number: 8,
          period: 'am',
          title: 'Breakfast'
        }, {
          number: 12,
          period: 'pm',
          title: 'Lunch'
        }, {
          number: 5,
          period: 'pm',
          title: 'Submit Your Hack!'
        }, {
          number: 6,
          period: 'pm',
          title: 'Judging and Dinner'
        }, {
          number: 8,
          period: 'pm',
          title: 'Closing Ceremony'
        }, {
          number: 9,
          period: 'pm',
          title: 'Go Home'
        }],
        3: [{
          number: 8,
          period: 'am',
          title: 'Breakfast'
        }, {
          number: 12,
          period: 'pm',
          title: 'Lunch'
        }, {
          number: 5,
          period: 'pm',
          title: 'Submit Your Hack!'
        }, {
          number: 6,
          period: 'pm',
          title: 'Judging and Dinner'
        }, {
          number: 8,
          period: 'pm',
          title: 'Closing Ceremony'
        }, {
          number: 9,
          period: 'pm',
          title: 'Go Home'
        }],
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
        </ul>
        <Boat />
        <img className='sea' src='images/sea.svg' />
        <img className='sea' src='images/sea.svg' />
      </section>
    );
  }
});

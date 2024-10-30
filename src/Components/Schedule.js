import React from 'react';
import './Schedule.css'; // Optional: To style the components

const Schedule = () => {
  const scheduleData = [
    { day: '11/22/2024', event: 'Sankalp', domain: 'Business Plan', participants: 'Both', prizemoney: '17k', rounds: '3', judges: '2', offline: '1', online: '2' },
    { day: '11/22/2024', event: 'Merx', domain: 'Marketing', participants: 'Both', prizemoney: '17k', rounds: '3', judges: '2', offline: '2', online: '1' },
    { day: '11/22/2024', event: 'Praxis', domain: 'Operation', participants: 'PG', prizemoney: '17k', rounds: '3', judges: '1', offline: '2', online: '1' },
    { day: '11/22/2024', event: 'Nivesh', domain: 'Investment', participants: 'Both', prizemoney: '17k', rounds: '3', judges: 'TBD', offline: 'TBD', online: 'TBD' },
    { day: '11/22/2024', event: 'Uttar', domain: 'B-quiz', participants: 'Both', prizemoney: '5k', rounds: '2', judges: '0', offline: 'TBD', online: 'TBD' },
    { day: '11/22/2024', event: 'Manifest', domain: 'Business Charades', participants: 'Both', prizemoney: '3k', rounds: '2', judges: '0', offline: '2', online: '0' },
    { day: '11/23/2024', event: 'Chanakya', domain: 'Best Manager', participants: 'PG', prizemoney: '15k', rounds: '3', judges: '2', offline: '3', online: '0' },
    { day: '11/23/2024', event: 'Pravaran', domain: 'HR', participants: 'PG', prizemoney: '17k', rounds: '3', judges: '1', offline: '3', online: '0' },
    { day: '11/23/2024', event: 'StrategySprint', domain: 'Consulting', participants: 'Both', prizemoney: '17k', rounds: '3', judges: '1', offline: '1', online: '2' },
    { day: '11/23/2024', event: 'Serpentine Draft', domain: 'IPL', participants: 'Both', prizemoney: '9k', rounds: '2', judges: '0', offline: '2', online: '0' },
    { day: '11/23/2024', event: 'Gavel', domain: 'Debate', participants: 'Both', prizemoney: '3k', rounds: '2', judges: '1', offline: '2', online: '0' },
    { day: '11/23/2024', event: 'Vriddhi', domain: 'Finance', participants: 'PG', prizemoney: '17k', rounds: '3', judges: '1', offline: '2', online: '1' },
  ];

  // Get today's date in the format of 'MM/DD/YYYY'
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return (
    <div className="schedule-container">
      <h1>SCHEDULE</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Event</th>
            <th>Domain</th>
            <th>Participants</th>
            <th>Prize Money</th>
            <th>Number of Rounds</th>
            <th>Judges</th>
            <th>Number of Offline Rounds</th>
            <th>Number of Online Rounds</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((item, index) => {
            // Check if the item's day matches today's date
            const isToday = item.day === formattedDate;

            return (
              <tr key={index} className={isToday ? 'highlight' : ''}>
                <td className={isToday ? 'highlight-day' : ''}>{item.day}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.event}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.domain}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.participants}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.prizemoney}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.rounds}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.judges}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.offline}</td>
                <td className={isToday ? 'highlight-event' : ''}>{item.online}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;

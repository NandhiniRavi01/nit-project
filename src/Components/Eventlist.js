import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Eventlist.css';
import Home from './Home';
import Schedule from './Schedule';

const EventList = () => {
  const [activeEvent, setActiveEvent] = useState(null); // State to track active event
  const events = [
    { id: 1, name: 'CHANAKYA', icon: 'fas fa-lightbulb fa-3x' },
    { id: 2, name: 'SANKALP', icon: 'fas fa-bullseye fa-3x' },
    { id: 3, name: 'MERX', icon: 'fas fa-chart-bar fa-3x' },
    { id: 4, name: 'PRAXIS', icon: 'fas fa-cogs fa-3x' },
    { id: 5, name: 'VRIDDHI', icon: 'fas fa-seedling fa-3x' },
    { id: 6, name: 'PRAVARAN', icon: 'fas fa-graduation-cap fa-3x' },
    { id: 7, name: 'NIVESH', icon: 'fas fa-wallet fa-3x' },
    { id: 8, name: 'STRATEGYSPRINT', icon: 'fas fa-chess fa-3x' },
    { id: 9, name: 'SERPENTINE DRAFT', icon: 'fas fa-pencil-ruler fa-3x' },
    { id: 10, name: 'UTTAR', icon: 'fas fa-comments fa-3x' },
    { id: 11, name: 'GAVEL', icon: 'fas fa-balance-scale fa-3x' },
    { id: 12, name: 'MANIFEST', icon: 'fas fa-bolt fa-3x' },
    { id: 13, name: 'SPORTS QUIZ', icon: 'fas fa-trophy fa-3x' },
    { id: 14, name: 'BRAND QUIZ', icon: 'fas fa-tags fa-3x' },
    { id: 15, name: 'AI ML QUIZ', icon: 'fas fa-brain fa-3x' },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <Home />
      <div className="event-grid">
        {events.map((event) => (
          <div
            className={`event-card ${activeEvent === event.id ? 'active' : ''}`} // Add active class
            key={event.id}
            onClick={() => {
              setActiveEvent(event.id); // Set active event on click
              navigate(`/event/${event.id}`); // Navigate to event detail page
            }}
            onTouchStart={() => setActiveEvent(event.id)} // Set active event on touch
            onTouchEnd={() => setActiveEvent(null)} // Remove active event when touch ends
          >
            <i className={`${event.icon} event-icon`}></i>
            <p4 className="event-name">{event.name}</p4>
          </div>
        ))}
      </div>
      <Schedule />
    </div>
  );
};

export default EventList;

import './App.css';
import EventList from './Components/Eventlist';

import EventDetail from './Components/Eventdetails';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';

function App() {
  

  return (
    <div>
    
     
      <div>
        <Router>
        {/* Define Routes for each component */}
        <Routes>
         
          <Route path="/" element={<EventList />} />
          
          <Route path="/event/:id" element={<EventDetailWrapper />} />
        </Routes>
      
    </Router>
    </div>
    
    </div>
  );
  
}
const EventDetailWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the event ID from the URL

  const handleBack = () => {
    navigate('/events'); // Navigate back to the event list
  };

  return <EventDetail id={id} onBack={handleBack} />;
};
export default App;

// src/components/Home.js
import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('navigation');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header id="navigation" className="navbar-inverse navbar-fixed-top animated-header">
        <div className="container">
          <div className="navbar-header">
            <h1 className="navbar-brand" style={{ padding: 0 }}>
              <a href="/">
                <img src="/Images/nitlogo.png" alt="Logo" style={{ width: '200px' }} />
              </a>
            </h1>
          </div>
        </div>
      </header>

      <div className="full-width-image">
        <a href="/">
          <img src="/Images/event.avif" alt="event" />
        </a>
        <div className="text-overlay"> 
          <span className="blinking">
  AI in Action: Leading with Responsible Business Innovations</span>
</div>

      </div>
      <div className="content semi-transparent-bg"> {/* Apply the class here */}
        <section className="prizes">
          <h1>PRIZES</h1>
          <hr className="underline" />
          <p6>Cash Prizes worth 25K</p6>
        </section>

        <section className="events">
          <h1>EVENTS</h1>
          <hr className="underline" />
          <p6>15 exciting events!</p6>
        </section>
      </div>
    </div>
  );
};

export default Home;

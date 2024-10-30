import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Eventdetails.css';

const EventDetail = () => {
  const { id } = useParams(); // Get the event id from the URL
  const navigate = useNavigate();
  const eventDetails = {
    1: {
      title: 'CHANAKYA - Best Manager',
      description: `Ready to take your leadership skills to the next level? CHANAKYA is where future business leaders rise to the challenge! This high-stakes competition will push your decision-making, problem-solving, and leadership abilities to the limit through real-world business scenarios. 
      From crisis management to innovative strategy development, every round will test your ability to think on your feet and lead with confidence. Stand out by impressing a panel of experts with your solutions and prove that you have what it takes to thrive in today’s competitive business world.
      Step into the spotlight—CHANAKYA is your moment to shine!`,
      google_title:'GOOGLE FORM',
      link:'link'
    },
    2: {
      title: 'Sankalp - Business Plan',
      description: `Ready to transform your ideas into actionable success? Sankalp is the ultimate platform where future business innovators bring their strategies to life! This high-impact business plan competition will challenge your entrepreneurial spirit, strategic insight, and business acumen as you navigate real-world scenarios to develop groundbreaking solutions. 
      From identifying market opportunities to building sustainable business models, each round will push you to think big and deliver results. Stand before a panel of industry leaders, showcase your vision, and prove that you have what it takes to turn bold ideas into thriving ventures. 
      Step up and seize the opportunity—Sankalp is where your business journey begins!`,
      google_title:'GOOGLE FORM',
      link:''
    },
    3: {
      title: 'Merx - Marketing Event',
      description: `Ready to revolutionize the way brands connect with audiences? MERX is the ultimate marketing showdown where creative minds and strategic thinkers collide! This high-energy competition will test your ability to craft cutting-edge campaigns, solve real-world marketing challenges, and deliver powerful brand strategies that captivate and convert. 
      From digital innovation to brand storytelling, every round of MERX will push you to think outside the box and create campaigns that leave a lasting impact. Impress a panel of industry experts with your creative flair and strategic insights, and prove that you have what it takes to lead the future of marketing. 
      Unleash your potential—MERX is your stage to shine as the next marketing mastermind!`,
      google_title:'GOOGLE FORM',
      link:''
    },
    4: {
      title: 'Praxis - Operation Event',
      description: `Are you ready to master the art of operational excellence? Praxis is the ultimate operations challenge where future business leaders put their skills to the test! In this hands-on competition, you'll face real-world operational scenarios that demand efficiency, problem-solving, and strategic execution. 
      From optimizing supply chains to streamlining processes, every round will push your ability to manage resources, minimize costs, and deliver results under pressure. Impress a panel of industry experts with your ability to solve complex operational challenges and showcase your expertise in driving business success. 
      Praxis is where operational leaders rise—step up, take the challenge, and lead the way to operational mastery!`,
      google_title:'GOOGLE FORM',
      link:''
    },
    5: {
      title: 'Vriddhi – Finance Event',
      description: `Are you ready to enhance your financial acumen? Vriddhi is the premier competition for aspiring finance professionals to showcase their expertise in real-world financial scenarios.
Challenge yourself to analyze case studies, develop strategic solutions, and demonstrate your ability to drive financial growth. Impress a panel of industry experts with your insights and prove you have what it takes to excel in the fast-paced world of finance.
Join us—Vriddhi is where the future of finance unfolds!`,
google_title:'GOOGLE FORM',
      link:''
    },6: {
      title: 'Pravaran- HR Event',
      description: `Are you ready to shape the future of talent management? Pravaran is the ultimate HR event where aspiring leaders demonstrate their expertise in people management, organizational development, and employee engagement. This competition will challenge you to solve real-world HR issues, from talent acquisition and retention to fostering a culture of innovation and inclusivity.
Each round of Pravaran will test your ability to create strategies that empower teams, enhance productivity, and drive organizational success. Impress a panel of HR experts with your innovative solutions and prove that you have what it takes to lead in today’s dynamic workforce landscape.
Step into the spotlight—Pravaran is where the next generation of HR leaders emerges!`,
google_title:'GOOGLE FORM',
      link:''
    },7: {
      title: 'Nivesh- Investment Event',
      description: `Are you ready to make your mark in the world of investments? Nivesh is the premier investment event where ambitious minds showcase their financial acumen and strategic foresight. This high-stakes competition challenges participants to navigate real-world investment scenarios, from building diversified portfolios to identifying high-growth opportunities.
Each round of Nivesh will test your ability to assess risks, analyze market trends, and make bold decisions that drive returns. Impress a panel of seasoned investors with your strategic insights, and prove that you have the vision to thrive in the ever-evolving world of finance.
Step up—Nivesh is where the future of investment is shaped by you!`,
      google_title:'GOOGLE FORM',
      link:''
    },8: {
      title: 'Stratergy Sprint- Consulting Event',
      description: `Are you ready to lead businesses to new heights? Strategy Sprint is the high-energy consulting competition where the sharpest minds tackle complex business challenges under intense time pressure. This fast-paced event will push your problem-solving abilities, strategic thinking, and analytical skills as you develop game-changing solutions for real-world business problems.
From market entry strategies to operational turnarounds, each round of Strategy Sprint will test your ability to deliver quick, impactful recommendations that drive results. Impress a panel of top-tier consultants and industry leaders with your insights and showcase your potential to thrive in the fast-paced world of consulting.
This is your moment—Strategy Sprint is where future consulting champions rise to the challenge!`,
      google_title:'GOOGLE FORM',
      link:''
    },9: {
      title: 'Serpentine Draft – IPL Auction',
      description: `Are you ready to dive into the thrilling world of cricket strategy? Serpentine Draft is the ultimate IPL-themed event where aspiring team managers and cricket enthusiasts compete to build the best franchise! This dynamic competition will challenge your analytical skills, player assessment abilities, and strategic planning as you draft and manage your dream team.
Step up to the crease—Serpentine Draft is your chance to showcase your cricketing prowess and strategy in the high-stakes world of IPL!`,
      google_title:'GOOGLE FORM',
      link:''
    },10: {
      title: 'Uttar- B Quiz',
      description: `Are you ready to challenge your knowledge and showcase your skills? Uttar B Quiz is the ultimate quiz competition where curious minds come together to compete for glory! This exciting event will test your knowledge across a wide range of topics, from current affairs and history to science and pop culture.
Join us for an exhilarating experience—Uttar B Quiz is where the brightest minds compete for the title of quiz champion!`,
      google_title:'GOOGLE FORM',
      link:''
    },11: {
      title: 'Gavel- Debate',
      description: `Are you ready to sharpen your debating skills and engage in thought-provoking discussions? Gavel  is the premier event where passionate speakers and critical thinkers come together to articulate their ideas and challenge opposing viewpoints! This dynamic competition will test your ability to construct compelling arguments, think on your feet, and engage in respectful discourse.
Step into the arena—Gavel  is where future leaders and communicators rise to the occasion!!`,
      google_title:'GOOGLE FORM',
      link:''
    },12: {
      title: 'Manifest- Business Charades',
      description: `Get ready for a fun and interactive twist on networking and business strategy! Manifest Business Charades is the ultimate event where creativity and communication collide! In this engaging competition, participants will act out business terms, concepts, and scenarios without speaking, using only gestures and expressions to convey their ideas.
Join us for an unforgettable experience—Manifest Business Charades is where fun meets business savvy, and every gesture counts!`,
      google_title:'GOOGLE FORM',
      link:''
    }
    // Add more events as needed...
  };

  const eventDetail = eventDetails[id];

  return (
    <div>
      {eventDetail ? (
        <div className="container">
          <div className="background-container">
            <div className="text-over">
              <h1>{eventDetail.title}</h1>
              <h2>Event Description</h2>
              <p>{eventDetail.description}</p>
              <h3>{eventDetail.google_title}</h3>
              <p>
                Please fill the form: 
                <a className="special-link" href={eventDetail.link || "https://delta.nitt.edu/"} target="_blank" rel="noopener noreferrer">
                  {eventDetail.link ? eventDetail.link : "Form Link"}
                </a>
              </p>
  
              {/* Button directly below the form link */}
              <div className="button-wrapper">
                <button onClick={() => navigate('/')} className="center-button">
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="background-container">
          <div className="text-over">
            <p>Event description not available.</p>
            <div className="button-wrapper">
              <button onClick={() => navigate('/')} className="center-button">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  }

export default EventDetail;








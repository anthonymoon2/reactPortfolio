import React from 'react';
import '../../styles/Contact.css';

function Contact() {
  return (
    <div>
      <h1>-CONTACT ME-</h1>

      <div className="contact-container">
        <div className="contact-container-left">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="eeafb7ff-c5e4-414f-9b50-993731280bf2"></input>

            <input className="input-fields" type="text" placeholder="Name" name="name" required></input>

            <input className="input-fields" type="input-email" placeholder="Email" name="email" required></input>

            <div className="message">
              <textarea class="input-fields" placeholder="Message" rows="2" name="message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        <div className="contact-container-right">
          <div className="right-container-desc">
            Thank you for taking the time to look at my portfolio. <br></br><br></br>
            
            Email: anthonymoon2@gmail.com <br></br>
            Cell: (949) 413 3700
          </div>
          <div className="time-container">
            <div className="time-title">
              Anthony's Current Time
            </div>
            <div className="time" id="time">Loading time...</div>
            <div className="time-desc">
              Time in California (PST)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });

  document.getElementById('time').innerText = formattedTime;
}

setInterval(updateClock, 1000);
window.onload = updateClock;
export default Contact;


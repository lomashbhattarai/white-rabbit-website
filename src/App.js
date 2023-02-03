import React from "react";

function App() {
  return (
    <div>
      <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section id="home">
      <h1>Welcome to White Rabbit</h1>
      <p>A company focused on web and mobile services</p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>Mobile App Development</li>
        <li>UI/UX Design</li>
        <li>Search Engine Optimization</li>
      </ul>
    </section>

    <section id="team">
      <h2>Our Team</h2>
      <ul>
        <li>
          <h3>John Doe</h3>
          <p>Co-Founder and CEO</p>
        </li>
        <li>
          <h3>Jane Doe</h3>
          <p>Co-Founder and CTO</p>
        </li>
        <li>
          <h3>Jim Smith</h3>
          <p>Lead Developer</p>
        </li>
      </ul>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <form action="submit-form.php" method="post">
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Your Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>

    <footer>
      <p>Copyright © White Rabbit 2023</p>
    </footer>
    </div>
  );
}

export default App;

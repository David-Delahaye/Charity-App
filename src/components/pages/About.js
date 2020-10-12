import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container">
      <div className="header">
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        <h1>About</h1>
      </div>
      <p>
        GlobalGiving is a nonprofit that supports other nonprofits by connecting
        them to donors and companies. Since 2002, we've helped trusted,
        community-led organizations from Afghanistan to Zimbabwe (and hundreds
        of places in between) access the tools, training, and support they need
        to make our world a better place.
      </p>

      <Link to="/search" className="button">
        Explore Projects
      </Link>
    </div>
  );
}

export default About;

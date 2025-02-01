import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srishti Mishra </span>
            from <span className="purple">SRM University, Chennai .</span>
            <br />
            I am currently pursuing my degree in Bachelors of Technology.
            <br />
            I am a motivated Computer Science graduate with hands-on experience in software development, machine learning, and database 
            management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Srishti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

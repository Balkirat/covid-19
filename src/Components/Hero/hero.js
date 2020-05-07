import React from "react";
import "./hero.scss";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function hero() {
  return (
    <>
      <Jumbotron>
        <h1>COVID-19</h1>
        <p>
          Corona Virus is, unfortunately, spreading through the entire world. As
          a Developer I just thought to make a Simple webpage to spread
          awareness by visualizing the data in the form of charts and simple
          text tables.
        </p>
        <p>
          <a target="_blank" href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html?utm_campaign=not-applicable&utm_medium=vanity-url&utm_source=canada-ca_coronavirus">
            <Button variant="primary">Learn more</Button>
          </a>
        </p>
      </Jumbotron>
    </>
  );
}

export default hero;

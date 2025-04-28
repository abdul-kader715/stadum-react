import React from 'react';
import { Accordion } from 'react-bootstrap';
import ImageAccordin from '../../images/faq/1.jpg'

const FaqAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header><i className="ti-check"></i> What is the meaning of poor in quality?</Accordion.Header>
        <Accordion.Body>
          <p>Poor quality means something is lacking in standard or excellence, often seen as substandard or defective.</p>
          <div className="image">
          <img src={ImageAccordin} alt="" />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><i className="ti-check"></i> If you describe something poor mean?</Accordion.Header>
        <Accordion.Body>
          <p>Describing something as poor means it does not meet expectations or accepted standards of quality or value.</p>
          <div className="image">
            <img src={ImageAccordin} alt="" />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><i className="ti-check"></i> What is another word for poor?</Accordion.Header>
        <Accordion.Body>
          <p>Another word for "poor" includes terms like "inferior", "substandard", "mediocre", or "shoddy".</p>
          <div className="image">
          <img src={ImageAccordin} alt="" />
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><i className="ti-check"></i> Synonyms for of poor quality?</Accordion.Header>
        <Accordion.Body>
          <p>Synonyms include: low-quality, cheap, second-rate, flimsy, defective, or unsatisfactory.</p>
          <div className="image">
          <img src={ImageAccordin} alt="" />
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqAccordion;

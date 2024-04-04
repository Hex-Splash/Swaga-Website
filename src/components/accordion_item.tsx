import React from "react";
import { Accordion } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css'; 
import './style.css'

const Accordionitem = (props: { itemData: any; }) => {

  const data = props.itemData;
  return (
    <Accordion.Item style={{margin: '0px 0px 0px 0px', width: '130%'}} eventKey={data.key} >
      <Accordion.Header className="qa col-11 col-lg-10">
          <div className="me-4 text-uppercase accordion-heading">
            <h4>
              {data.key + '. '}
              {data.heading}
            </h4>
          </div>
      </Accordion.Header>
      <Accordion.Body className="accordion_text itemtext col-lg-8 col-9">
        {data.text}
      </Accordion.Body>
    </Accordion.Item>
  );

};

export default Accordionitem;
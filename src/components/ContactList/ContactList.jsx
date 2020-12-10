import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./ContactList.css";

const ContactList = ({ visibleContact }) => (
  <TransitionGroup component="ul" className="contact-list">
    {visibleContact.map((el) => {
      return (
        <CSSTransition key={el.id} timeout={500} classNames="item">
          <ContactItem el={el} />
        </CSSTransition>
      );
    })}
  </TransitionGroup>
);

ContactList.propTypes = {
  visibleContact: PropTypes.array.isRequired,
};

export default ContactList;

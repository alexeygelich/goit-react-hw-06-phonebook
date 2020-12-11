import React, { Component } from "react";
import FormAddContacts from "./components/FormAddContacts";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { CSSTransition } from "react-transition-group";

import Container from "./components/Container";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.contacts !== this.props.contacts) {
      const localContacts = JSON.stringify(this.props.contacts);
      localStorage.setItem("contacts", localContacts);
    }
  }

  render() {
    const { contacts } = this.props;

    return (
      <Container>
        <section>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade-logo" unmountOnExit>
            <h2 className="logo">Phonebook</h2>
          </CSSTransition>
          <FormAddContacts />
        </section>
        <section>
          <h2>Contacts</h2>
          <CSSTransition in={contacts.length > 1} timeout={500} classNames="fade-filter" unmountOnExit>
            <Filter />
          </CSSTransition>

          <ContactList />
        </section>
      </Container>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
});

export default connect(mapStateToProps)(App);

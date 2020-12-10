import React, { Component } from "react";
import FormAddContacts from "./components/FormAddContacts";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { CSSTransition } from "react-transition-group";

import Container from "./components/Container";
import "./App.css";
import { connect } from "react-redux";
import phonebookActions from "./redux/phonebook/phonebookActions";

class App extends Component {
  componentDidUpdate(prevProps, PrevState) {
    if (prevProps.contacts !== this.props.contacts) {
      const localContacts = JSON.stringify(this.props.contacts);
      localStorage.setItem("contacts", localContacts);
    }
  }

  getFiteredContact = () => {
    const { contacts, filter } = this.props;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { contacts } = this.props;
    const visibleContact = this.getFiteredContact();
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

          <ContactList visibleContact={visibleContact} />
        </section>
      </Container>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items,
  filter: contacts.filter,
});

const mapDispatchToprops = {
  addItem: phonebookActions.addItem,
};
export default connect(mapStateToProps, mapDispatchToprops)(App);

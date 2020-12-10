import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebookActions";

const ContactItem = ({ el, handleDelete, onChangeFilter }) => {
  const { name, number, id } = el;
  const handleClick = () => {
    handleDelete(id);
    onChangeFilter('');
  };
  return (
    <li className={styles.listItem}>
      <span>{name}:</span> <span>{number}</span>
      <button className={styles.button} type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  el: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

const mapDispatchToprops = {
  onChangeFilter: phonebookActions.filter,
  handleDelete: phonebookActions.removeItem,
};

export default connect(null, mapDispatchToprops)(ContactItem);

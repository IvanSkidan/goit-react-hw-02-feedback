import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

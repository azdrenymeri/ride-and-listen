// eslint-disable-next-line
import react from 'react';
import PropTypes from 'prop-types';
import './Signal.css';

export default function Signal(props: any) {
  return (
    <div className="Signal">
      <section className="top">
        <section className="shell"></section>
        <section className="yellow"></section>
        <section className="light-blue"></section>
        <section className="green"></section>
        <section className="purple"></section>
        <section className="red"></section>
        <section className="blue"></section>
      </section>
      <section className="middle">
        <section className="blue"></section>
        <section className="black"></section>
        <section className="purple"></section>
        <section className="black"></section>
        <section className="blue"></section>
        <section className="black"></section>
        <section className="white"></section>
      </section>
      <section className="bottom">
        <section className="dark-blue"></section>
        <section className="white"></section>
        <section className="blue"></section>
        <section className="black"></section>
        <section className="black"></section>
        <section className="dark-blue"></section>
      </section>
      <section className="grid-over">
        <section className="message-container">
          <p className="message">{ props.message }</p>
        </section>
      </section>
    </div>
  )
}

Signal.propTypes = {
  message: PropTypes.string.isRequired
}
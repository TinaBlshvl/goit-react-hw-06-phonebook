import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

export const Section = ({ title }) => {
  return <h1 className={css.container}>{title}</h1>;
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

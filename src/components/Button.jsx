import PropTypes from 'prop-types';

export default function Button({ children, className = '' }) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

import React from 'react';

export default ({
  type = 'text',
  value,
  onChange,
  error,
  placeholder = '',
  label = '',
  icon
}) => (
  <div className="field">
    <label className="label"> {label} </label>{' '}
    <div
      className={`control ${icon ? 'has-icons-left' : ''} ${
        error ? 'has-icons-right' : ''
      }`}
    >
      <input
        className={`input ${error ? 'is-danger' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      {icon && (
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
      )}

      {error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      )}
    </div>{' '}
    <p className="help is-danger">{error ? 'error' : ''} </p>{' '}
  </div>
);

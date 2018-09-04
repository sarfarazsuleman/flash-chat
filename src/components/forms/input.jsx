/**
 * @namespace components/forms/input
 *
 * @exports (default) Input
 */

import React, { Component } from 'react';
import PropTypes from 'utils/prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let target = event.target;
    let name = target.name;
    let value = (target.type === 'checkbox' || target.type === 'radio')  ? target.checked : target.value;

    this.props.changeHandle(name, value);
  }

  render() {

    let {changeHandle, ...rest} = this.props;
    return (
      <input
        onChange={this.handleInputChange}
        {...rest}
       />
    );
  }
}

FormInput.defaultProps = {
  type: "text",
  placeholder: "",
}

FormInput.propTypes = {
  name: PropTypes.input.name,
  placeholder: PropTypes.input.placeholder,
  changeHandle: PropTypes.input.changeHandle,
  value: PropTypes.input.value,
}

export default FormInput;
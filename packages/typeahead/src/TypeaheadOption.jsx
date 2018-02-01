import React from 'react';
import classNames from 'classnames';

import css from './typeahead.css';

export default class TypeaheadOption extends React.Component {
  /**
   * Setup
   */
  constructor(props) {
    super(props);

    // Binding
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  /**
   * Option clicked. Must be on mouse down so we can intercept the focus
   */
  handleMouseDown(event) {
    // Prevent the blur event from happening and let the text edit keep its focus
    event.preventDefault();

    // Call parent
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(event);
    }
  }

  /**
   * Render
   * @return    {React}
   */
  render() {
    var classes = classNames('typeahead--item', css.item, {
      'typeahead--selected': this.props.selected,
      [css.selected]: this.props.selected
    });

    if (this.props.empty) {
      return (
        <li className={classes}>
          {typeof this.props.empty === 'string' ? this.props.empty : 'No Results...'}
        </li>
      );
    }

    return (
      <li
        className={classes}
        onMouseDown={this.handleMouseDown}
        /* eslint-disable */
        dangerouslySetInnerHTML={{ __html: this.props.option.string }}
        /* eslint-enable */
      />
    );
  }
}

// Type checking
const {bool, object} = React.PropTypes;
TypeaheadOption.propTypes = {
  selected: bool,
  empty: bool,
  option: object
}

TypeaheadOption.defaultProps = {
  empty: false,
  option: {
    original: '',
    string: ''
  }
};

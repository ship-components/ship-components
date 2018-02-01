import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class OutsideClick extends React.Component {
  /**
   * @class OutsideClick keeps track of clicks outside of the component. This is used for Dialogs, select boxes, etc.
   * @author Isaac Suttell <isaac@isaacsuttell.com>
   */
  constructor(props) {
    super(props);

    // Ensure the right context
    this.handleBodyClick = this.handleBodyClick.bind(this);
  }

  /**
   * Bind to the body so we can check for clicks outside of the component
   */
  componentDidMount() {
    if (this.props.onClick) {
      document.body.addEventListener('click', this.handleBodyClick);
    }

    if (this.props.onContextMenu) {
      document.body.addEventListener('contextmenu', this.handleBodyClick);
    }

    if (this.props.onMouseDown) {
      document.body.addEventListener('mousedown', this.handleBodyClick);
    }

    if (this.props.onMouseUp) {
      document.body.addEventListener('mouseup', this.handleBodyClick);
    }
  }

  /**
   * Clean up
   */
  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleBodyClick);
    document.body.removeEventListener('contextmenu', this.handleBodyClick);
    document.body.removeEventListener('mousedown', this.handleBodyClick);
    document.body.removeEventListener('mouseup', this.handleBodyClick);
  }

  /**
   * Handle clicks outside of the component. Goes up the tree until it finds itself or runs out of parents.
   * @param     {Event}    event
   */
  handleBodyClick(event) {
    let source = event.target;
    let el = ReactDOM.findDOMNode(this);

    // Search up the tree for the component node
    while (source.parentNode) {
      if (source === el) {
        return;
      } else {
        source = source.parentNode;
      }
    }

    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }

    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onMouseUp) {
      this.props.onMouseUp(event);
    }
  }

  /**
   * Render the react component
   * @return    {React}
   */
  render() {
    return (
      <this.props.tag
        className={this.props.className} >
        {this.props.children}
      </this.props.tag>
    );
  }
}

/**
 * Set some defaults
 * @static
 * @type    {Object}
 */
OutsideClick.defaultProps = {
  tag: 'div',
  className: ''
};

/**
 * Validate the prop types when not in production
 * @static
 * @type    {Object}
 */
OutsideClick.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func
};

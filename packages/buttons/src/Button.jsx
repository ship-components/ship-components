/** ****************************************************************************
 * Button
 *
 * @author       Isaac Suttell <isaac.suttell@sony.com>
 * @file         Material Design Button
 ******************************************************************************/

// External Modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HighlightClick from 'ship-components-highlight-click';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Tooltip from './Tooltip';

// Local
import css from './button.css';

export default class Button extends Component {
  /**
   * Base Button
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      hoverSize: void 0,
      hover: false,
      pressed: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * First mount, get a starting width
   */
  componentDidMount() {
    this.calculateWidth();
  }

  /**
   * Prevent excessive updates
   * @param  {Object} nextProps
   * @param  {Object} nextState
   * @return {Boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.className !== nextProps.className) {
      return true;
    } else if (this.state.hover !== nextState.hover) {
      return true;
    } else if (this.state.pressed !== nextState.pressed) {
      return true;
    } else if (this.props.disabled !== nextProps.disabled) {
      return true;
    } else if (this.state.hoverSize !== nextState.hoverSize) {
      return true;
    } else if (this.props.iconClass !== nextProps.iconClass) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Called after the DOM is rendered. Updates the state
   */
  componentDidUpdate() {
    this.calculateWidth();
  }

  /**
   * Clean up
   */
  componentWillUnmount() {
    clearTimeout(this.pressedTimeout);
  }

  /**
   * Get the width of the button so so we ensure the hover effect fits
   */
  calculateWidth() {
    this.setState({
      hoverSize: this.refs.container ? Math.max(this.refs.container.offsetWidth, this.refs.container.offsetHeight) : void 0
    });
  }

  /**
   * Let the button now the mouse is here
   */
  handleMouseEnter() {
    if (this.props.disabled) {
      return;
    }
    this.setState({
      hover: true
    });
  }

  /**
   * Let the button know the mouse is gone
   */
  handleMouseLeave() {
    this.setState({
      hover: false
    });
  }

  /**
   * Handle the clicks. Toggles pressed state
   * @param  {Event]} event
   */
  handleClick(event) {

    if (this.props.disabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    // Blur so the button loses focus and doesn't
    // quietly interfere with keyboard shortcuts
    event.target.blur();

    if (this.props.onClick) {
      this.props.onClick(event);
    }

    this.setState({
      pressed: true
    }, () => {
      clearTimeout(this.pressedTimeout);
      this.pressedTimeout = setTimeout(() => {
        this.setState({
          pressed: false
        });
      }, this.props.pressedTimeout);
    });
  }

  /**
   * The tag devirved from the propTypes
   * @return {String}
   */
  getTag() {
    if (typeof this.props.href === 'string' && this.props.href.length > 0) {
      return 'a';
    } else {
      return this.props.tag; // FF isn't triggereing on <buttons>
    }
  }

  /**
   * Get the icon
   * @return {React}
   */
  renderIcon() {
    if (typeof this.props.iconClass === 'string') {
      return <span className={css.icon + ' ' + this.props.iconClass} />;
    } else if (typeof this.props.icon === 'string') {
      return <span className={css.icon + ' ' + this.props.iconPrefix + this.props.icon} />;
    } else {
      return null;
    }
  }

  /**
   * Render
   * @return {React}
   */
  render() {
    let btnClasses = classNames(
      'ship-components-btn',
      css.btn,
      css[this.props.type],
      {
        [css.disabled] : this.props.disabled,
        [css.pressed] : this.state.pressed
      }
    );

    let hoverStyles = {};
    if (this.state.hoverSize) {
      // Ensure it covers the button
      hoverStyles.width = this.state.hoverSize * 1.3;
      hoverStyles.height = hoverStyles.width;

      // Center it
      hoverStyles.marginLeft = hoverStyles.width / -2;
      hoverStyles.marginTop = hoverStyles.marginLeft;
    }

    // Store it on `this` so JSX reads it properly
    const ButtonComponent = this.getTag();

    // Construct props
    let props = {
      disabled: this.props.disabled,
      ref:'container',
      className: btnClasses,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      onClick: this.handleClick
    };

    // Setup anchor attributes
    if (ButtonComponent === 'a' && !this.props.disabled) {
      props.href = this.props.href;
      props.target = this.props.target;
      props.download = this.props.download;
      props.rel = this.props.rel;
    }

    return (
      <div className={classNames(css.wrapper, this.props.className)}>
        <ButtonComponent {...props}>
          <HighlightClick
            className={css.container}
            disabled={this.props.disabled}
          >
            {this.props.children}
            {this.renderIcon()}
            <ReactCSSTransitionGroup
              className={css.hoverContainer}
              transitionName={css}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {this.state.hover && !this.props.disableHover ?
                <div className={css.hoverEffect}
                  style={hoverStyles}
                />
                : null}
            </ReactCSSTransitionGroup>
          </HighlightClick>
        </ButtonComponent>
        {this.props.tooltip ?
          <Tooltip
            text={this.props.tooltip}
            visible={this.state.hover}
          />
          : null}
      </div>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 */
Button.propTypes = {
  download: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  className: PropTypes.string,
  pressedTimeout: PropTypes.number,
  rel: PropTypes.string,
  tooltip: PropTypes.string,
  target: PropTypes.string,
  tag: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.oneOf(['flat', 'action', 'raised', 'iconButton']),
  onClick: PropTypes.func,
  iconClass: PropTypes.string,
  icon: PropTypes.string,
  iconPrefix: PropTypes.string,
  disabled: PropTypes.bool,
  disableHover: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ])
};

/**
 * Defaults
 * @type {Object}
 */
Button.defaultProps = {
  className: undefined,
  download: false,
  rel: undefined,
  disableHover: false,
  iconPrefix: 'icon-',
  disabled: false,
  pressedTimeout: 300,
  tag: 'button',
  type: 'flat',
  children: null,
  tooltip: undefined,
  target: '_blank',
  href: undefined,
  onClick: undefined,
  iconClass: undefined,
  icon: undefined
};

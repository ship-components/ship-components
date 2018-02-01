import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Tracks the height and width of a parent element and passes the dimensions
 * to it's children
 * @type    {Object}
 */
export default class ResponsiveContainer extends Component {

  /**
   * Setup
   * @param    {Object}    props
   */
  constructor(props) {
    super(props);

    this.state = {
      containerWidth: -1,
      containerHeight: -1
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  /**
   * Start
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  /**
   * Updates
   */
  componentDidUpdate() {
    this.updateDimensions();
  }

  /**
   * Cleanup
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  /**
   * Check the current dimensions and update them if needed
   */
  updateDimensions() {
    let {containerWidth, containerHeight} = this.getContainerSize();
    if ((!isNaN(containerWidth) && this.state.containerWidth !== containerWidth) ||
        (!isNaN(containerHeight) && this.state.containerHeight !== containerHeight)) {

      this.setState({
        containerWidth,
        containerHeight
      });
    }
  }

  /**
   * Grab the dimensions from the container
   * @return    {Object}
   */
  getContainerSize() {
    return {
      containerWidth: parseInt(this.refs.container.clientWidth, 10),
      containerHeight: parseInt(this.refs.container.clientHeight, 10)
    };
  }

  /**
   * Render
   * @return    {React}
   */
  render() {
    return (
      <div
        className={this.props.className}
        ref='container'
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        {!isNaN(this.state.containerWidth) && !isNaN(this.state.containerHeight) && this.state.containerWidth > -1 && this.state.containerHeight > -1 ?
          React.Children.map(this.props.children, (child) => {
            if (!child || typeof child.type !== 'function') {
              return child;
            }
            return React.cloneElement(child, this.state);
          })
          : null}
      </div>
    );
  }
}

/**
 * Defaults
 * @type    {Object}
 */
ResponsiveContainer.defaultProps = {
  className: undefined
};

/**
 * Type Checks
 * @type    {Object}
 */
ResponsiveContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/** ****************************************************************************
 * Typeahead List
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Shows a list of options when a user types
 ******************************************************************************/

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

// Components
import TypeaheadOption from './TypeaheadOption';

import css from './typeahead.css';

export default class TypeaheadList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      fixedDropdownStyle: {
        top: 'inherit',
        width: 'inherit',
        left: 'inherit',
        position: 'fixed'
      }
    }
  }

  /**
   * Try to keep the selected comp in view
   */
  componentDidUpdate(prevProps) {
    // if drop down with scrolling parent became active, update the positioning styles
    if (this.shouldCalculateDropdownStyle(prevProps)) {
      this.setState(this.fixedDropdownStyle());
    }
  }

  /**
   * remove scroll listener if its there
   */
  componentWillUnmount() {
    if (this.scrollParent) {
      this.scrollParent.removeEventListener('scroll', this.props.onScrollingParentScroll);
    }
  }

  shouldCalculateDropdownStyle(prevProps) {
    return this.props.scrollingParentClass && this.props.visible.length > 0 &&
      ((prevProps.hidden && !this.props.hidden) || (this.props.visible.length !== prevProps.visible.length));
  }

  /**
   * Store a reference to Typeahead's scrolling ancestor node
   * @param  {string} parentClass  the unique className of the scrolling ancestor node
   */
  registerScrollParent(parentClass) {
    let list = ReactDOM.findDOMNode(this);
    if (!list) {
      return void 0;
    }
    let ancestor = list.parentNode;
    while (ancestor && ancestor !== document) {
      if (ancestor.classList.contains(parentClass)) {
        ancestor.addEventListener('scroll', this.props.onScrollingParentScroll);
        this.scrollParent = ancestor;
        return ancestor;
      }
      ancestor = ancestor.parentNode;
    }
  }

  /**
   * Calculate where to place the dropdown when dropdown must have position:fixed
   */
  fixedDropdownStyle() {
    if (!this.scrollParent && !this.registerScrollParent(this.props.scrollingParentClass)) {
      if (process.env.NODE_ENV !== 'production') {
        console.error('<Typeahead /> could not get scrollParent for fixedDropdownStyle()')
      }
      return;
    }
    let parent = ReactDOM.findDOMNode(this).parentNode;
    let source = parent;
    let offsetTop = 0;
    let scrollParentTop = this.scrollParent.scrollTop;
    while (source) {
      offsetTop += source.offsetTop;
      source = source.offsetParent;
    }

    return {
      fixedDropdownStyle: {
        width: `${parent.offsetWidth}px`,
        position: 'fixed',
        left: 'inherit',
        top: `${(offsetTop - scrollParentTop) + parent.offsetHeight}px`
      }
    };
  }

  /**
   * Calculate where to place the dropdown when dropdown must have position:fixed
   */
  getDropdownStyle() {
    return this.props.scrollingParentClass && this.props.visible.length > 0 ? this.state.fixedDropdownStyle : {};
  }

  hasOptions() {
    return this.props.value && this.props.visible instanceof Array && this.props.visible.length > 0;
  }

  /**
   * Render list by order of score
   */
  render() {
   if (this.props.visible.length === 0 && this.props.empty !== false) {
      // Can't find anything
      return (
        <ul
          className={css.list}
        >
          <TypeaheadOption empty={this.props.empty} />
        </ul>
      );
    }

    let listClass = this.hasOptions() ? css.list : classNames(css.list, css.hidden)
    let listStyle = this.getDropdownStyle();
    return (
        <ul
          style={listStyle}
          className={classNames('typeahead--list', listClass)}
        >
          {this.props.visible
            .filter((item) => item && item.score && item.original)
            .sort((a, b) => b.score - a.score)
            .map((option, index) => {
              var key = this.props.extract(option.original);
              return (
                <TypeaheadOption
                  key={key}
                  selected={this.props.selected === index}
                  option={option}
                  onClick={this.props.onSelected.bind(null, option)} />
                );
            })}
        </ul>
      );
  }
}

// Type checking
const {number, string, array, bool, func} = React.PropTypes;
TypeaheadList.propTypes = {
  selected:     number,
  value:        string,
  visible:      array,
  empty:        bool,
  extract:      func,
  onSelected:   func
}

/**
 * Defaults
 * @static
 * @type {Object}
 */
TypeaheadList.defaultProps = {
  empty: false,
  visible: [],
  onSelected: function(){}
};

/**
 * Stypes to hide the text input
 * @type {String}
 */
const HIDDEN_TEXTAREA_STYLE = `
  height:0;
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0
`;

const SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

/**
 * Reference to text area we use to calculate the styles
 */
let hiddenTextarea;

function calculateNodeStyling(node) {
  if (!node) {
    throw new TypeError('InvalidArgument: missing argument');
  }
  let style = window.getComputedStyle(node);

  let boxSizing = (
    style.getPropertyValue('box-sizing') ||
    style.getPropertyValue('-moz-box-sizing') ||
    style.getPropertyValue('-webkit-box-sizing')
  );

  let paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  );

  let borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  let sizingStyle = SIZING_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  let nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };

  return nodeInfo;
}

export default function nodeHeight(uiTextNode, minRows = null, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  // Copy all CSS properties that have an impact on the height of the content in
  // the textbox
  let {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode);

  // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content
  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
  hiddenTextarea.value = uiTextNode.value ? uiTextNode.value : '';

  let result = {
    minHeight: -Infinity,
    maxHeight: Infinity,
    height: hiddenTextarea.scrollHeight
  }

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    result.height = result.height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    result.height = result.height - paddingSize;
  }

  // measure height of a textarea with a single row
  hiddenTextarea.value = '';
  let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  const modifiers = [{
    fn: 'max',
    value: maxRows,
    prop: 'maxHeight'
  },
  {
    fn: 'min',
    value: minRows,
    prop: 'minHeight'
  }];

  modifiers
    .filter((modifier) => modifier.value !== null)
    .forEach((mod) => {
      let rowHeight = singleRowHeight * mod.value;
      if (boxSizing === 'border-box') {
        rowHeight = rowHeight + paddingSize + borderSize;
      }
      result.height = Math[mod.fn](rowHeight, result.height);
      result[mod.prop] = rowHeight;
    });

  return result;
}

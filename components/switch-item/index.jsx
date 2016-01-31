import React, {PropTypes} from 'react';
import classNames from 'classnames';
function noop() {}

const SwitchItem = React.createClass({
  propTypes: {
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  },
  getDefaultProps() {
    return {
      checked: false,
      disabled: false,
      onChange: noop,
    };
  },
  _onSwitchChange(e) {
    const checked = e.target.checked;
    this.props.onChange.call(this, checked);
  },
  render(){
    let { name, checked, disabled, children, className } = this.props;
    const wrapCls = classNames({
      'am-list-item': true,
      [className] : className
    });

    return (
      <div className={wrapCls}>
        <div className="am-list-content">{children}</div>
        <div className="am-switch">
          <input type="checkbox" name={name} className="am-switch-checkbox" {...(disabled ? {disabled:'disabled'} : '') } checked={checked} onChange={this._onSwitchChange}/>
          <label className="am-switch-label">
            <div className="am-switch-inner"></div>
            <div className="am-switch-switch"></div>
          </label>
        </div>
      </div>
    );
  }
});

module.exports = SwitchItem;

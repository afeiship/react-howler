import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import { Howl, Howler } from 'howler';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {};
  }

  componentDidMount() {
    this._instance = new Howl({
      src: ['http://kolber.github.io/audiojs/demos/mp3/juicy.mp3']
    });
    this._instance.play();
    // window.ins = this._instance;
  }

  render() {
    const { className, ...props } = this.props;
    return <div className={classNames('react-howler', className)} {...props} />;
  }
}

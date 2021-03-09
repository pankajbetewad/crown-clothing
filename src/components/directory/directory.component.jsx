import React, { Component } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import DIRECTORY_DATA from './directory.data';

class Direcotry extends Component {
  constructor() {
    super();
    this.state = {
      sections: DIRECTORY_DATA,
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Direcotry;

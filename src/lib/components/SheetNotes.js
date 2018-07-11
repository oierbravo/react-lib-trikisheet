import React from 'react';
import Note from './Note'
import './sheetnotes.css';

class SheetNotes extends React.Component {
  render() {
    const listNotes = this.props.notes.map((val,index) =>
      <Note zenbakia={val.zenbakia} type={val.type} norabidea={val.norabidea} key={index} tune={this.props.tune}/>
      );
    return (
      <div className="sheet-notes">
        {listNotes}
      </div>
    );
  }
}

export default SheetNotes

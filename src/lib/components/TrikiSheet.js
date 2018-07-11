import React from 'react';
import SheetInfo from './SheetInfo';
import SheetNotes from './SheetNotes';

class TrikiSheet extends React.Component {
  constructor(props) {
    super(props);
    if(typeof props.tune === 'undefined'){
      this.tune = "BbEb";
    }
    if(typeof props.sheet === 'undefined'){
      this.sheet = {
        info: {
          title:"Gure super abestia"
        },
        notes: [{zenbakia:23,norabidea:'Ireki',type:'nota'},{zenbakia:21,norabidea:'Ireki',type:'nota'},{zenbakia:19,norabidea:'Ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'Itxi',type:'nota'},{type:'silence'},{zenbakia:23,norabidea:'Ireki',type:'nota'},{type:'silence'},{zenbakia:22,norabidea:'Itxi',type:'nota'}]
      }
    } else if(typeof props.sheet === 'string') {
      console.log(props.sheet)
      var sheetArray = props.sheet.split(',');
      let sheetObj = [];
      sheetArray.forEach(function (element, index) {
        var multiple = element.split('-');
        multiple.forEach(function (el, index) {
          var note = {}
          if(el.charAt(0) === '#'){
            note.type = 'linebreak';
            
          } else if(el.charAt(0) === '+'){
            note.type = 'nota';
            note.norabidea = 'ireki';
            note.zenbakia = el.substring(1);
          } else {
            note.zenbakia = el;
            note.type = 'nota';
            note.norabidea = 'itxi';
          }
          sheetObj.push(note);
        });
        sheetObj.push({type:'silence'});
      });
      console.log(sheetObj)
      this.sheet = {
        info: {
          title:""
        },
        notes: sheetObj
      }
    } else {
      this.sheet = props.sheet;
    }
  }

  render() {
    return (
      <div className="sheet">
        <SheetInfo info={this.sheet.info}></SheetInfo>
        <SheetNotes notes={this.sheet.notes} tune={this.tune}></SheetNotes>
      </div>
    );
  }
}
export default TrikiSheet

import React from 'react';
import './note.css';
import notakMap from '../maps/Notak.json';

class Note extends React.Component {
  constructor(props) {
    super();
    this.state = {
      number: props.zenbakia,
      direction: props.norabidea,
      type: props.type,
      tune: props.tune
    }
    this.notakMap = notakMap;
    if(props.type === 'nota'){
      this.state.name = this.getName();
    }
    this.getNumber = this.getNumber.bind(this);
    this.getName = this.getNumber.bind(this);
    this.getAlternative = this.getAlternative.bind(this);
    this.onClickMe = this.onClickMe.bind(this);
  }


  getNumber() {

  }
  getName() {
    return notakMap[this.state.tune][this.state.number][this.state.direction];
  }
  getAlternative(){
   var alternatives = []
   console.log(this.notakMap[this.state.tune]);
   this.notakMap[this.state.tune].keys(this.notakMap[this.state.tune]).map(function(item, index) {

   //notakMap[this.state.tune].forEach(function(index,item){
     console.log(item);
       if (item.Itxi === this.state.name || item.Ireki === this.state.name){
         if(this.state.number !== item.Zenbakia){
           alternatives.push(item);
         }
       }

     }
    )
   console.log(alternatives);
  }
  onClickMe() {
    //console.log(this);
    //this.getAlternative();
  }
  render() {
    const cssArray = [this.state.type,'circle'];
    if(this.state.type === 'nota'){
      cssArray.push(this.state.direction.toLowerCase());
    }
    const cssClass =  cssArray.join(' ');
    return (
      <div  onClick={this.onClickMe} className={cssClass}>
        {this.state.number}
      </div>
    );
  }
}
export default Note

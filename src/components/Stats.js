import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

class Stats extends Component {
  timeDiff(date){
    let today = new Date().getTime();
    let other_date = new Date(date).getTime();
    let diff = Math.abs(today - other_date);
    let days = Math.floor(diff/ (1000*3600*24));
    let years = Math.floor(days/365);
    days -= years *365;
    let months = Math.floor(days/31);
    days -= months*31;
    return `${years} years, ${months} months, and ${days} days `
  }


  render(){
    return (
      <div>
        <h3>{this.props.date}</h3>
        <h4>Congrats on being {this.timeDiff(this.props.date)} old!</h4>
        <img src={partyPopper} alt="party-popper" className="party-popper"/>
      </div>
    )
  }
}

export default Stats;

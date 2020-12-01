import React, { Component } from 'react'
import '../App.css';

export default class AdditionalInfo extends Component {

    
    render() {
       
const students = this.props.items;
const arr = students['grades'];
            



const grades = [];

for (const [index, value] of arr.entries()) {
    grades.push(<li key={index}>Test {index}: <span>{value}%</span></li>)
}


        return (
            <div>
                
                <ul className="additional-info">
                   {grades}
                </ul>
            </div>
        )
    }
}

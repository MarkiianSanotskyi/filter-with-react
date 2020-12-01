import React, { Component, Fragment } from 'react'

import '../App.css';

import AdditionalGrades from './AdditionalGrades';
import TagsComponent from './TagsComponent';

export default class StudentInfo extends Component {

  state = {
    collapsed: true
  };


  handleCollapse = () => this.setState({ collapsed: !this.state.collapsed });

render() {
  const { student, tags, addTag } = this.props;
  const { collapsed } = this.state;
  const averageGrade = student.grades.reduce((total, grade) => total += parseInt(grade), 0) / student.grades.length;
  const expandSign = "but button-plus";
  const collapseSign = "but button-minus";

  return (
    <div className="student">
      <div className="student-img">
      <img className="student-picture" src={student.pic} alt={`${student.firstName} ${student.lastName}`} />
      </div>
      <div className="student-info content-box">
  <div className="student-info-name">{`${student.firstName} ${student.lastName}`}
    <button className="collapse-button" onClick={this.handleCollapse}> <i className={collapsed ? expandSign : collapseSign}></i></button>
  </div>
  <ul className="student-info-full">
  <li className="student-info-li">Email: {student.email}</li>
  <li className="student-info-li">Company: {student.company}</li>
  <li className="student-info-li">Skill: {student.skill}</li>
  <li className="student-info-li">Average: {averageGrade} %</li>
  </ul>
  {
    collapsed ? null : 
    <Fragment>
        <AdditionalGrades id={student.id} grades={student.grades} />
        <TagsComponent id={student.id} tags={tags} addTag={addTag} />
    </Fragment>
  }
      </div>
    </div>
  )
}



  
}

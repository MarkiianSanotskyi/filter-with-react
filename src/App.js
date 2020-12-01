import React, { Component } from 'react';

import './App.css';
import api from './apis/api';
import Searchbar from './components/Searchbar';
import StudentInfo from './components/StudentInfo';


 
class App extends Component {
  state = {
    searchName: "",
    searchTag: "",
    students: [],
    tags: []
  };

  getTags = studentId => this.state.tags.filter(tag => tag.studentId === studentId);

  addTag = (studentId, label) => this.setState({
    tags: [
      ...this.state.tags,
      {
        tagId: `${studentId}-${new Date().getTime()}`,
        studentId,
        label
      }
    ]
  });

  handleSearchChange = e => this.setState({ [e.target.id]: e.target.value });

  componentDidMount() {
    api.get()
      .then(res => {
        this.setState({ students: res.data.students});
      })
      .catch(err => console.log(err));
  };

  renderBox = () => {
    const { students, searchName, searchTag } = this.state;
    const studentComponent = student => {
      return ( 
        <StudentInfo key={student.id} student={student} tags={this.getTags(student.id)} addTag={this.addTag} />
        )
      }
  
      return students
        .filter(student => {
          const name = `${student.firstName} ${student.lastName}`;
          const searchNameRE = new RegExp(searchName, "i");
          const nameFound = name.match(searchNameRE);

          let tagFound = true;
          if (searchTag !== "") {
            tagFound = false;
            const tags = this.getTags(student.id);
            const searchTagRE = new RegExp(searchTag, "i");
            if (tags.length > 0) tagFound = tags.some(tag => tag.label.match(searchTagRE));
          }

          return nameFound && tagFound;
        })
       
        .map(student => studentComponent(student));
    }
  
    render() {
      return (
        <div className="container">
          <div className="view">
            <Searchbar
              searchName={this.state.searchName}
              searchTag={this.state.searchTag}
              handleSearchChange={this.handleSearchChange}
            />
            <div className="render-box">
              {this.renderBox()}
            </div>
          </div>
        </div>
      );
    };
  }
  
  export default App;

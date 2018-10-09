import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then( res => {
      console.log(res.data);
      this.setState({
        students: res.data
      })
    })
  }
  render() {
    const studentList = this.state.students.map((x,i) => 
      <Link key={i} to={`/student/${x.id}`}>
        <h3>{x.first_name} {x.last_name}</h3>
      </Link>
    );
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {studentList}
      </div>
    )
  }
}
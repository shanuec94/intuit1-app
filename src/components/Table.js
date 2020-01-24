import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cause1: '',
      cause2: '',
      cause3: '',
      id1: '',
      id2: '',
      level: '',
      level2: '',
      name1: '',
      name2: '',
      hello: ''
    };
  }


api(){
  axios.get('http://192.168.1.62:8080/poc-0.0.1-SNAPSHOT/getMsg')
      .then(response => {
        console.log(response.data)
        if (response.status === 200 && response != null) {
          this.setState({
            hello: response.data,
            
          });
        } else {
          console.log('problem');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    axios.get('http://192.168.1.62:8080/poc-0.0.1-SNAPSHOT/getProp')
      .then(response => {
        console.log(response.data)
        if (response.status === 200 && response != null) {
          this.setState({
            cause1: response.data.cause1,
            cause2: response.data.cause2,
            cause3: response.data.cause3,
            id1: response.data.id1,
            id2: response.data.id2,
            level: response.data.level,
            leve2: response.data.leve2,
            name1: response.data.name1,
            name2: response.data.name2
          });
        } else {
          console.log('problem');
        }
      })
      .catch(error => {
        console.log(error);
      });

      this.api();
  }

  render() {
    return (
      <div>
        <h4>{this.state.hello}</h4><br/>
        <p>cause1: {this.state.cause1}</p>
        <p>cause2: {this.state.cause2}</p>
        <p>cause3: {this.state.cause3}</p>
        <p>id1: {this.state.id1}</p>
        <p>id2: {this.state.id2}</p>
        <p>level1: {this.state.level1}</p>
        <p>level2: {this.state.level2}</p>
        <p>name1: {this.state.name1}</p>
        <p>name2: {this.state.name2}</p>
      </div>
    )
  }
}

export default Table;
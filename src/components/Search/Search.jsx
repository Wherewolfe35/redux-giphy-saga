import React, { Component } from 'react';
import {connect} from 'react-redux';

class Search extends Component{

render(){

    return (
      <div>
        <h1>Hello from Search Component</h1>
      </div>
    );

}
}

export default connect()(Search);
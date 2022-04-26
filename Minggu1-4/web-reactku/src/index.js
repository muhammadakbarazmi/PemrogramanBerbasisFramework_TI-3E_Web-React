import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App';
//import BlogPost from './container/BlogPost/BlogPost';
import reportWebVitals from './reportWebVitals';
import BlogPostMahasiswa from './container/BlogPost/BlogPostMahasiswa';

//import HelloComponent from './component/HelloComponent';

//import Test from './Test';
// function HelloComponent(){
//   return <p>HelloComponent</p>
// }

// class StateFullComponent extends React.Component {
//   render() {
//     return <p>Statefull Component</p>;
//   }
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//class StateFullComponent extends React.Component { 
//  render() { 
//    return <p>StateFullComponent</p> }
//  }

//ReactDOM.render(<BlogPost />, document.getElementById('content'));
ReactDOM.render(<BlogPostMahasiswa />, document.getElementById('content'));

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
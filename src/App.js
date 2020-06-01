import React, {Component} from 'react';
import './App.css';
import Login from './Components/Login/login';
import Main from './Components/Main/Main';
import Filter from './Components/Filter/Filter';
import Posts from './Components/Posts/Posts';

let myName = '';
const API = 'http://hn.algolia.com/api/v1/search?';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '' , 
      signIn: false, 
      posts: [],
      searchField: '',
      pageNo: 0 ,
      tags: 'story' ,
      sort: 'byPopularity' ,
      dataRange: 'all'
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => {this.setState({posts: data.hits})});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchField !== this.state.searchField) {
      console.log('Search called')
      fetch(API + `query=${this.state.searchField}`)
      .then(response => response.json())
      .then(data => {this.setState({posts: data.hits})});
    }
    if(prevState.pageNo !== this.state.pageNo) {
      console.log('Page called')
      fetch(API + `query=${this.state.searchField}&page=${this.state.pageNo}`)
      .then(response => response.json())
      .then(data => {this.setState({posts: data.hits})});
    }
    if(prevState.tags !== this.state.tags) {
      console.log('Tag changed')
      fetch(API + `query=${this.state.searchField}&tags=${this.state.tags}`)
      .then(response => response.json())
      .then(data => {this.setState({posts: data.hits})});
    }
  }

  onNameChange = (event) => {
    myName=event.target.value;
  }

  onSignin = (event) => {
    this.setState({signIn: true})
    this.setState({name: myName})
  }

  onSerchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  currentPageInc= () => {
    this.setState({pageNo: this.state.pageNo+1})
    console.log(this.state.pageNo)
  }

  currentPageDec = () => {
    if(this.state.pageNo>=1)
    this.setState({pageNo: this.state.pageNo-1})
    console.log(this.state.pageNo)
  } 

  // onTagChange = () => {
  //   if(this.state.tags === 'story')
  //     this.setState({tags: 'comment'})
  //   if(this.state.tags === 'comment')
  //     this.setState({tags: 'story'})
  // } 

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          this.state.signIn === false ? 
          <Login nameChange={this.onNameChange} onSignin={this.onSignin}/>
          : 
          <div>
          <Main myName={myName} searchChange={this.onSerchChange} />
          <Filter tagChange={this.state.tags}/>
          {Object.keys(posts).map(key => <Posts key={key} body={posts[key]}/>)}
          <div className='flex items-center justify-center pa3'>
          <button onClick={this.currentPageDec} className='f6 link ph3 pv2 mb2 dib white bg-orange'>Previous</button>
          <button onClick={this.currentPageInc} className='f6 link ph3 pv2 mb2 dib white bg-orange'>Next</button>
          </div>
          </div>
        }
      </div>
    );
  }
}

export default App;

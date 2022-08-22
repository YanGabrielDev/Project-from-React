import './Styles.css';
import { PostCard } from '../../components/PostCard/index';
import { loadPosts } from '../../utils/loadPosts';
import { Component } from "react"
import { Posts } from '../../components/Posts/index';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
class App extends Component {
  state = {
    counter: 0,
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
    searchValue: ''
  };
  
  async componentDidMount(){
    await this.loadPosts()
  }
  loadPosts = async () => {
    const postsAndPhotos = await loadPosts()
    const {page, postsPerPage} = this.state
    this.setState({
      posts: postsAndPhotos.slice(0, 2),
      allPosts: postsAndPhotos
    })
  }
  loadMorePosts = () => {
   const{page, postsPerPage, allPosts, posts} = this.state 
   const nextPage = page + postsPerPage
   const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage)
   posts.push(...nextPosts)
   this.setState({posts, page: nextPage})
  }
  componentDidUpdate(){
    

  }
 componentWillUnmount(){
 }
  handleChange = (e) => {
    const {value} = e.target;
    this.setState({searchValue: value})
  }


  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length
    const filterPosts = !!searchValue ? posts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts;


    return (
    <section className='container'> 
        <div className='searchContainer'>
        <Input onChange={this.handleChange} value={searchValue} type="search"/>
     {filterPosts.length === 0 && (
       <p>não existem postes</p>
       )}
       </div>
     <Posts posts={filterPosts}/>
     <div className="button-container">
      {!!searchValue && (
        <Button 
        disabled={noMorePosts}
        onClick={() => this.loadMorePosts()} 
        text="Load more posts" />

      )}
     </div>
      </section>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

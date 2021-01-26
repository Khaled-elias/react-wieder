import {
   
    Link
  } from "react-router-dom";
  import Header from './Header'
const Blog = () => {
    return ( 
        <div >
             <Header name="Blog" myColor="green"/>
            <h1>Blog</h1>
            <ul>
                <li><Link to="/blog/0">Blog 1</Link></li>
                <li><Link to="/blog/1">Blog 2</Link></li>
                <li><Link to="/blog/2">Blog 3 </Link></li>
            </ul>
        </div>
     );
}
 
export default Blog;
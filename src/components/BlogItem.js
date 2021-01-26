import {

    useParams
  } from "react-router-dom";
  
  const BlogItem = () => {
    let {test} =useParams();
      return ( 
          <div>
              
              <h1>BlogItem {test} </h1>
              <p style={{color: 'yellow'}}> {Math.random()}</p>
          </div>
       );
  }
   
  export default BlogItem;
import React, {useEffect, useState} from 'react'
import axios from 'axios';
// import './Navbar.css'



const NewsPageItem = (props) => {

  const [ newsUpdateItem, setnewsUpdateItem ] = useState([]);

  // console.log("props from newspageItem", typeof props.newsStoriesId)
  console.log("newsUpdateItem from newspageItem", newsUpdateItem)
  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${Number(props.newsStoriesId)}.json?print=pretty`
   )
  
   .then(response => {
    // return response.data.jobs;
    setnewsUpdateItem(response.data)
  })
  }, [])

  return (
    <div >
      <button>New</button>
      <button>Past</button>
      
    </div>
  );
};

export default NewsPageItem

import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsPageItem from './NewsPageItem'
// import './Navbar.css'



const NewsPage = () => {

  const [ newsUpdate, setnewsUpdate ] = useState([]);

  console.log("newsUpdate", newsUpdate)

  const renderNewsPageItem = (arr) => {
    return arr.map((card, index) => (
      <NewsPageItem
        key={index}
        newsStoriesId={card}
        
      />
    ));
  };


  useEffect(() => {
    axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
   )
  
   .then(response => {
    // return response.data.jobs;
    setnewsUpdate(response.data)
  })
  }, [])

  return (
    <div >
      <button>New</button>
      <button>Past</button>
      {renderNewsPageItem(newsUpdate)}
      
    </div>
  );
};

export default NewsPage

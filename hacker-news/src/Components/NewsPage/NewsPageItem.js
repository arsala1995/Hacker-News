import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './NewsPageItem.css'



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
    <div className="tweet-container">
      <article >
        <header>
          <h2>{newsUpdateItem.title}</h2>
        </header>
       {newsUpdateItem.text ? (
          <p name="text" className="tweet-given">
            {newsUpdateItem.text}
          </p>
       ) : (
        <p name="text" className="tweet-given">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
        </p>
        )}
        <div className="submission2">
          <output type="date">10 days ago | {newsUpdateItem.descendants} comments </output>
        </div>
      </article>
      
    </div>
  );
};

export default NewsPageItem

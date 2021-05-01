import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './NewsPageItem.css'
import moment from 'moment';


// moment().format();

const NewsPageItem = (props) => {

  const [ newsUpdateItem, setnewsUpdateItem ] = useState([]);
  // console.log("time calculated: ",moment(newsUpdateItem.time).format() )

  console.log("props from newspageItem", props)


  const milliseconds = newsUpdateItem.time * 1000 // 1575909015000

  const dateObject = new Date(milliseconds)

  // console.log("dateObject from newspageItem",moment(dateObject).fromNow())

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
          <output type="date">{moment(dateObject).fromNow()} | {newsUpdateItem.descendants} comments </output>
        </div>
      </article>
      
    </div>
  );
};

export default NewsPageItem

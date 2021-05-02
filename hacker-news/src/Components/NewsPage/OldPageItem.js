import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './OldPageItem.css'
import moment from 'moment';


// moment().format();

const NewsPageItem = (props) => {

  const [ newsUpdateItem, setnewsUpdateItem ] = useState([]);
  const milliseconds = newsUpdateItem.time * 1000 // 1575909015000
  const dateObject = new Date(milliseconds)
  const finalTime = moment(dateObject).fromNow();
  const finalTimeArray = finalTime.split(/(\s+)/);

   //fetch data using the id passed from NewsPage component and then print the story
  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${Number(props.newsStoriesId)}.json?print=pretty`
   )

  
   .then(response => {
      // setTimeout(() => {
        setnewsUpdateItem(response.data)
      // }, 2000);
  })
  .catch((error) => console.error('Error', error));
  }, [])

  return (
   <>
    {finalTimeArray && (Number(finalTimeArray[0]) > 9 && finalTimeArray.includes('hours')) ? (
      <div className="article-container">
        <article >
          <a target="_blank" href={newsUpdateItem.url}>
              <header >
                {newsUpdateItem.title}
              </header>
            {newsUpdateItem.text ? (
                <p name="text" className="article-given">
                  {newsUpdateItem.text}
                </p>
            ) : (
              <p name="text" className="article-given">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
              </p>
              )}
              <div className="submission2">
                <output type="date">{moment(dateObject).fromNow()} | {newsUpdateItem.descendants} comments </output>
              </div>
            </a>
        </article>
        
      </div>
      ) : null}
    </>
  );
};

export default NewsPageItem

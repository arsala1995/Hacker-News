import React, {useEffect, useState, Fragment} from 'react'
import axios from 'axios';
import NewsPageItem from './NewsPageItem'
import OldPageItem from './OldPageItem'
// import './Navbar.css'



const NewsPage = () => {

  const [ newsUpdate, setnewsUpdate ] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [selected, setSelected] = useState('New');
  const [toggleState, setToggleState] = useState(1);

  console.log("newsUpdate", newsUpdate)

  const renderNewsPageItem = (arr, selectState) => {
    if(selectState === "New") {
      return arr.map((card, index) => (
        <NewsPageItem
          key={index}
          newsStoriesId={card}
          state={selectState}
          
        />
      ));
    } else {
        return arr.map((card, index) => (
          <OldPageItem
            key={index}
            newsStoriesId={card}
            state={selectState}
            
          />
        ));
    }
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
    <div className="news-container">
      <div className="row">
        <div className="tab-row">
          <div className="tab-switcher">
        
            <button
              onClick={() => {
                toggleTab(1);
                setSelected('New');
              }}
              className={toggleState === 1 ? 'tab active-tab' : 'tab'}
            >
              New
            </button>
            <button
              onClick={() => {
                toggleTab(2);
                setSelected('Past');
              }}
              className={toggleState === 2 ? 'tab active-tab' : 'tab'}
            >
              Past
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10"> 
        {/* {renderNewsPageItem(newsUpdate)} */}

        {((selected && selected === 'New')) && (
          <Fragment>
           {renderNewsPageItem(newsUpdate, selected)}
          </Fragment>
        )}  

          {((selected && selected === 'Past')) && (
          <Fragment>
           {renderNewsPageItem(newsUpdate, selected)}
          </Fragment>
        )}    

      </div>    
    </div>
  );
};

export default NewsPage

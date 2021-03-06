import React, {useEffect, useState, Fragment} from 'react'
import axios from 'axios';
import NewsPageItem from './NewsPageItem'
import OldPageItem from './OldPageItem'
import './NewsPage.css'
import Nav from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const NewsPage = () => {

  const [ newsUpdate, setnewsUpdate ] = useState([]);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [selected, setSelected] = useState('New');
  const [toggleState, setToggleState] = useState(1);
  const [visible, setVisible] = useState(3);

//function to check if it is new or past selection will call that component accordingly to render story
  const renderNewsPageItem = (arr, selectState) => {
    if(selectState === "New") {
      return arr.slice(0, visible).map((card, index) => (
        // return arr.map((card, index) => (
        <NewsPageItem
          key={index}
          newsStoriesId={card}
          state={selectState}
          
        />
      ));
    } else {
        return arr.slice(0, visible).map((card, index) => (
          // return arr.map((card, index) => (
          <OldPageItem
            key={index}
            newsStoriesId={card}
            state={selectState}
            
          />
        ));
    }
  };

//to render more stories, it might need for you to click load more several times until it will load more stories, due to time i was not able to fix this bug.
  const loadMoreItems = () => {
    setVisible((prevValue) => prevValue + 3)
  }

//to fetch all the newstories from the hacker news api
  useEffect(() => {
    axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
   )
   .then(response => {
    setnewsUpdate(response.data)
  })
  .catch((error) => console.error('Error', error));
  }, [])

  return (
    <div className="news-container">
      <Nav />
      <div className="row">
        <div className="tab-row">
          <div className="tab-switcher">
        
            <button
              onClick={() => {
                toggleTab(1);
                setSelected('New');
              }}
              className={toggleState === 1 ? 'active-tab' : 'tab'}
            >
              New
            </button>
            <button
              onClick={() => {
                toggleTab(2);
                setSelected('Past');
              }}
              className={toggleState === 2 ? 'active-tab' : 'tab'}
            >
              Past
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-10"> 

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
      <button className="load-more-container" onClick={loadMoreItems}>Load more</button>

      <Footer />   
    </div>
  );
};

export default NewsPage

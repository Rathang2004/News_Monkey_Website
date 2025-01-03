import React, { Component } from 'react'
import NewsItem from './NewsItem'

// "https://newsapi.org/v2/top-headlines?country=us&apiKey=f471c3b4753f4071b733bb50f8220404"

export class NewsParentComponent extends Component {

  constructor()
  {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=19&apiKey=f471c3b4753f4071b733bb50f8220404");
    let jsonData = await data.json();
    console.log(jsonData);
    this.setState({articles: jsonData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h1>News/Scraper - Top Headlines</h1>
        <div className='row'> 
          {this.state.articles.map((element) => {
            return (
            element.urlToImage !== null && element.title !== null && element.description !== null ?
              <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageURL={element.urlToImage} newsUrlID={element.url}/>
              </div> : null
            )
          })}
        </div> 
      </div>
    )
  }
}

export default NewsParentComponent

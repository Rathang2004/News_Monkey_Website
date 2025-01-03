import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageURL, newsUrlID} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageURL} className="card-img-top" alt="..." style={{
            height: "200px",
            objectFit: "cover", 
          }}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrlID} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

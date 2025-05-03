import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,more,author,date} = this.props;
    return (
      <div>
         <div className="card" style={{width: "18rem"}}>
            <img src={imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            
                <h5 className="card-title">{title}<span className="badge rounded-pill text-bg-info">Info</span></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className='text-muted'>By {author} on {date.slice(0,10)}</small></p>
                <a  rel="noreferrer" href={more} target='_blank' className="btn btn-dark">Read More</a>
            </div>
         </div>
      </div>
    )
  }
}

export default Newsitem

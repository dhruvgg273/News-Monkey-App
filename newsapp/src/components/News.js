import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes  from 'prop-types';
export class News extends Component {
   static defaultProps={
       country:'us',
       pagesize:8,
       category:'business'
   }

   static propTypes ={
     country:PropTypes.string,
     pagesize:PropTypes.number,
     category:PropTypes.string
   }
    constructor(){
        super();
        this.state={
            articles : [],
            loading : false,
            page:1
        }
    }
    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c43809253e7642e5a4c0bc3eb1a23e18&page=1&pageSize=${this.props.pagesize}`;
        let data= await fetch(url);
        let parsed_data=await data.json();
        console.log(parsed_data);
        this.setState({articles:parsed_data.articles , totalresult : parsed_data.totalResults})
    }
    handlenextclick = async () => {
        if(Math.ceil(this.state.totalresult/this.props.pagesize)>this.state.page){
         let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c43809253e7642e5a4c0bc3eb1a23e18&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
         this.setState({loading:true})
        let data= await fetch(url);
        let parsed_data=await data.json();
        console.log(parsed_data);
        this.setState({
            articles:parsed_data.articles,
            page : this.state.page+1,
            loading:false
        })
    }
    }
    handleprevclick =  async () => {
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c43809253e7642e5a4c0bc3eb1a23e18&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data= await fetch(url);
        let parsed_data=await data.json();
        console.log(parsed_data);
        this.setState({
            articles:parsed_data.articles,
            page : this.state.page-1,
            loading:false
        })
    }
  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>TOP HEADLINES</h1>
        {this.state.loading && <Spinner></Spinner>}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((element)=>{
                  return <div key={element.url} className='col md-5'>
                    <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} more={element.url} author={element.author} date={element.publishedAt} />
                    </div>
            })}
        </div>
        < div class="d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handleprevclick}> Previous</button>
         <button disabled={this.state.page+1 > Math.ceil(this.state.totalresult/this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.handlenextclick}> Next </button>
        </div>
      </div>
    )
  }
}

export default News

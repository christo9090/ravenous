import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    // this.onKeyDown = this.onKeyDown.bind(this)
  }

  getSortByClass(sortByOption) {
    return (this.state.sortBy === sortByOption ? 'active' : '');
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
  }

  // onKeyDown(event) {
  //   if (event.key === 'Enter') {
  //       this.handleSearch();
  //     }
  // }

  handleSearch(event) {
    if (this.state.term !== '' && this.state.location !== '') {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault()
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>
    });
  }

  render() {
    return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul onClick={this.handleSearch}>
          {this.renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={this.handleTermChange} />
        <input placeholder="Where?" onChange={this.handleLocationChange} />
      </div>
      <div className="SearchBar-submit" onClick={this.handleSearch} >
        <a>Let's Go</a>
      </div>
    </div>
    )
  }
};
//export Component

export default SearchBar;

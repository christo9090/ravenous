import React from 'react';
import './Business.css';

class Business extends React.Component {

  render() {
    return (
      <div className="Business">
        <a href={this.props.business.yelpPage} target="_blank" rel="noopener noreferrer">
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt=''/>
          </div>
        </a>
        <h2> {this.props.business.name} </h2>
        <div className="Business-information">
          <div className="Business-address">
            <a href={`https://www.google.com/maps/place/${this.props.business.address}, ${this.props.business.city}, ${this.props.business.state} ${this.props.business.zipCode}`} target="_blank" rel="noopener noreferrer">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{this.props.business.state} {this.props.business.zipCode}</p>
            </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    )
  };
};

//export Component

export default Business;

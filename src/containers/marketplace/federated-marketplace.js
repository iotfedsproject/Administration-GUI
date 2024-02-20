import React, { Component ,useEffect } from "react";
import axios from "axios";
import VisibilitySensor from 'react-visibility-sensor';
import FederationMarketPlaceItem from "./federated-marketplace-item";

import { search } from "./utils";
import Scroll from './Scroll';
import {federatedMarketPlaceItemWidth} from './marketPlaceDefinitions';


axios.defaults.withCredentials = true;

const headers = {
    'X-Requested-With': 'XMLHttpRequest'
};
const ROOT_URL = "/administration";

const handleFederatedMarketPlaceClick = (id) => {
    alert("Selected federated market place with id: " + id);

 }

class FederatedMarketPlace extends Component {
  state = {
    federatedMarketPlaceItems: [ {id: "1",name:"Smart Environment",description:"description1",details:"details1"},
                                 {id: "2",name:"Smart City",description:"description2",details:"details2"},
                                 {id: "3",name:"Smart Agriculture",description:"description3",details:"details3"},
                                 {id: "4",name:"Smart Traffic",description:"description4",details:"details4"},
                                 {id: "5",name:"Weather Station",description:"description5",details:"details5"},
                                 {id: "6",name:"Smart Parking",description:"description6",details:"details6"}],
    federatedMarketPlaceProducts: null,
    loading: false,
    value: ""
  };
//----------------------------------------------------------------------------------------------------
  constructor(){
   super();
  }
//----------------------------------------------------------------------------------------------------
 fetchFederatedMarketplaces = (val) => {
    const url =  `${ROOT_URL}/user/cpanel/getMovies`;
    //'https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b';

    const config = {
        url: url,
        method: 'get',
        headers: headers
    };

    const request = axios.request(config);

    return {
        payload: request
    };
}
//----------------------------------------------------------------------------------------------------
  search = async val => {
    this.setState({ loading: true });
    const results = await search(
    `${ROOT_URL}/user/cpanel/getMovies`
      //`https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    //const movies = results;
    this.setState({ results, loading: false });
  };
//--------------------------------------------------------------------------------------------------
  onChangeHandler = async e => {
    this.search(e.target.value);
    //this.fetchFederatedMarketplaces(e.target.value);
    this.setState({ value: e.target.value });
  };
//--------------------------------------------------------------------------------------------------
  get renderFederatedMarketplaceItems() {

    let federatedMarketPlaceItems = <h1>There's no federatedMarketPlaceItems</h1>;

    if (this.state.federatedMarketPlaceItems) {
     {/*federation-panel-body.js*/}
      {federatedMarketPlaceItems = this.state.federatedMarketPlaceItems.map(member =>
                        <FederationMarketPlaceItem
                            id={member.id}
                            name={member.name}
                            description={member.description}
                            details={member.details}
                            handleFederatedMarketPlaceClick = {handleFederatedMarketPlaceClick}
                            itemWidth = {federatedMarketPlaceItemWidth}
                        />
      )}
    }

    return federatedMarketPlaceItems;
  }//end
  //--------------------------------------------------------------------------------------------------
    get renderFederatedMarketplaceProducts() {

      let federatedMarketPlaceProducts = <h1>There's no federatedMarketPlace Products</h1>;

      if(this.state.federatedMarketPlaceProducts) {
       {/*federation-panel-body.js*/}
        {federatedMarketPlaceProducts = this.state.federatedMarketPlaceProducts.map(product =>
            <FederationMarketPlaceItem
              id={product.id}
              name={product.name}
              description={product.description}
              details={product.details}
              price={product.price}
             />
        )}
      }

      return federatedMarketPlaceProducts;
    }//end
//-------------------------------------------------------------------------------
   onChange = (isVisible) => {
      if (isVisible) {
        // Component became visible
        console.log('Component is now visible');
        //alert('Component is now visible');
      }
    }

  render() {
    return (
     <VisibilitySensor onChange={this.onChange}>
     {/* <div className="tc bg-white ma0 pa4 min-vh-100">*/}
     <div className="container-fluid movie-app">
      {/* <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />*/}
       <div className='row'>
        {this.renderFederatedMarketplaceItems}
       </div>
      </div>
      </VisibilitySensor>
    );
  }
}

export default FederatedMarketPlace;
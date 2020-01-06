import React, { Component } from 'react';
import '../css/style.css';
import Navbar from './navbar';
import { rooms } from './data';

class searchPage extends Component{
    state = {
        searchLocation : null
    }

    initCall = () => {
        let searchLoc = this.props.match.params.searchLocation;
        this.setState({
            searchLocation : searchLoc
        })
        
    }

    populateSearchContent = (searchLoc) => {
        //let searchLoc = this.props.match.params.searchLocation;
        const tempSearchContent = rooms.filter(room => {
            return searchLoc !== null && room.location.toLowerCase().indexOf(searchLoc.toLowerCase()) !== -1;
        })
        const searchContent = tempSearchContent !== null && tempSearchContent.length > 0 ? tempSearchContent.map((room, index) => {
        return (<div className="searchContent" key={index}>
            <div roomindex={ index }>
                <div className="searchContentImageSection">
                    <a href="#">
                        <img className="searchContentImage" alt={room.name} src={room.imgURL} />
                    </a>
                </div>
                <div className="searchContentDescription">
                    <div className="searchContentDescName">{room.name}</div>
                    <div className="searchContentDescRate">₹ {room.rent}/ month</div>
                    <div className="searchContentFullDesc">{room.bedCount} Beds | {room.bathCount} Bath | {room.sqft} Sqft</div>
                    <div className="searchContentDescAddress">{room.location}</div>
                </div>
                <div className="contentSplitWrapper--divider"></div>
                <p></p>
            </div>
        </div>
        )}) : rooms.map((room, index) => { return (
            <div className="searchContent">
                <div roomIndex={ index }>
                    <div className="searchContentImageSection">
                        <a href="#">
                            <img className="searchContentImage" alt={room.name} src={room.imgURL} />
                        </a>
                    </div>
                    <div className="searchContentDescription">
                        <div className="searchContentDescName">{room.name}</div>
                        <div className="searchContentDescRate">₹ {room.rent}/ month</div>
                        <div className="searchContentFullDesc">{room.bedCount} Beds | {room.bathCount} Bath | {room.sqft} Sqft</div>
                        <div className="searchContentDescAddress">{room.location}</div>
                    </div>
                    <div className="contentSplitWrapper--divider"></div>
                    <p></p>
                </div>
            </div>
        )})
        return searchContent;
    }

    render(){
        
        return(
            <div className="search-result-page">
                <Navbar searchLocation={ this.props.match.params.searchLocation } populateSearchContent={this.populateSearchContent}/>
                {/* <h1 className="centerAlign">{ this.props.match.params.searchLocation }</h1> */}
                <h1></h1>
                { this.populateSearchContent(this.props.match.params.searchLocation) }
            </div>
        );
    }
}

export default searchPage;
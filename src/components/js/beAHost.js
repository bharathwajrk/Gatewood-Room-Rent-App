import React, { Component } from 'react';
import '../css/style.css';
import logo from '../images/logo192.png';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { propertyType, hostingSteps } from './data';

class beAHost extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchLocation : "",
          budget: "",
          propertyType : [propertyType[0]],
          searchAutoInput : false,
          isSearchInpFocus : false,
          currentPageNumber : 1,
        };
    }
    render(){
        return(
            <div className="rent-a-room">
                <div className="rent-a-room-logo">
                <Link to="/"><img className="logoImg" alt="logoImg" src={logo}/></Link>
                </div>
                <div className="rent-a-room-step">
                    <div className="rent-a-room-step-div">adfasdfadfsadfs</div>
                </div>
                <div className="cleardiv"></div>
                <div className="progressBar">
                    <span className="progress-percent"></span>
                </div>
                <div className="rent-room-content">
                    <div className="rent-room-section">
                        <div className="rent-room-section01">
                            <div className="rent-room-section02">
                                <div className="rent-room-header">
                                    <div className="rent-room-step1">
                                        <label className="rent-room-step1-label"><b>STEP 1 :</b> </label>
                                        <div className="cleardiv"></div>
                                        <br/>
                                        <div className="searchlocation" ref={node => this.node = node} >
                                            <div className="selectMinimum">
                                                <Select className="budgetminimum_select" defaultValue={[propertyType[0]]} value={this.state.propertyType} options={propertyType} />
                                            </div>
                                            <div className="cleardiv"></div>
                                            <br/>
                                            <div className="searchlocation_inp_div">
                                                <input className="searchlocation_input" type="text" placeholder="Search location" ></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rent-room-footer">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default beAHost;
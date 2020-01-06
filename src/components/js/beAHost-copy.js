import React, { Component } from 'react';
import '../css/style.css';
import logo from '../images/logo192.png';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { propertyType, ownership, bhkOwnerOptions, waterAminityOptions, powerBackupOptions, tenantOptions, eatingHabits, religionList } from './data';

class beAHost extends Component{
    constructor(props) {
        super(props);
        waterAminityOptions.splice(0,1);
        powerBackupOptions.splice(0,1);
        this.state = {
          propertyLocation : "",
          propertyAddress : "",
          propertyType : propertyType[0],
          searchAutoInput : false,
          isSearchInpFocus : false,
          currentPageNumber : 1,
          bhk : "",
          religion : "",
          eatingHabit : "",
          tenantDetails : "",
          ownership : "",
          waterAminity : "",
          powerBackup : "",
          rent : "",
          deposit : "",
          maintenance : "",
        };
    }

    postData = async (url = '', data = {}) => {
        // Default options are marked with *
        // console.log(data);
  
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded' ,
            'Accept': 'application/json'
            ,"Access-Control-Origin": "*"
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *client
          body: JSON.stringify({
            "propertyLocation" : data.propertyLocation,
            "propertyAddress" : data.propertyAddress,
            "propertyType" : data.propertyType,
            "bhk" : data.bhk,
            "religion" : data.religion,
            "eatingHabit" : data.eatingHabit,
            "tenantDetails" : data.tenantDetails,
            "ownership" : data.ownership,
            "waterAminity" : data.waterAminity,
            "powerBackup" : data.powerBackup,
            "rent" : data.rent,
            "deposit" : data.deposit,
            "maintenance" : data.maintenance
          }) // body data type must match "Content-Type" header
        
        //  body: JSON.stringify({"test" : "abcd"})
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }

    

    addRoomDetail = (e) => {
        e.preventDefault();
        let data = {};
        data.propertyLocation = this.state.propertyLocation;
        data.propertyAddress = this.state.propertyAddress;
        data.propertyType = this.state.propertyType.value;
        data.bhk = this.state.bhk.value;
        data.religion = this.state.religion.value;
        data.eatingHabit = this.state.eatingHabit.value;
        data.tenantDetails = this.state.tenantDetails.value;
        data.ownership = this.state.ownership.value;
        data.waterAminity = this.state.waterAminity.value;
        data.powerBackup = this.state.powerBackup.value;
        data.rent = this.state.rent;
        data.deposit = this.state.deposit;
        data.maintenance = this.state.maintenance;

        this.postData("http://localhost:3005/api/room", data);
    }

    handleChangePropertyLocation = (e) => {
        this.setState({
            propertyLocation : e.target.value,
        });
    }
    handleChangePropertyAddress = (e) => {
        this.setState({
            propertyAddress : e.target.value,
        });
    }
    handleChangePropertyType = type => {
        this.setState({
            propertyType : type,
        });
    }
    handleChangeOwnership = owner => {
        this.setState({
            ownership : owner,
        });
    }
    handleChangeRent = (e) => {
        this.setState({
            rent : Number(e.target.value),
        });
    }
    handleChangeDeposit = (e) => {
        this.setState({
            deposit : Number(e.target.value),
        });
    }
    handleChangeMaintenance = (e) => {
        this.setState({
            maintenance : Number(e.target.value),
        });
    }
    handleChangeBHK = bhk => {
        this.setState({
            bhk : bhk,
        });
    }
    handleChangeTenantDetails = tntDet => {
        this.setState({
            tenantDetails : tntDet,
        });
    }
    handleChangeReligion = rel => {
        this.setState({
            religion : rel,
        });
    }
    handleChangeEatingHabit = eatHab => {
        this.setState({
            eatingHabit : eatHab,
        });
    }
    handleChangeWaterAminity = watAm => {
        this.setState({
            waterAminity : watAm,
        });
    }
    handleChangePowerBackup = powBac => {
        this.setState({
            powerBackup : powBac,
        });
    }

    render(){
        return(
            <div className="rent-a-room">
                <div className="rent-a-room-logo">
                <Link to="/"><img className="logoImg" alt="logoImg" src={logo}/></Link>
                </div>
                <div className="rent-a-room-step">
                    <div className="rent-a-room-step-div"><b>Tell us more about your property</b></div>
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
                                        <label className="rent-room-step1-label"></label>
                                        <div className="cleardiv"></div>
                                        <div className="searchlocation" ref={node => this.node = node} >
                                            <div className="cleardiv"></div>
                                            <div className="searchlocation-content">
                                                <div className="selectleft-content">
                                                    <label className="rent-room-step1-label">Property Location</label>
                                                    <div className="searchlocation_inp_div">
                                                        <input className="searchlocation_input" type="text" placeholder="Search location" value={this.state.propertyLocation} onChange={this.handleChangePropertyLocation}></input>
                                                    </div>
                                                </div>
                                                <div className="selectright-content">
                                                    <label className="rent-room-step1-label">Address</label>
                                                    <div className="searchlocation_inp_div">
                                                        <input className="searchlocation_input" type="text" placeholder="Enter Address" value={this.state.propertyAddress} onChange={this.handleChangePropertyAddress} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cleardiv"></div>
                                            <br/>
                                            <div>
                                                <div className="selectleft-content">
                                                    <label className="property-type-label">Property Type</label>
                                                    <Select className="left_select" defaultValue={propertyType[0]} value={this.state.propertyType} options={propertyType} onChange={this.handleChangePropertyType}/>
                                                </div>
                                                <div className="selectright-content">
                                                    <label className="rent-room-step1-label">Ownership</label>
                                                    <Select className="right_select" value={this.state.ownership} options={ownership} onChange={this.handleChangeOwnership}/>
                                                </div>
                                            </div>
                                            <div className="cleardiv"></div>
                                            <br/>
                                            <div className="budgetDetails three-left-container">
                                                <fieldset className="budgetDetails_fieldset">
                                                    <legend className="budgetDetails_fieldset_legend">Room Budget</legend>
                                                    <div className="three-left-content">
                                                        <label className="rent_label">Month Rent</label>
                                                        <div className="inp-wrapper-div">
                                                            <input type="number" placeholder="Rental Amount" className="rent_select inp-inside-div" value={this.state.rent}  onChange={this.handleChangeRent} />
                                                        </div>
                                                    </div>
                                                    <div className="three-center-content">
                                                        <label className="deposit_label">Deposit</label>
                                                        <div className="inp-wrapper-div">
                                                            <input type="number" placeholder="Deposit/ Advance" className="deposit_select inp-inside-div"  value={this.state.deposit} onChange={this.handleChangeDeposit} />
                                                        </div>
                                                    </div>
                                                    <div className="three-right-content">
                                                        <label className="maintenance_label">Maintenance</label>
                                                        <div className="inp-wrapper-div">
                                                            <input type="number" placeholder="Maintenance Amount" className="maintenance_select inp-inside-div" min={0} maxLength={5}  value={this.state.maintenance} onChange={this.handleChangeMaintenance} />
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div className="cleardiv"></div>
                                            <br/>
                                            <div>
                                                <div className="bhkDetails">
                                                    <label className="bhkDetailsowner_label">Bedroom</label>
                                                    <Select className="bhkDetails_select" value={this.state.bhk}  options={bhkOwnerOptions} onChange={this.handleChangeBHK}/>
                                                </div>
                                                <div className="tenantDetails">
                                                    <label className="tenantDetailsowner_label">Details</label>
                                                    <Select className="tenantDetails_select" value={this.state.tenantDetails} options={tenantOptions} onChange={this.handleChangeTenantDetails}/>
                                                </div>
                                            </div>
                                            <div className="cleardiv"></div>
                                            <br/>
                                            <div>
                                                <div className="selectleft-content">
                                                    <label className="religion_label">Religion</label>
                                                    <Select className="left_select" value={this.state.religion}  options={religionList} onChange={this.handleChangeReligion} />
                                                </div>
                                                <div className="selectright-content">
                                                    <label className="veg_label">Veg/ Non-Veg</label>
                                                    <Select className="right_select" value={this.state.eatingHabit} options={eatingHabits} onChange={this.handleChangeEatingHabit}/>
                                                </div>
                                            </div>
                                            <div className="cleardiv"></div>
                                            <br/>
                                            <div className="basicAmenities">
                                                <fieldset className="basicAmenities_fieldset">
                                                    <legend className="basicAmenities_fieldset_legend">Basic Aminities</legend>
                                                    <div className="wateraminity">
                                                        <label className="wateraminity_label">Water Facility</label>
                                                        <Select className="wateraminity_select" value={this.state.waterAminity} options={waterAminityOptions} onChange={this.handleChangeWaterAminity} />
                                                    </div>
                                                    <div className="poweraminity">
                                                        <label className="poweraminity_label">Power Backup</label>
                                                        <Select className="poweraminity_select"  value={this.state.powerBackup} options={powerBackupOptions} onChange={this.handleChangePowerBackup} />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rent-room-footer">
                                    <button className="rent-room-host" onClick={this.addRoomDetail}>Proceed</button>
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
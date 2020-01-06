import React, { Component } from 'react';
import Select from 'react-select';
import bg from '../images/homePage.jpg';
import '../css/style.css';
import NavbarHome from './navbar-home-page'
import axios from 'axios'
import { bhkOptions, bhkSelectColourStyles, tenantOptions, minBudgetOptions, maxBudgetOptions, rooms, waterAminityOptions, powerBackupOptions } from './data';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.rooms = [];
        this.state = {
          searchLocation : "",
          budget: "",
          searchItems : [...new Map(rooms.map(function(value) {return value.location;}).map(item => [item, item])).values()],
          bhk : [bhkOptions[0]],
          tenantDetails : [tenantOptions[0]],
          minBudget : [minBudgetOptions[0]],
          maxBudget : [maxBudgetOptions[0]],
          tempMinBudgetOptions : minBudgetOptions,
          tempMaxBudgetOptions : maxBudgetOptions,
          waterAminity : [waterAminityOptions[0]],
          powerBackup : [powerBackupOptions[0]],
          searchAutoInput : false,
          isSearchInpFocus : false,
        };
    }

    getRoomData = async (url = '') => {
        // Default options are marked with *
        // console.log(data);
  
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //   credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            // 'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
            'Accept': 'application/json'
            ,"Access-Control-Origin": "*"
          },
        //   redirect: 'follow', // manual, *follow, error
        //   referrerPolicy: 'no-referrer', // no-referrer, *client
        });
        return await response.json(); // parses JSON response into native JavaScript objects
      }
    async componentDidMount() {
        const url="http://127.0.0.1:3005/api/rooms?id=4";

        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res);
        })
        try{console.log(this.getRoomData(url));}catch(e){console.log('third exception'+e);}
        const res = await fetch(`${url}`,{mode:'no-cors',headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
            'Accept': 'application/json'
            ,"Access-Control-Origin": "*"
          }})
        try{const data = await res.json(); console.log(data);}catch(e){console.log('first exception'+e);}
        const res2 = await fetch(`http://localhost:3005/api/test`,{mode:'no-cors',headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
            'Accept': 'application/json'
            ,"Access-Control-Origin": "*"
          }})
        try{const data2 = await res2.text(); console.log(data2);}catch(e){console.log('second exception'+e);}

        const xhr = new XMLHttpRequest();
        const url2 = 'http://localhost:3005/api/rooms?id=4';
        
        xhr.open('GET', url2, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin','*');
        xhr.setRequestHeader('Content-type','application/json');
        xhr.setRequestHeader('Access-Control-Allow-Methods','GET');
        xhr.setRequestHeader('X-API-KEY', '/*API KEY*/');
        xhr.onreadystatechange = function(resp) {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(xhr.responseText);
            }
          };
        xhr.send(); 
    }

    searchRooms = () =>{
        this.props.history.push('/searchPage/'+this.state.searchLocation);
    }

    handleSearchLocationChange = rooms => (e) => {
        let items = [];
        if(e && e.target && e.target.value && e.target.value.length > 0){
            items = [...new Map(rooms.map(function(value) {return value.location;}).map(item => [item, item])).values()];
            items = items.filter((item) => {
            return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
            });
        }
        this.setState({
            searchLocation : e.target.value,
            searchItems : items,
            searchAutoInput : true,
        })
    }

    handleSearchSelection = (e) => {
        this.setState({
            searchLocation : e.target.innerHTML,
            searchAutoInput : false,
            isSearchInpFocus : false,
        })
    }

    searchLocFocus = (e) => {
        this.setState({
            isSearchInpFocus : true,
        })
        document.addEventListener('click', this.handleClick, false);
    }

    searchLocCollapse = (e) => {
        if(!this.state.isSearchInpFocus){
            this.setState({
                searchAutoInput : false,
                isSearchInpFocus : false,
            })
        }
    }

    handleClick = (e) => {
        if(this.node && !this.node.contains(e.target)){
            this.setState({
                searchAutoInput : false,
                isSearchInpFocus : false,
            })
        }
    }

    handlebhkChange = bhkOptions => bhk => {
        let val = this.handleMultiSelectChange(bhkOptions, 'Any', bhk);
        this.setState({
            bhk : val
        })
    }

    handlewaterAminityChange = waterAminityOptions => wam => {
        let val = this.handleMultiSelectChange(waterAminityOptions, 'Any', wam);
        this.setState({
            waterAminity : val
        })
    }

    handlepowerBackupChange = powerBackupOptions => powBackup => {
        let val = this.handleMultiSelectChange(powerBackupOptions, 'Any', powBackup);
        this.setState({
            powerBackup : val
        })
    }

    handleminBudgetChange = (maxBudgetOptions) => minBudget => {
        let tempVal = maxBudgetOptions;
        if(minBudget && minBudget.value && minBudget.value !== "Min"){
            tempVal = [maxBudgetOptions[0]];
            for(let i=1; i<maxBudgetOptions.length; i++){
                if(minBudget && minBudget.value && minBudget.value < maxBudgetOptions[i].value){
                    tempVal.push(maxBudgetOptions[i]);
                }
            }
        }
        
        this.setState({
            minBudget : minBudget,
            tempMaxBudgetOptions : tempVal
        })
    }

    handlemaxBudgetChange = minBudgetOptions => maxBudget => {
        let tempVal = minBudgetOptions;
        if(maxBudget && maxBudget.value && maxBudget.value !== "Max"){
            tempVal = [minBudgetOptions[0]];
            for(let i=1; i<minBudgetOptions.length; i++){
                if(maxBudget && maxBudget.value && maxBudget.value > minBudgetOptions[i].value){
                    tempVal.push(minBudgetOptions[i]);
                }
            }
        }
        
        this.setState({
            maxBudget : maxBudget,
            tempMinBudgetOptions : tempVal
        })
    }

    handleMultiSelectChange = (options, firstEl, selectedVal) => {
        let idx = selectedVal ? selectedVal.map((el) => el.value).indexOf(firstEl) : -1;
        let tempVal = [];
        if(idx === 0 && selectedVal && selectedVal.length >= 2){
            selectedVal.splice(idx,1);
            tempVal = selectedVal;
        }
        else if(idx !== -1 && idx >= 1 && selectedVal && selectedVal.length >= 2){
            tempVal = [];
            tempVal = options[0];
            //bhk.push(bhkOptions[0]);
        }
        else if(selectedVal == null || selectedVal.length === 0){
            tempVal = [];
            tempVal = options[0];
        }
        else {
            tempVal = selectedVal;
        }
        
        return tempVal;
    }

    handletenantDetailsChange = tenantOptions => tenantDetails => {
        let val = this.handleMultiSelectChange(tenantOptions, 'Any', tenantDetails);
        this.setState({
            tenantDetails : val
        })
    }

    render() {
        return (
            <div className="homePage">
                <NavbarHome />
                <div className="homePageImg" style={{'backgroundImage':'url('+bg+')', 'zIndex':-1}}></div>
                <br /><br /><br />
                <div className="homediv1_">
                    <div className="homediv2_">
                        <div className="homediv3_">
                            <div className="homediv4_">
                                <div className="homediv5_">
                                    <div>
                                        <div className="homediv6_">
                                            <div className="homediv7_">
                                                <section>
                                                    <h1 className="homediv8_">Rent room in xyz</h1>
                                                </section>
                                                <form>
                                                    <div className="searchlocation" ref={node => this.node = node} >
                                                        <label className="searchlocation_label">Search Location</label>
                                                        <div className="searchlocation_inp_div">
                                                            <input className="searchlocation_input" type="text" placeholder="Search location" onChange={this.handleSearchLocationChange(rooms)} value={this.state.searchLocation} onBlur={ this.searchLocCollapse } onFocus={ this.searchLocFocus }></input>
                                                        </div>
                                                        <div className={this.state.searchAutoInput ? "autoComplete-div autoComplete-div-show" : "autoComplete-div autoComplete-div-hidden"}>{this.state.searchItems.map((i, index) => <p onClick={this.handleSearchSelection} key={index}>{i}</p>)}</div>
                                                    </div>
                                                    <div className="budgetDetails">
                                                    <fieldset className="budgetDetails_fieldset">
                                                    <legend className="budgetDetails_fieldset_legend">Budget</legend>
                                                        <div className="selectMinimum">
                                                            <label className="minimum_label">Select-Minimum</label>
                                                            <Select className="budgetminimum_select" defaultValue={[this.state.tempMinBudgetOptions[0]]} value={this.state.minBudget} onChange={this.handleminBudgetChange(maxBudgetOptions)} options={this.state.tempMinBudgetOptions} backspaceRemoves={true} styles={bhkSelectColourStyles}/>
                                                        </div>
                                                        <div className="selectMaximum">
                                                            <label className="maximum_label">Select-Maximum</label>
                                                            <Select className="budgetmaximum_select" defaultValue={[this.state.tempMaxBudgetOptions[0]]} value={this.state.maxBudget} onChange={this.handlemaxBudgetChange(minBudgetOptions)} options={this.state.tempMaxBudgetOptions} backspaceRemoves={true} styles={bhkSelectColourStyles}/>
                                                        </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="cleardiv"></div>
                                                    <div className="bhkDetails">
                                                        <label className="bhkDetails_label">Bedroom</label>
                                                        <Select className="bhkDetails_select" defaultValue={[bhkOptions[0]]} isMulti value={this.state.bhk} onChange={this.handlebhkChange(bhkOptions)} options={bhkOptions} backspaceRemoves={true} styles={bhkSelectColourStyles}/>
                                                    </div>
                                                    <div className="tenantDetails">
                                                        <label className="tenantDetails_label">Details</label>
                                                        <Select className="tenantDetails_select" defaultValue={[tenantOptions[0]]} isMulti value={this.state.tenantDetails} onChange={this.handletenantDetailsChange(tenantOptions)} options={tenantOptions} backspaceRemoves={true} styles={bhkSelectColourStyles}/>
                                                    </div>
                                                    <div className="cleardiv"></div>
                                                    <div className="basicAmenities">
                                                    <fieldset className="basicAmenities_fieldset">
                                                    <legend className="basicAmenities_fieldset_legend">Basic Aminities</legend>
                                                        <div className="wateraminity">
                                                            <label className="wateraminity_label">Water Facility</label>
                                                            <Select className="wateraminity_select" defaultValue={[waterAminityOptions[0]]} isMulti value={this.state.waterAminity} onChange={this.handlewaterAminityChange(waterAminityOptions)} options={waterAminityOptions} backspaceRemoves={true} styles={bhkSelectColourStyles}/>
                                                        </div>
                                                        <div className="poweraminity">
                                                            <label className="poweraminity_label">Power Backup</label>
                                                            <Select className="poweraminity_select" defaultValue={[powerBackupOptions[0]]} isMulti value={this.state.powerBackup} onChange={this.handlepowerBackupChange(powerBackupOptions)} options={powerBackupOptions} backspaceRemoves={true} styles={bhkSelectColourStyles}/>
                                                        </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="cleardiv"></div>
                                                    <div className="search_button_div">
                                                        <button className="searchButton" onClick={this.searchRooms}>Search</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
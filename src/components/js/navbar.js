import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../css/style.css';
import logo from '../images/logo192.png';
import { bhkOptions, tenantOptions, minBudgetOptions, maxBudgetOptions, rooms } from './data';
//UI Component
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.populateSearchContent = props.populateSearchContent;
        this.state = {
          searchLocation : props && props.searchLocation ? props.searchLocation : "",
          budget: "",
          searchItems : [...new Map(rooms.map(function(value) {return value.location;}).map(item => [item, item])).values()],
          bhk : [bhkOptions[0]],
          tenantDetails : [tenantOptions[0]],
          minBudget : [minBudgetOptions[0]],
          maxBudget : [maxBudgetOptions[0]],
          tempMinBudgetOptions : minBudgetOptions,
          tempMaxBudgetOptions : maxBudgetOptions,
          searchAutoInput : false,
          isSearchInpFocus : false,
        };
    }

    searchRooms = () =>{
        let path = `searchPage`;
        this.props.history.push(path);
    }

    handleSearchLocationChange = rooms => (e) => {
        e.preventDefault();
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
        
        // this.props.history.push('/searchPage/'+this.state.searchLocation);
        this.populateSearchContent(this.state.searchLocation);
    }

    handleSearchSelection = (e) => {
        this.setState({
            searchLocation : e.target.innerHTML,
            searchAutoInput : false,
            isSearchInpFocus : false,
        })
        // this.props.history.push('/searchPage/'+this.state.searchLocation);
        this.populateSearchContent(this.state.searchLocation);
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

    render() {
    return(
            <div id="menu-bar">
                <Link to="/"><img className="logoImg" alt="logoImg" src={logo}/></Link>
                <form onSubmit={this.handleSearchSelection}>
                <div className="searchlocation-navbar" ref={node => this.node = node} >
                    <div className="searchlocation-navbar-inp-div">
                        <input className="searchlocation-navbar-input" type="text" placeholder="Search location" onChange={this.handleSearchLocationChange(rooms)} value={this.state.searchLocation} onBlur={ this.searchLocCollapse } onFocus={ this.searchLocFocus }></input>
                    </div>
                    <div className={this.state.searchAutoInput ? "autoComplete-navbar-div autoComplete-navbar-div-show" : "autoComplete-navbar-div autoComplete-navbar-div-hidden"}>{this.state.searchItems.map((i, index) => <p onClick={this.handleSearchSelection} key={index}>{i}</p>)}</div>
                </div>
                </form>
                <nav className="menbar-Nav">
                    <ul>
                        <li><Link className="menubar-ATag" to="/beAHost">Become a Host</Link></li>
                        <li><Link className="menubar-ATag" to="/help">Help</Link></li>
                        <li><NavLink className="menubar-ATag" to="/signup">SignUp</NavLink></li>
                        <li><Link className="menubar-ATag" to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
    
export default Navbar;
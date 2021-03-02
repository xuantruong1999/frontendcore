import React, { Component } from 'react';
import '../css/sidebar.css';
import $ from "jquery";
import RangeSlider from './RangeSlider';
class SideBar extends Component{
    constructor(props){
        super(props)
        this.state= {
            min: 1,
            max: 100
        }   
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        alert('params:' + this.state.value);
    }
    render(){
        return(
            <div id="sidebar" className="col col-2">
                <hr className="top-bar"/>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="row m-1">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="brand-apple" id="brand-apple" />
                            <label className="form-check-label" htmlFor="brand-samsung">Apple</label>
                        </div>
                        <div className="form-check ml-2">
                            <input type="checkbox" className="form-check-input" name="brand-samsung" id="brand-samsung" />
                            <label className="form-check-label" htmlFor="brand-samsung">SamSung</label>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" name="brand-VinSmart" id="brand-VinSmart" />
                            <label className="form-check-label" htmlFor="brand-VinSmart">VinSmart </label>
                        </div>
                    </div>
                    <div className="row m-1">
                        <RangeSlider></RangeSlider>
                    </div>
                    <div><button className="btn btn-primary">Filter</button></div>
                </form>
            </div>
        );
    }
}

export default SideBar;
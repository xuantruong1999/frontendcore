import React, { Component } from 'react';
import 'jquery-ui/themes/base/resizable.css';
import $ from 'jquery';
import '../css/sidebar.css';
window.jQuery = $;
require ('jquery-ui/ui/version');
require ('jquery-ui/ui/plugin');
require ('jquery-ui/ui/widgets/slider');
class SideBar extends Component{
    componentDidMount () {
        this.$formControlRange = $(this.refs.formControlRange);
        this.$formControlRange.slider();
        console.log (this.$formControlRange.slider);
    }
    render(){
        return(
            <div id="sidebar" className="col col-3">
                <h1 className="h2 center">FILTER</h1>
                <form action="post">
                    <div id="slider"></div>
                    <div className="form-group d-flex">
                        <label for="formControlRange" className="">Price</label>
                        <input type="range" name="price" min="0" max="150" className="" id="formControlRange" />
                        <button>Filter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SideBar;
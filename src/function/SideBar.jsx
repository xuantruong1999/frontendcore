import React, { Component } from 'react';
import '../css/sidebar.css';
import $ from "jquery";
class SideBar extends Component{
    componentDidMount(){
        var slider = document.getElementById("price-range");
        var outPut = document.getElementById("demo");
        outPut.innerHTML = slider.value;
        slider.oninput = function(){
            outPut.innerHTML = this.value;
        }
    }
    render(){
        return(
            <div id="sidebar" className="col col-3">
                <h2 className="align-center">Brand</h2>
                <form action="">
                    <div className="row m-1">

                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Apple</label>
                        </div>
                        <div class="form-check ml-2">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Apple</label>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Apple</label>
                        </div>
                    </div>
                    <label htmlFor="price-range">Price</label>
                    <input type="range" name="price" id="price-range" min ="10" max="1000" />
                    <div className="" id="output">Value:<span id="demo"></span> </div>
                    <div><button className="btn btn-primary">Filter</button></div>
                </form>
            </div>
        );
    }
}

export default SideBar;
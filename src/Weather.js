import React from "react";
import axios from 'axios';
import "./Weather.css"

        export default function Weather () {
            return (
         <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                       <input 
                       type="search"
                       placeholder="Type a city..."
                       id="city-input"
                       autocomplete="off" />

                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" class="btn btn-primary" />
                    </div> 
                </div>
            </form>
            <div class="overview">
                <h1 id="city">Mangawhai</h1>
                <ul>
                    <li><span id="date">Aug 19 2023</span></li>
                    <li id="description">Partly Cloudy</li>
                </ul>
            </div>
            <div className="row">
            <div className="col-6">
                <div className="d-flex weather-temperature">
                    <img 
                    src="https://s.yimg.com/os/weather/1.0.1/shadow_icon/60x60/fair_day@2x.png"
                    alt="partly cloudy"
                    id="icon" />
                    <div>
                        <strong id="temperature">
                            <span className="units"> 11°C</span>
                        </strong>
                    </div>
                </div>
            </div>
            </div>
            
            </div>
            )
        }
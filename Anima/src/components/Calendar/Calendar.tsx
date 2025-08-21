/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ToogleSwitch } from "../ToogleSwitch";
import "./style.css";

interface Props {
  className: any;
}

export const Calendar = ({ className }: Props): JSX.Element => {
  return (
    <div className={`calendar ${className}`}>
      <div className="calendar-options">
        <div className="preference-option">
          <div className="text-wrapper">Deine Präferenzen</div>

          <ToogleSwitch className="toogle-switch-instance" />
        </div>

        <div className="filter-and-share">
          <img
            className="filter-icon"
            alt="Filter icon"
            src="/img/filter-icon.png"
          />

          <img
            className="share-icon"
            alt="Share icon"
            src="/img/share-icon.png"
          />
        </div>
      </div>

      <div className="calendar-with">
        <div className="overlap-group">
          <div className="calendar-body">
            <div className="month-and-year">
              <div className="div">Juli 2025</div>

              <div className="pagination">
                <img className="img" alt="Left icon" src="/img/left-icon.png" />

                <img
                  className="img"
                  alt="Right icon"
                  src="/img/right-icon.png"
                />
              </div>
            </div>

            <div className="weekdays">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Mo</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-2">Di</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-2">Mi</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-2">Do</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-2">Fr</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-2">Sa</div>
              </div>

              <div className="div-wrapper">
                <div className="text-wrapper-2">So</div>
              </div>
            </div>

            <div className="weeks">
              <div className="week">
                <div className="date">
                  <div className="today">
                    <div className="date-2">30</div>
                  </div>
                </div>

                <div className="date">
                  <div className="text-wrapper">1</div>
                </div>

                <div className="date">
                  <div className="text-wrapper">2</div>
                </div>

                <div className="date">
                  <div className="text-wrapper">3</div>
                </div>

                <div className="date">
                  <div className="text-wrapper">4</div>
                </div>

                <div className="date">
                  <div className="text-wrapper">5</div>
                </div>

                <div className="date-wrapper">
                  <div className="text-wrapper">6</div>
                </div>
              </div>

              <div className="week">
                <div className="date-3">
                  <div className="date-4">7</div>
                </div>

                <div className="date-3">
                  <div className="date-4">8</div>
                </div>

                <div className="date-3">
                  <div className="date-4">9</div>
                </div>

                <div className="date-3">
                  <div className="date-5">10</div>
                </div>

                <div className="date-3">
                  <div className="date-4">11</div>
                </div>

                <div className="date-3">
                  <div className="date-5">12</div>
                </div>

                <div className="date-6">
                  <div className="date-7">13</div>
                </div>
              </div>

              <div className="week">
                <div className="date-3">
                  <div className="date-8">14</div>
                </div>

                <div className="date-3">
                  <div className="date-5">15</div>
                </div>

                <div className="date-3">
                  <div className="date-8">16</div>
                </div>

                <div className="date-3">
                  <div className="date-7">17</div>
                </div>

                <div className="date-3">
                  <div className="date-7">18</div>
                </div>

                <div className="date-3">
                  <div className="date-5">19</div>
                </div>

                <div className="date-3">
                  <div className="date-9">20</div>
                </div>
              </div>

              <div className="week">
                <div className="date-3">
                  <div className="date-5">21</div>
                </div>

                <div className="date-3">
                  <div className="date-10">22</div>
                </div>

                <div className="date-3">
                  <div className="date-10">23</div>
                </div>

                <div className="date-3">
                  <div className="date-10">24</div>
                </div>

                <div className="date-3">
                  <div className="date-10">25</div>
                </div>

                <div className="date-3">
                  <div className="date-10">26</div>
                </div>

                <div className="date-3">
                  <div className="date-11">27</div>
                </div>
              </div>

              <div className="week">
                <div className="date-3">
                  <div className="date-10">28</div>
                </div>

                <div className="date-3">
                  <div className="date-10">29</div>
                </div>

                <div className="date-3">
                  <div className="date-10">30</div>
                </div>

                <div className="date-3">
                  <div className="date-7">31</div>
                </div>

                <div className="date-3">
                  <div className="date-12">1</div>
                </div>

                <div className="date-3">
                  <div className="date-12">2</div>
                </div>

                <div className="date-6">
                  <div className="date-12">3</div>
                </div>
              </div>
            </div>
          </div>

          <img
            className="calendar-entries"
            alt="Calendar entries"
            src="/img/calendar-entries.png"
          />
        </div>
      </div>
    </div>
  );
};

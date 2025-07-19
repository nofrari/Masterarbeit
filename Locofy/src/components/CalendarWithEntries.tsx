import { FunctionComponent } from "react";
import "./CalendarWithEntries.css";

export type CalendarWithEntriesType = {
  className?: string;
};

const CalendarWithEntries: FunctionComponent<CalendarWithEntriesType> = ({
  className = "",
}) => {
  return (
    <div className={`calendar-with-entries ${className}`}>
      <div className="calendar-body">
        <div className="month-and-year">
          <div className="juli-2025">Juli 2025</div>
          <div className="pagination">
            <img
              className="left-icon"
              loading="lazy"
              alt=""
              src="Left Icon.svg"
            />
            <img
              className="left-icon"
              loading="lazy"
              alt=""
              src="Right Icon.svg"
            />
          </div>
        </div>
        <div className="weekdays">
          <div className="monday">
            <div className="mo">Mo</div>
          </div>
          <div className="monday">
            <div className="mo">Di</div>
          </div>
          <div className="monday">
            <div className="mo">Mi</div>
          </div>
          <div className="monday">
            <div className="mo">Do</div>
          </div>
          <div className="monday">
            <div className="mo">Fr</div>
          </div>
          <div className="monday">
            <div className="mo">Sa</div>
          </div>
          <div className="monday">
            <div className="mo">So</div>
          </div>
        </div>
        <div className="weeks">
          <div className="week">
            <div className="date">
              <div className="today">
                <b className="date1">30</b>
              </div>
            </div>
            <div className="date2">
              <div className="date3">1</div>
            </div>
            <div className="date2">
              <div className="date3">2</div>
            </div>
            <div className="date2">
              <div className="date3">3</div>
            </div>
            <div className="date2">
              <div className="date3">4</div>
            </div>
            <div className="date2">
              <div className="date3">5</div>
            </div>
            <div className="date12">
              <div className="date3">6</div>
            </div>
          </div>
          <div className="week">
            <div className="date14">
              <div className="date3">7</div>
            </div>
            <div className="date14">
              <div className="date3">8</div>
            </div>
            <div className="date14">
              <div className="date3">9</div>
            </div>
            <div className="date14">
              <div className="date3">10</div>
            </div>
            <div className="date14">
              <div className="date3">11</div>
            </div>
            <div className="date14">
              <div className="date3">12</div>
            </div>
            <div className="date26">
              <div className="date3">13</div>
            </div>
          </div>
          <div className="week">
            <div className="date14">
              <div className="date3">14</div>
            </div>
            <div className="date14">
              <div className="date3">15</div>
            </div>
            <div className="date14">
              <div className="date3">16</div>
            </div>
            <div className="date14">
              <div className="date3">17</div>
            </div>
            <div className="date14">
              <div className="date3">18</div>
            </div>
            <div className="date14">
              <div className="date3">19</div>
            </div>
            <div className="date14">
              <div className="date3">20</div>
            </div>
          </div>
          <div className="week">
            <div className="date14">
              <div className="date3">21</div>
            </div>
            <div className="date14">
              <div className="date3">22</div>
            </div>
            <div className="date14">
              <div className="date3">23</div>
            </div>
            <div className="date14">
              <div className="date3">24</div>
            </div>
            <div className="date14">
              <div className="date3">25</div>
            </div>
            <div className="date14">
              <div className="date3">26</div>
            </div>
            <div className="date14">
              <div className="date3">27</div>
            </div>
          </div>
          <div className="week">
            <div className="date14">
              <div className="date3">28</div>
            </div>
            <div className="date14">
              <div className="date3">29</div>
            </div>
            <div className="date14">
              <div className="date3">30</div>
            </div>
            <div className="date14">
              <div className="date3">31</div>
            </div>
            <div className="date64">
              <div className="date3">1</div>
            </div>
            <div className="date64">
              <div className="date3">2</div>
            </div>
            <div className="date68">
              <div className="date3">3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="calendar-entries">
        <div className="one-day-event" />
        <div className="one-day-event1" />
        <div className="one-day-event2" />
        <div className="one-day-event3" />
        <div className="one-day-event4" />
        <div className="one-day-event5" />
        <div className="one-day-event6" />
        <div className="one-day-event7" />
        <div className="one-day-event8" />
        <div className="one-day-event9" />
        <div className="one-day-event10" />
        <div className="one-day-event11" />
        <div className="multi-day-event" />
      </div>
    </div>
  );
};

export default CalendarWithEntries;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  return (
    <div>
      
      {!isLoading && (
        <div className={`${styles.section}`}>
           {allEvents && allEvents.length !== 0 ?(
            <div>
          <div className={`${styles.heading}`}>
            <h1>Khuyến mãi</h1>
          </div>

          <div className="w-full grid">
            {allEvents.length !== 0 && (
              <EventCard data={allEvents && allEvents[0]} />
            )}
            {/* <h4>{allEvents?.length === 0 && "No Events have!"}</h4> */}
          </div>
          </div>):(null)}
        </div>
      )}
    </div>
  );
};

export default Events;

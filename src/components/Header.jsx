import React from "react";
import "./css/Header.css";

export default function Header() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date();
  const date = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  return (
    <React.Fragment>
      <header>
          <div className="date">{date}</div>
          <div className="month">{month}</div>
      </header>
    </React.Fragment>
  );
}

import React from "react";
// import Layout from "../../components/layout/layout";
import styles from './progressBar.module.scss'
import Image from "next/image";
import logo from "../../public/images/logoA.png";



import Calendar from 'react-calendar';
import { MonthView, YearView, DecadeView, CenturyView } from "react-calendar";


export default function CalendarBox({search=true}) {
  return <div className={styles.CalendarBox}>
       <Calendar  locale="en-GB" calendarType="US" showNavigation={false}  />
  </div>;
}


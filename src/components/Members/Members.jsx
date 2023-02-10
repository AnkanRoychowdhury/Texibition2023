import React, { useState } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { memberData } from "./list";
import "../../styles/style.css";
import MemCard from "./MemCard";

export const styles = {
  box: {
    padding: "1rem 4rem ",
  },

  col_card: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",

    padding: "0.8rem",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  title: {
    color: " #f3f3f7",
    fontSize: "3rem",
    fontHeight: 700,
    letterSpacing: " 1.4px",
    textTransform: "uppercase",
  },
  subtitle: {
    color: " #f3f3f7",
    fontSize: "2rem",
    fontHeight: 700,
    letterSpacing: " 1.4px",
    textTransform: "uppercase",
    marginBottom: " 3rem",
  },
  card: {
    width: "15rem",
    borderBottomRightRadius: "16px",
    borderBottomLeftRadius: "16px",
    backgroundColor: "#000000",
    padding: "0rem",
  },
  card_title: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: " #f3f3f7",
  },
  card_subtitle: {
    fontFamily: "San-sarief",
    display: "flex",
    justifyContent: "center",
    fontSize: '1rem',
    alignItem: "center",
    color: " #f3f3f7",
  },
  contact: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  contactTitle: {
    color: "grey",
    fontSize: "1.3rem",
    marginTop: "5px"
  }
};

const Members = () => {
  const [Data, setData] = useState(memberData);

  return (
    <>
      <div style={styles.header}>
        <h2 style={styles.title}>Contact</h2>
      </div>
      <div style={styles.contact}>
        <h5 style={styles.contactTitle}>Feel Free To Reach Us</h5>
      </div>
      <div style={styles.box} className="team-cat">
        <div style={styles.header}>
          <h4 style={styles.subtitle} className="subtitle">Convenor</h4>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 4).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} />
            );
          })}
        </Row>
        <div style={styles.header}>
          <h4 style={styles.subtitle} className="subtitle">Treasurer</h4>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 5).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} />
            );
          })}
        </Row>
        <div style={styles.header}>
          <h3 style={styles.subtitle} className="subtitle">Student Coordinators</h3>
        </div>
        <Row>
          {Data.filter((data) => data.posId === 1).map((val, index) => {
            const { id, name, imgSrc, postion } = val;

            return (
              <MemCard data={val} />

            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Members;

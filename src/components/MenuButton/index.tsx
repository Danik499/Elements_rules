import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface Props {
  icon: () => JSX.Element;
  label: string;
  to: string;
}

const styles = {
  buttonWrapper: {
    width: "80%",
    margin: "0 auto",
    maxWidth: 400,
    marginTop: 15,
  },
  button: {
    backgroundColor: "black",
    color: "white",
    border: "none",
    fontSize: 45,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    fontFamily: "WindsorOld",
    width: "100%",
    display: "flex",
  },
  buttonLabel: { marginLeft: 10 },
  buttonIcon: { display: "flex", marginLeft: 5 },
};

const MenuButton = ({ icon, label, to }: Props) => {
  return (
    <div style={styles.buttonWrapper}>
      <Link to={to} style={{ textDecoration: "none" }}>
        <button style={styles.button}>
          <span style={styles.buttonIcon}>{icon && icon()}</span>
          <span style={styles.buttonLabel}>{label}</span>
        </button>
      </Link>
    </div>
  );
};

export default MenuButton;

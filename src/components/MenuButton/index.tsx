import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import theme from "../../theme";

interface Props {
  icon: () => JSX.Element;
  label?: string;
  color?: keyof typeof theme.colors;
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
    backgroundColor: theme.colors.gray,
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

const MenuButton = ({ icon, label, color, to }: Props) => {
  return (
    <div style={styles.buttonWrapper}>
      <Link to={to} style={{ textDecoration: "none" }}>
        <button style={styles.button}>
          <span style={styles.buttonIcon}>{icon && icon()}</span>
          {label && (
            <span
              style={{
                ...styles.buttonLabel,
                color: theme.colors[color || "white"],
              }}
            >
              {label}
            </span>
          )}
        </button>
      </Link>
    </div>
  );
};

export default MenuButton;

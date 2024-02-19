import React from "react";
import theme from "../../theme";
import { Link } from "react-router-dom";

const colors = theme.colors;

interface Props {
  color: "king" | "piro" | "terra" | "aqua" | "aero" | "character" | "white";
}

const BackButton = ({ color }: Props) => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <button
        style={{
          color: colors[color],
          background: "transparent",
          border: `5px solid ${colors[color]}`,
          padding: "5px 70px",
          fontFamily: "WindsorOld",
          marginTop: "20px",
          fontSize: 30,
        }}
      >
        Назад
      </button>
    </Link>
  );
};

export default BackButton;

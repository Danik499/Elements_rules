import React from "react";
import theme from "../../theme";

const colors = theme.colors;

interface Props {
  card: () => JSX.Element;
  cardPosition: "left" | "right";
  color: "king" | "piro" | "terra" | "aero" | "aqua" | "white";
  header: string;
  children: React.ReactNode;
}

const RuleSegment = ({
  card,
  cardPosition,
  color,
  header,
  children,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 15,
      }}
    >
      {cardPosition === "left" && <div>{card && card()}</div>}
      <div
        style={{
          textAlign: "start",
          width: "100%",
          marginLeft: 10,
          paddingRight: cardPosition === "right" ? 10 : 0,
        }}
      >
        <div
          style={{
            fontSize: 43,
            color: colors[color],
          }}
        >
          {header}
        </div>
        <div style={{ fontFamily: "constantia", fontSize: 18 }}>{children}</div>
      </div>
      {cardPosition === "right" && <div>{card && card()}</div>}
    </div>
  );
};

export default RuleSegment;

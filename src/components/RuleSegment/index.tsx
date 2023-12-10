import React from "react";
import theme from "../../theme";

const colors = theme.colors;

interface Props {
  card: () => JSX.Element;
  cardPosition: "left" | "right";
  header: string;
  children: React.ReactNode;
}

const RuleSegment = ({ card, cardPosition, header, children }: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {cardPosition === "left" && <div>{card && card()}</div>}
      <div
        style={{
          textAlign: "start",
          width: "100%",
          marginLeft: 10,
        }}
      >
        <div
          style={{
            fontSize: 50,
            color: colors.king,
          }}
        >
          {header}
        </div>
        <div style={{}}>{children}</div>
      </div>
      {cardPosition === "right" && <div>{card && card()}</div>}
    </div>
  );
};

export default RuleSegment;

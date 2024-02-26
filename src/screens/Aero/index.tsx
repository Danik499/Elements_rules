import React from "react";
import RuleSegment from "../../components/RuleSegment";
import theme from "../../theme";
import { Flight, Miss, Replica, Ricochet, Triplet } from "../../assets/icons";
import BackButton from "../../components/BackButton";

const colors = theme.colors;

const Aero = () => {
  return (
    <div
      style={{
        paddingBottom: 30,
        backgroundColor: "#101010",
      }}
    >
      <div style={{ fontSize: 70, color: colors.aero }}>Аеро</div>

      <div style={{ margin: "0 auto", width: "90%", maxWidth: 400 }}>
        <RuleSegment
          card={() => <Flight width={170} height={270} />}
          cardPosition="left"
          color="aero"
          header="Політ"
        >
          <div style={{ color: "white" }}>...</div>
          <br />
          <div style={{ color: colors.clarification }}>
            Можна нанести удар за допомогою рикошету
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Replica width={170} height={270} />}
          cardPosition="right"
          color="aero"
          header="репліка"
        >
          <div style={{ color: "white" }}>Ви берете 2 картки з колоди</div>
        </RuleSegment>
        <RuleSegment
          card={() => <Triplet width={170} height={270} />}
          cardPosition="left"
          color="aero"
          header="триплет"
        >
          <div style={{ color: "white" }}>Ви берете 3 картки з колоди</div>
        </RuleSegment>
        <RuleSegment
          card={() => <Miss width={170} height={270} />}
          cardPosition="right"
          color="aero"
          header="Промах"
        >
          <div style={{ color: "white" }}>Промах від атаки</div>
        </RuleSegment>
        <RuleSegment
          card={() => <Ricochet width={170} height={270} />}
          cardPosition="left"
          color="aero"
          header="Рикошет"
        >
          <div style={{ color: "white" }}>
            Картку можна використати у будь-чий хід.
          </div>
          <br />
          <div style={{ color: "white" }}>
            До прикладу: Гравець скидає на вас карту{" "}
            <span style={{ color: colors.piro }}>вогонь</span> ви можете
            використати карту{" "}
            <span style={{ color: colors.aero }}>рикошет</span>, щоб направити
            атаку в гравця який знаходиться за вами
          </div>
        </RuleSegment>

        <BackButton color="aero" />
      </div>
    </div>
  );
};

export default Aero;

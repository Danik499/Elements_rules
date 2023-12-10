import React from "react";
import { Challenge, Flame, Inferno, Lighting, Spark } from "../../assets/icons";
import theme from "../../theme";
import RuleSegment from "../../components/RuleSegment";

const colors = theme.colors;

const Piro = () => {
  return (
    <div
      style={{
        paddingBottom: 30,
        backgroundColor: "#101010",
      }}
    >
      <div style={{ fontSize: 70, color: colors.piro }}>Піро</div>

      <div style={{ margin: "0 auto", width: "90%", maxWidth: 400 }}>
        <RuleSegment
          card={() => <Spark width={170} height={270} />}
          cardPosition="left"
          color="piro"
          header="Іскра"
        >
          <div style={{ color: "white" }}>
            Нанесіть удар по гравцю зправа або зліва
          </div>
          <br />
          <div style={{ color: "white" }}>
            Картка віднімає 1 життя якщо у противника немає{" "}
            <span style={{ color: colors.aero }}>промахів, рикошетів</span> або{" "}
            <span style={{ color: colors.terra }}>захисту</span>
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Flame width={170} height={270} />}
          cardPosition="right"
          color="piro"
          header="Вогонь"
        >
          <div style={{ color: "white" }}>
            Нанесіть подвійний удар по гравцю з права або зліва
          </div>
          <br />
          <div style={{ color: "white" }}>
            Картка віднімає 2 життя якщо у противника немає{" "}
            <span style={{ color: colors.aero }}>промахів, рикошетів</span> або{" "}
            <span style={{ color: colors.terra }}>захисту</span>
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Lighting width={170} height={270} />}
          cardPosition="left"
          color="piro"
          header="Блискавка"
        >
          <div style={{ color: "white" }}>
            Нанесіть удар по будь-якому гравцю
          </div>
          <br />
          <div style={{ color: "white" }}>
            Картка віднімає 1 життя якщо у противника немає{" "}
            <span style={{ color: colors.aero }}>промахів, рикошетів</span> або{" "}
            <span style={{ color: colors.terra }}>захисту</span>
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Inferno width={170} height={270} />}
          cardPosition="right"
          color="piro"
          header="Інферно"
        >
          <div style={{ color: "white" }}>
            Всі скидають <span style={{ color: colors.aero }}>промах</span>. У
            кого немає - втрачає життя
          </div>
          <br />
          <div style={{ color: "white" }}>
            Картка віднімає 1 жаття від кожного гравця в якого немаж картки{" "}
            <span style={{ color: colors.aero }}>промах</span>
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Challenge width={170} height={270} />}
          cardPosition="left"
          color="piro"
          header="Виклик"
        >
          <div style={{ color: "white" }}>
            Ви та ваш опонент скидуєте карти атаки по черзі. Гравець, у якого
            першого вони закінчилися - втрачає життя
          </div>
          <br />
          <div style={{ color: "white" }}>
            Карти, які можна використовувати:{" "}
            <span style={{ color: colors.piro }}>
              іскра, вогонь, блискавка, інферно, виклик,
            </span>{" "}
            <span style={{ color: colors.king }}>меч, булава, гвардія</span>
          </div>
        </RuleSegment>
      </div>
    </div>
  );
};

export default Piro;

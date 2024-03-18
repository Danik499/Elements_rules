import React from "react";
import theme from "../../theme";
import RuleSegment from "../../components/RuleSegment";
import BackButton from "../../components/BackButton";
import {
  PiroElement,
  AeroElement,
  AquaElement,
  TerraElement,
} from "../../assets/icons";

const colors = theme.colors;

const Elements = () => {
  return (
    <div
      style={{
        paddingBottom: 30,
        backgroundColor: "#101010",
      }}
    >
      <div style={{ fontSize: 70, color: colors.white }}>Стихії</div>

      <div style={{ margin: "0 auto", width: "90%", maxWidth: 400 }}>
        <RuleSegment
          card={() => <PiroElement width={170} height={270} />}
          cardPosition="left"
          color="piro"
          header="Піро"
        >
          <div style={{ color: "white", whiteSpace: "pre-line" }}>
            Вистрілить в будь-якого гравця у свій хід{"\n"}Можна відбится від
            картки
            <span style={{ color: colors.king }}> Гвардія</span>
            {"\n"}
            Можна відбится від картки Вартовий{"\n"}Можна відбити карткою{" "}
            <span style={{ color: colors.aero }}>промах</span>
            {"\n"} Не можна відбити карткою{" "}
            <span style={{ color: colors.aero }}>рикошет</span>
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <AeroElement width={170} height={270} />}
          cardPosition="right"
          color="aero"
          header="Аеро"
        >
          <div style={{ color: "white" }}>
            Ви можете ухилитися від будь-якої картки атаки, сундука, стихії, під
            час будь-чийого ходу
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <AquaElement width={170} height={270} />}
          cardPosition="left"
          color="aqua"
          header="Аква"
        >
          <div style={{ color: "white" }}>
            Відновіть одиницю життя себе або будь-якого гравця в будь-чий хід
          </div>
          <br />
          <div style={{ color: "white" }}>
            Карта ДІЄ якщо у грі залишилися 2 гравці
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <TerraElement width={170} height={270} />}
          cardPosition="right"
          color="terra"
          header="Терра"
        >
          <div style={{ color: "white" }}>
            Поставте щит для себе або будь-якого гравця у свій хід
          </div>
        </RuleSegment>

        <BackButton color="white" />
      </div>
    </div>
  );
};

export default Elements;

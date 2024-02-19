import React from "react";
import RuleSegment from "../../components/RuleSegment";
import theme from "../../theme";
import {
  Accuracy,
  Destruction,
  Poison,
  TerraShield,
  Theft,
} from "../../assets/icons";
import BackButton from "../../components/BackButton";

const colors = theme.colors;

const Terra = () => {
  return (
    <div
      style={{
        paddingBottom: 30,
        backgroundColor: "#101010",
      }}
    >
      <div style={{ fontSize: 70, color: colors.terra }}>Тера</div>

      <div style={{ margin: "0 auto", width: "90%", maxWidth: 400 }}>
        <RuleSegment
          card={() => <Accuracy width={170} height={270} />}
          cardPosition="left"
          color="terra"
          header="Влучність"
        >
          <div style={{ color: "white" }}>
            Картку <span style={{ color: colors.piro }}>іскра</span> можна
            розіграти не тільки на гравця з права чи з ліва, а і на гравців за
            ними
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <TerraShield width={170} height={270} />}
          cardPosition="right"
          color="terra"
          header="Щит"
        >
          <div style={{ color: "white" }}>
            Блокує будь-яку атаку. Неможливо втратити життя якщо у вас на столі
            стоїть <span style={{ color: colors.terra }}>щит</span>. Картку
            можна поставити тільки у свій хід
          </div>
          <br />
          <div style={{ color: "white" }}>
            Навіть якщо противник наносить вам подвійний удар,{" "}
            <span style={{ color: colors.terra }}>щит</span> анулює цю дію після
            чого зникне
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Theft width={170} height={270} />}
          cardPosition="left"
          color="terra"
          header="Крадіжка"
        >
          <div style={{ color: "white" }}>
            Забиріть від будь якого гравця картку з руки або з стола. Укравши
            королівсь картку ви скидуєте її у відбій та тягнете додаткову картку
            з колоди.
          </div>
          <br />
          <div style={{ color: colors.clarification }}>
            Не можна вкрасти картку сундук або стехії
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Poison width={170} height={270} />}
          cardPosition="right"
          color="terra"
          header="Отрута"
        >
          <div style={{ color: "white" }}>
            У свій хід ви можете поставити картку{" "}
            <span style={{ color: colors.terra }}>отрута</span> на будь-якого
            гравця. На початку ходу гравець з активною карткою{" "}
            <span style={{ color: colors.terra }}>отрута</span> витягує картку з
            колоди, якщо картка типу{" "}
            <span style={{ color: colors.terra }}>рослина</span> гравець не
            втрачає життя, якщо картка будь-якого іншого типу гравець втрачає 1
            життя
          </div>
          <br />
          <div style={{ color: colors.clarification }}>
            Не можна поставити на гравця з активною карткою капкан
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Destruction width={170} height={270} />}
          cardPosition="left"
          color="terra"
          header="Знищення"
        >
          <div style={{ color: "white" }}>
            Ви знищуєте будь-яку картку з руки або з столу будь-якого гравця.
            Знищена картка відправляється у відбій
          </div>
          <br />
          <div style={{ color: colors.clarification }}>
            Не можна знищети картку сундук або стехії
          </div>
        </RuleSegment>

        <BackButton color="terra" />
      </div>
    </div>
  );
};

export default Terra;

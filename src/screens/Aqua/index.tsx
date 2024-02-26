import React from "react";
import RuleSegment from "../../components/RuleSegment";
import theme from "../../theme";
import { Jester, Life, Owl, Piroblock, WaterPotion } from "../../assets/icons";
import BackButton from "../../components/BackButton";

const colors = theme.colors;

const Aqua = () => {
  return (
    <div
      style={{
        paddingBottom: 30,
        backgroundColor: "#101010",
      }}
    >
      <div style={{ fontSize: 70, color: colors.aqua }}>Аква</div>

      <div style={{ margin: "0 auto", width: "90%", maxWidth: 400 }}>
        <RuleSegment
          card={() => <Owl width={170} height={270} />}
          cardPosition="left"
          color="aqua"
          header="Сова"
        >
          <div style={{ color: "white" }}>
            Картка ставиться на стіл та приносить +1 додаткову картку на початку
            вашого ходу
          </div>
          <br />
          <div style={{ color: colors.clarification }}>
            Якщо у вас активна карта сова і на початку ходу ви тягнете карту
            сундук, сова всеодно приносить 1 картку
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Piroblock width={170} height={270} />}
          cardPosition="right"
          color="aqua"
          header="піроблок"
        >
          <div style={{ color: "white" }}>
            Картка ставиться на противника та не дозволяє йому використовувати
            вогняні закляття наступний хід
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Life width={170} height={270} />}
          cardPosition="left"
          color="aqua"
          header="життя"
        >
          <div style={{ color: "white" }}>
            Відновлює одиницю життя для всіх гравців
          </div>
          <br />
          <div style={{ color: "white" }}>
            Якщо ви втратили всі{" "}
            <span style={{ color: colors.aqua }}>життя</span> ви можете
            використати картку життя не у свій хід, щоб відновити 1 життя собі
            та всім гравцям
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <WaterPotion width={170} height={270} />}
          cardPosition="right"
          color="aqua"
          header="зілля"
        >
          <div style={{ color: "white" }}>
            Відновлює одиницю життя. Картка не діє якщо у грі залишилися 2
            гравці
          </div>
          <br />
          <div style={{ color: "white" }}>
            Якщо ви втратили всі життя ви можете використати картку{" "}
            <span style={{ color: colors.aqua }}>зілля</span> не у свій хід, щоб
            відновити 1 життя. Карта не діє якщо у грі залишилися 2 гравці
          </div>
        </RuleSegment>
        <RuleSegment
          card={() => <Jester width={170} height={270} />}
          cardPosition="left"
          color="aqua"
          header="блазень"
        >
          <div style={{ color: "white" }}>
            Ви ставите картку будь-якому гравцю та всі типи вогняних заклять
            долітають до цього гравця.
          </div>
          <br />
          <div style={{ color: "white" }}>
            Картка перестає діяти на початку ходу гравця з даною карткою на
            столі
          </div>
        </RuleSegment>

        <BackButton color="aqua" />
      </div>
    </div>
  );
};

export default Aqua;

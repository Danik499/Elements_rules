import React from "react";
import {
  Guards,
  Mirror,
  Potion,
  Prison,
  Shield,
  Sword,
} from "../../assets/icons";
import theme from "../../theme";
import RuleSegment from "../../components/RuleSegment";

const colors = theme.colors;

const King = () => {
  return (
    <div
      style={{
        paddingBottom: 30,
        backgroundColor: "#101010",
      }}
    >
      <div style={{ fontSize: 70, color: colors.king }}>Король</div>

      <div style={{ margin: "0 auto", width: "90%", maxWidth: 400 }}>
        <RuleSegment
          card={() => <Sword width={170} height={270} />}
          cardPosition="left"
          color="king"
          header="Меч"
        >
          <div style={{ color: "white" }}>
            Нанесіть удар по гравцю зправа або зліва
          </div>
          <br />
          <div style={{ color: "white" }}>
            Картка віднімає 1 жаття якщо у противника немає
            <span style={{ color: colors.aero }}>
              &nbsp;промахів, рикошетів&nbsp;
            </span>
            або <span style={{ color: colors.terra }}>захисту</span>
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Guards width={170} height={270} />}
          cardPosition="right"
          color="king"
          header="Гвардія"
        >
          <div style={{ color: "white" }}>
            Всі гравці відбиваються вогняними картами. Якщо нема - втрата
            одиниці здоров&apos;я
          </div>
          <br />
          <div style={{ color: colors.piro }}>
            Іскра, Вогонь, Блискавка, Інферно, Виклик
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Shield width={170} height={270} />}
          cardPosition="left"
          color="king"
          header="Щит"
        >
          <div style={{ color: "white" }}>
            Карта ставиться на стіл та блокує 1 атаку
          </div>
          <br />
          <div style={{ color: "white" }}>
            Блокує будь-яку атаку. Неможливо втратити життя якщо у вас на столі
            стоїть <span style={{ color: colors.king }}>щит</span>. Картку можна
            поставити тільки у свій хід
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Potion width={170} height={270} />}
          cardPosition="right"
          color="king"
          header="Зілля"
        >
          <div style={{ color: "white" }}>Відновлює одиницю життя</div>
          <br />
          <div style={{ color: "white" }}>
            Якщо ви втратили всі життя ви можете використати картку{" "}
            <span style={{ color: colors.king }}>Зілля</span> не у свій хід, щоб
            відновити 1 життя. Карта не діє якщо у грі залишилися 2 гравці
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Prison width={170} height={270} />}
          cardPosition="left"
          color="king"
          header="В'язниця"
        >
          <div style={{ color: "white" }}>
            На початку ходу гравець з активною карткою{" "}
            <span style={{ color: colors.king }}>в’язниця</span> тягне картку з
            колоди, якщо тип карти не{" "}
            <span style={{ color: colors.aero }}>повітря</span>, гравець
            пропускає хід і скидує картку{" "}
            <span style={{ color: colors.king }}>в’язниця</span> у відбій, якщо
            випадає карта <span style={{ color: colors.aero }}>повітря</span>{" "}
            гравець не пропускає хід і так само скидує карту{" "}
            <span style={{ color: colors.king }}>в’язниця</span> у відбій
          </div>
        </RuleSegment>

        <RuleSegment
          card={() => <Mirror width={170} height={270} />}
          cardPosition="right"
          color="king"
          header="Дзеркало"
        >
          <div style={{ color: "white" }}>
            Відбиває закляття{" "}
            <span style={{ color: colors.piro }}>Іскра, Вогонь, Блискавка</span>
          </div>
          <br />
          <div style={{ color: "white" }}>
            До прикладу: Гравець скидує на вас карту{" "}
            <span style={{ color: colors.piro }}>Вогонь</span> ви можете
            використати карту{" "}
            <span style={{ color: colors.king }}>Дзеркало</span>, щоб відбити
            атаку та нанести противнику 2
          </div>
        </RuleSegment>
      </div>
    </div>
  );
};

export default King;

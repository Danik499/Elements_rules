import React from "react";
import MenuButton from "../../components/MenuButton";
import {
  Aero,
  Aqua,
  Characters,
  Chest,
  Fire,
  King,
  Rules,
  Sword,
  Terra,
} from "../../assets/icons";

const Home = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <div style={{ fontSize: 70 }}>Правила</div>
      <div style={{ marginTop: -15 }}>
        <MenuButton
          icon={() => <Rules width={50} height={50} />}
          label="Правила"
          to="rules"
        />
        <MenuButton
          icon={() => <Characters width={50} height={50} />}
          label="Персонажі"
          to="characters"
        />
        <MenuButton
          icon={() => <King width={50} height={50} />}
          label="Король"
          to="king"
        />
        <MenuButton
          icon={() => <Fire width={50} height={50} />}
          label="Піро"
          to="piro"
        />
        <MenuButton
          icon={() => <Terra width={50} height={50} />}
          label="Тера"
          to="terra"
        />
        <MenuButton
          icon={() => <Aero width={50} height={50} />}
          label="Аеро"
          to="aero"
        />
        <MenuButton
          icon={() => <Aqua width={50} height={50} />}
          label="Аква"
          to="aqua"
        />
        <MenuButton
          icon={() => <Chest width={50} height={50} />}
          label="Сундук"
          to="chest"
        />
      </div>
    </div>
  );
};

export default Home;

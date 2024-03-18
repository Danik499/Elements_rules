import React from "react";
import MenuButton from "../../components/MenuButton";
import {
  Aero,
  Aqua,
  Characters,
  Chest,
  Elements,
  Fire,
  Instagram,
  King,
  Rules,
  Telegram,
  Terra,
} from "../../assets/icons";
import theme from "../../theme";
import { Link } from "react-router-dom";

const colors = theme.colors;

const Home = () => {
  return (
    <div style={{ paddingBottom: 30, backgroundColor: "#101010" }}>
      <div style={{ fontSize: 70, color: colors.white }}>Правила</div>
      <div style={{ marginTop: -15 }}>
        <MenuButton
          icon={() => <Rules width={50} height={50} />}
          label="Правила"
          to="rules"
        />
        <MenuButton
          icon={() => <Characters width={50} height={50} />}
          label="Персонажі"
          color="character"
          to="characters"
        />
        <MenuButton
          icon={() => <King width={50} height={50} />}
          label="Король"
          color="king"
          to="king"
        />
        <MenuButton
          icon={() => <Fire width={50} height={50} />}
          label="Піро"
          color="piro"
          to="piro"
        />
        <MenuButton
          icon={() => <Terra width={50} height={50} />}
          label="Терра"
          color="terra"
          to="terra"
        />
        <MenuButton
          icon={() => <Aero width={50} height={50} />}
          label="Аеро"
          color="aero"
          to="aero"
        />
        <MenuButton
          icon={() => <Aqua width={50} height={50} />}
          label="Аква"
          color="aqua"
          to="aqua"
        />
        <MenuButton
          icon={() => <Elements width={50} height={50} />}
          label="Стихії"
          to="elements"
        />
        <MenuButton
          icon={() => <Chest width={50} height={50} />}
          label="Сундук"
          color="chest"
          to="chest"
        />
        <div style={styles.socialMediaButtons}>
          <Link
            to="https://telegram.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.socialMediaButton}>
              <Telegram />
            </button>
          </Link>
          <Link
            to="https://instagram.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.socialMediaButton}>
              <Instagram />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  socialMediaButton: {
    backgroundColor: theme.colors.gray,
    border: "none",
    maxHeight: 100,
    maxWidth: 150,
  },
  socialMediaButtons: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    margin: "0 auto",
    maxWidth: 400,
    marginTop: 15,
  },
};

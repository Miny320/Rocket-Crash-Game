import { MineGame } from "@features/games";
import { MineBetControlPanel, MineView } from "@features/accessories";
import { useRef } from "react";
import { IRefMineGame } from "@features/games/mine";
import S from "./index.module.scss";

const MineGamePage = () => {
  const phaserRef = useRef<IRefMineGame | null>(null);

  return (
    <div className={S.body}>
      <div className={S.gameContainer}>
        <MineGame ref={phaserRef} />
      </div>
      <div className={S.controlsContainer}>
        <MineBetControlPanel />
        <MineView />
      </div>
    </div>
  );
};

export default MineGamePage;

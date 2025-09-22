import { CrashGame } from "@features/games";
import { BetModeControl, BetPlayList, BetView } from "@features/accessories";
import { useRef } from "react";
import { IRefPhaserGame } from "@features/games/crash";
import S from "./index.module.scss";

const CrashGamePage = () => {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <div className={S.body}>
      <div className={S.gameContainer}>
        <CrashGame ref={phaserRef} />
      </div>
      <div className={S.controlsContainer}>
        <BetModeControl />
        <BetView />
        <BetPlayList />
      </div>
    </div>
  );
};

export default CrashGamePage;

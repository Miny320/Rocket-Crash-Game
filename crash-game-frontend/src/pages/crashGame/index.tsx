import { CrashGame } from "@features/games";
import { BetControl, CrashPlayerList, CrashView } from "@features/accessories";
import { useRef, useState } from "react";
import { IRefPhaserGame } from "@features/games/crash";
import S from "./index.module.scss";

const CrashGamePage = () => {
  const phaserRef = useRef<IRefPhaserGame | null>(null);
  const [currentCashout, setCurrentCashout] = useState<number>(1.0);

  return (
    <div className={S.body}>
      <div className={S.gameContainer}>
        <CrashGame ref={phaserRef} />
      </div>
      <div className={S.controlsContainer}>
        <BetControl currentCashout={currentCashout} />
        <CrashView setCurrentCashout={setCurrentCashout} />
        <CrashPlayerList />
      </div>
    </div>
  );
};

export default CrashGamePage;

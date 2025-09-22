import { CoinFlipGame } from "@features/games";
import { CoinFlipBetControl, CoinFlipView } from "@features/accessories";
import { useRef } from "react";
import { IRefCoinGame } from "@features/games/coinflip";
import S from "./index.module.scss";

const CoinflipGamePage = () => {
  const phaserRef = useRef<IRefCoinGame | null>(null);

  return (
    <div className={S.body}>
      <div className={S.gameContainer}>
        <CoinFlipGame ref={phaserRef} />
      </div>
      <div className={S.controlsContainer}>
        <CoinFlipBetControl />
        <CoinFlipView />
      </div>
    </div>
  );
};

export default CoinflipGamePage;

import Table from "../components/Table";
import Header from "../components/Header";
import LotteryCard from "../components/LotteryCard";
import style from "../styles/Home.module.css";

import { useAppContext } from "../context/context";
export default function Home() {
  const { address } = useAppContext();

  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.wrapee}>
        {address ? (
          <>
            <LotteryCard />
            <Table />
          </>
        ) : (
          <div
            style={{
              height: "70vh",
              color: "White",
              width: "100%",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "45px",
              fontFamily: '"VT323", monospace',
            }}
          >
            Please connect to wallet with Metamask
          </div>
        )}
      </div>
    </div>
  );
}

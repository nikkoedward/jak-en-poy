import Arena from "@components/Arena";
import Footer from "@components/Footer";
import Rules from "@components/Rules";
import Scoreboard from "@components/Scoreboard";
import Wrapper from "@components/Wrapper";
import { cookies } from "next/headers";
import Preloader from "@components/Preloader";
import { store } from "@redux/store";
import { setScore } from "@redux/slices/configSlice";

export default function Home() {
  const appCookies = cookies();
  const jajankenScore = appCookies.get("jajankenScore");
  if (jajankenScore) store.dispatch(setScore(Number(jajankenScore.value)));

  return (
    <main className="relative overflow-hidden">
      <Preloader score={store.getState().config.score} />
      <Rules />
      <Wrapper>
        <div className="flex flex-col justify-between h-screen">
          {/* Score */}
          <Scoreboard />
          {/* Main UI */}
          <Arena />
          {/* Footer */}
          <Footer />
        </div>
      </Wrapper>
    </main>
  );
}

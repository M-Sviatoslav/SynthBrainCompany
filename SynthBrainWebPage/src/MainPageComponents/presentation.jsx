import Banner from "./banner";
import AgentInfo from "./aiAgentInfo"
import DiamondRow from "./botSection";
import BotInfo from "./botInfo"
import Footer from "./footer";

export default function Presentation(){
  return (
    <div>
      <h1>Synth Brain company , its vanguard of new technology</h1>
      <div className="glow-line"></div>
      <Banner />
      <AgentInfo />
      <div className="glow-line"></div>
      <h1 className="botText">Creating a bot for multiple tasks</h1>
      <DiamondRow />
      <BotInfo />
      <div className="glow-line"></div>
      <Footer/>
    </div>
  );
}
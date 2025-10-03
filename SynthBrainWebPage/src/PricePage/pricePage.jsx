import AgentPrices from "./agentPrices";
import BotPrices from "./botPrices";
import ChatBox from "./chatBox";

const PricePage = () => {
  return (
    <div>
      <AgentPrices />
      <BotPrices />
      <h1 className="addTextInPrice">
        Your project’s timeline and budget are defined by the features you
        choose. For personalized details, you can always reach us via the email
        listed at the bottom of the homepage. To make things easier, we’ve also
        created a smart tool that helps you instantly estimate the cost and
        delivery time of your project.
      </h1>
      <ChatBox/>
    </div>
  );
};

export default PricePage;

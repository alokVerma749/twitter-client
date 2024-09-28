import SidebarNavigation from "./components/sidebar/Sidebar";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";
import CardContainer from "./components/CardContainer/CardContainer";
import ListItem from "./components/ListItem/ListItem";
import FollowCard from "./components/FollowCard/FollowCard";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen mx-24">
      <div className="col-span-3 border-r border-gray-600 p-2"><SidebarNavigation /></div>
      <div className="col-span-6 p-2">Feeds</div>

      <div className="col-span-3 border border-gray-600 p-3 space-y-2">
        <CardContainer headingText="Subscribe To Primium"><SubscriptionCard /></CardContainer>

        <CardContainer headingText="What's Happening">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </CardContainer>

        <CardContainer headingText="Who To Follow">
          <FollowCard />
          <FollowCard />
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </CardContainer>
      </div>
    </div>
  );
}

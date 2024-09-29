import SidebarNavigation from "../components/sidebar/Sidebar";
import SubscriptionCard from "../components/SubscriptionCard/SubscriptionCard";
import CardContainer from "../components/CardContainer/CardContainer";
import ListItem from "../components/ListItem/ListItem";
import FollowCard from "../components/FollowCard/FollowCard";
import FeedCard from "../components/FeedCard/FeedCard";
import AuthCard from "../components/AuthCard/AuthCard";

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen mx-24">
      {/* Navigation Sidebar */}
      <div className="col-span-3 border-r border-gray-600 p-2"><SidebarNavigation /></div>

      {/* Feed column */}
      <div className="col-span-6 p-2">
        <FeedCard />
      </div>

      {/* Suggestion Column */}
      <div className="col-span-3 border-gray-600 p-3 space-y-2">
        <CardContainer headingText="New to Nest Feed?"><AuthCard /></CardContainer>
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

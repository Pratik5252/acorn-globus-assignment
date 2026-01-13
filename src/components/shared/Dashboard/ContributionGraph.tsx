import * as React from "react";
import dashboardData from "@/data/dashboard.json";

const ContributionGraph = () => {
  const { users } = dashboardData;

  // Sort users by percentage descending
  const sortedUsers = [...users].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="w-full h-fit flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2 mt-6">
      <div className="w-full flex-1 bg-border-2/30 rounded-full p-1 flex gap-1.5 items-center overflow-x-auto no-scrollbar">
        {sortedUsers.map((user, index) => (
          <div
            key={user.id}
            className={`h-fit ${
              user.isTeam
                ? "bg-none sm:w-40"
                : "bg-card-2 shadow-xs min-w-fit flex-1 sm:flex-[var(--percentage)]"
            } ${
              index >= 3 ? "hidden xs:flex" : "flex"
            } rounded-full items-center justify-between px-1 py-0.5 sm:px-1.5 sm:py-1  overflow-hidden whitespace-nowrap`}
            style={user.isTeam ? {} : { "--percentage": user.percentage } as React.CSSProperties}
          >
            <div className="flex items-center gap-2 min-w-0">
              <img
                src={user.avatar}
                alt={user?.name}
                className="w-6 h-6 rounded-full object-cover shrink-0"
              />

              <span className="font-semibold text-xs sm:text-sm font-hubot truncate ">
                ${user.revenue.toLocaleString()}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium mr-1 hidden md:inline-block">
              {user.percentage}%
            </span>
          </div>
        ))}
        {sortedUsers.length > 3 && (
          <div className="flex sm:hidden h-8 min-w-[2rem] items-center justify-center bg-card-2 shadow-xs rounded-full px-2 shrink-0">
            <span className="text-xs font-semibold text-foreground">
              +{sortedUsers.length - 3}
            </span>
          </div>
        )}
      </div>
      <button className="w-full sm:w-auto py-3 px-5 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-full font-medium text-xs cursor-pointer">
        Details
      </button>
    </div>
  );
};

export default ContributionGraph;

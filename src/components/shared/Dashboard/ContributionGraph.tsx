import dashboardData from "@/data/dashboard.json";

const ContributionGraph = () => {
  const { users } = dashboardData;

  // Sort users by percentage descending
  const sortedUsers = [...users].sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="w-full h-fit flex items-center gap-2 mt-6">
      <div className="w-full h-fit bg-border-2/30 rounded-full p-1 flex gap-1.5 items-center">
        {sortedUsers.map((user) => (
          <div
            key={user.id}
            className={`h-fit ${user.isTeam ? 'bg-none w-40' : 'bg-card-2 shadow-xs'} rounded-full flex items-center justify-between px-1.5 py-1 overflow-hidden whitespace-nowrap min-w-0`}
            style={user.isTeam ? {} :{ flex: user.percentage }}
          >
            <div className="flex items-center gap-2 min-w-0">
                <img
                  src={user.avatar}
                  alt={user?.name}
                  className="w-6 h-6 rounded-full object-cover shrink-0"
                />
              
              <span className="font-semibold text-sm font-hubot truncate">
                ${user.revenue.toLocaleString()}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-medium mr-1 hidden sm:inline-block">
              {user.percentage}%
            </span>
          </div>
        ))}
      </div>
      <button className="py-3 px-5 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-full font-medium text-xs cursor-pointer">
        Details
      </button>
    </div>
  );
};

export default ContributionGraph;

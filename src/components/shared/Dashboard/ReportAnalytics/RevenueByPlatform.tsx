import dashboardData from "@/data/dashboard.json";
import { AlignLeft, ChevronDown, Filter, ListFilter } from "lucide-react";

const RevenueByPlatform = () => {
  const { platforms } = dashboardData;

  const getIcon = (name: string, iconPath: string) => {
    return <img src={iconPath} alt={name} className="w-5 h-5 object-contain" />;
  };

  return (
    <div className="w-full bg-card flex flex-col h-full rounded-4xl p-4 border border-border-2/20 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-1.5 text-foreground hover:bg-black/5 p-1 rounded-md transition-colors ml-1">
          <AlignLeft className="w-5 h-5" />
          <ChevronDown className="w-4 h-4 ml-0.5" />
        </button>

        <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-2 border-border-2/50 bg-card hover:bg-card/20 transition-colors text-xs font-medium text-foreground cursor-pointer font-hubot">
          Filters
          <ListFilter className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Platform List */}
      <div className="flex flex-col gap-1">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="h-fit bg-card-2 p-3 py-2.5 flex items-center justify-between text-center shadow-xs rounded-lg gap-1"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                {getIcon(platform.name, platform.icon)}
              </div>
              <span className="text-muted-foreground text-sm font-hubot">
                {platform.name}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xs font-semibold text-foreground font-hubot leading-3 mt-1">
                ${platform.revenue.toLocaleString()}
              </span>
              <span className="text-xs font-medium min-w-[2.5rem] py-1 rounded-full bg-muted text-foreground font-hubot leading-3">
                {platform.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueByPlatform;
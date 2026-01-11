import dashboardData from "@/data/dashboard.json";
import { ChevronDown, ChevronRight, ChevronsDown, ChevronsUp, Star } from "lucide-react";

const TopStats = () => {
  const { revenue, users, kpiCards } = dashboardData;

  const getUserById = (id: number) => users.find((user) => user.id === id);

  const splitNumber = (num: number) => {
    const parts = num.toLocaleString().split(".");
    return {
      whole: parts[0],
      decimal: parts[1] || "00",
    };
  };
  const totalRevenue = splitNumber(revenue.total);
  const revenueChange = splitNumber(revenue.change.amount);

  return (
    <div className="flex items-stretch gap-4">
      <div className="flex-1 font-hubot">
        <p className="text-base text-foreground font-semibold">Revenue</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[1.75rem] font-hubot font-bold tracking-tight">
            ${totalRevenue.whole}
            <span className="text-[1.75rem] text-secondary-foreground font-hubot font-bold tracking-tight">
              .{totalRevenue.decimal}
            </span>
          </span>
          <div className="bg-accent text-secondary text-xs font-medium px-2 py-1 flex rounded-full items-center justify-center gap-0.5 leading-0">
            <ChevronsUp size={12} /> {revenue.change.percentage}%
          </div>
          <span className="bg-accent text-secondary text-xs font-medium px-2 py-1 flex rounded-full items-center justify-center gap-0.5 leading-3">
            ${revenueChange.whole}
            <span className="bg-accent text-white/50 text-xs leading-3">
              .{revenueChange.decimal}
            </span>
          </span>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">
          vs prev. ${revenue.previousTotal.toLocaleString()}{" "}
          {revenue.comparisonPeriod}
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="flex items-stretch gap-2">
        <div className="relative min-w-[140px] h-fit p-2 bg-card-2 flex flex-col justify-between border-2 border-border-2/50 rounded-md gap-1 overflow-visible">
          <div className="absolute w-[calc(100%_-_0.75rem)] h-[calc(100%_+_0.75rem)] bg-border-2/30 rounded-md -top-1.5 left-1.5 -z-10" />
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground font-medium">
              Top sales
            </span>
          </div>
          <span className="text-base font-semibold font-hubot">72</span>
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <img
                src={getUserById(3)?.avatar}
                alt={getUserById(3)?.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-xs text-foreground font-medium">
                Mikasa
              </span>
            </div>
            <button className="w-5 h-5 rounded-sm bg-card text-foreground flex items-center justify-center hover:bg-card/80 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="relative min-w-[140px] h-fit p-2 bg-card-foreground flex flex-col justify-between border-2 border-border-2/30 rounded-md gap-1">
          <div className="absolute w-[calc(100%_-_0.75rem)] h-[calc(100%_+_0.75rem)] bg-border-2/50 rounded-md -top-1.5 left-1.5 -z-10" />
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-muted-foreground font-medium">
              Best deal
            </span>
            <Star className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
          <span className="text-base text-secondary font-semibold font-hubot">
            $42,300
          </span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-secondary font-medium">
                Rolf Inc.
              </span>
            </div>
            <button className="w-5 h-5 rounded-sm bg-card-2 text-foreground flex items-center justify-center hover:bg-card-2/90 transition-colors">
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-stretch overflow-hidden gap-2">
        {kpiCards.map((card, index) => {
          const isHighlighted = card.highlighted;

          return (
            <div
              key={card.id}
              className={`w-[80px] h-fit p-2 flex flex-col items-center justify-between rounded-md border-2 gap-1.5 font-hubot font-medium ${
                isHighlighted ? "bg-none text-foreground border-accent" : "bg-card-2 border-border-2/50"
              }`}
            >
              <span className={`text-xs`}>{card.title}</span>
              <span
                className={`text-xs text-secondary rounded-full py-1 px-2 leading-4 ${
                  isHighlighted ? "bg-accent" : "bg-secondary-foreground"
                }`}
              >
                {card.value}
              </span>
              <span className={`text-xs flex items-center justify-center gap-0.5 leading-4`}>
                {card.change >= 0 ? <ChevronsUp className="w-3 h-3" /> : <ChevronsDown className="w-3 h-3" />} {Math.abs(card.change)}{card.change >= 0 ? "%" : ""}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopStats;

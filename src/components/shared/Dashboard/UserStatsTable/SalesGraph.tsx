import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { ChevronUp, ArrowUpRight, ChevronDown, Star } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import dashboardData from "@/data/dashboard.json";
import type { User } from "@/types";
import TooltipWrapper from "@/components/utils/TooltipWrapper";

const SalesGraph = ({user}: {user: User}) => {
  const chartConfig = {
    value: { label: "Value", color: "#d6255d" },
  };
  const salesDynamic = dashboardData.salesDynamic;
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-sm font-medium text-foreground">Sales dynamic</h4>
        <button className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors">
        <TooltipWrapper content="expand">
          <ArrowUpRight className="w-4 h-4 text-foreground" />
        </TooltipWrapper>
        </button>
      </div>
      <div className="h-24 w-full">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <LineChart
            data={salesDynamic}
            margin={{
              top: 5,
              right: 10,
              bottom: 5,
              left: 10,
            }}
          >
            <CartesianGrid
              horizontal={false}
              vertical={true}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              interval={3}
              orientation="top"
              tickMargin={10}
            />

            <Line
              type="bump"
              dataKey="previous"
              stroke="#e5b8b7"
              strokeWidth={1}
              strokeDasharray="4 4"
              dot={false}
            />
            <Line
              type="bump"
              dataKey="value"
              stroke="#d6255d"
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </div>
      <div className="relative mt-1 mb-2 px-1">
        {/* Gradient Line */}
        <div className="relative w-full h-1 rounded-full bg-linear-to-r from-[#e68a73] via-[#e3e58c] to-[#86d792]" />

        {/* Behance Icon */}
        <div className="absolute bg-[#FEF9FB] p-0.5 -top-0.5 -mt-1 left-1/4">
          <div className="absolute bg-accent w-2 h-2 -top-0.5 -right-0.5 flex justify-center items-center border border-border-1 rounded-full">
            <ChevronUp className="w-2 h-2 text-card-2" />
          </div>
          <img
            src="/icons/behance_white.svg"
            alt="Behance"
            className="w-3 h-3"
          />
        </div>

        {/* Dribbble Icon */}
        <div className="absolute bg-[#FEF9FB] p-0.5 -top-0.5 -mt-1 left-1/2 ">
          <div className="absolute bg-foreground w-2 h-2 -top-0.5 -right-0.5 flex justify-center items-center border border-border-1  rounded-full">
            <ChevronDown className="w-2 h-2 text-card-2" />
          </div>
          <img
            src="/icons/dribbble_white.svg"
            alt="Dribbble"
            className="w-3 h-3"
          />
        </div>

        <div className="absolute bg-none p-0.5 -top-0.5 -mt-1 left-11/12">
          <div className="absolute bg-accent w-2 h-2 -top-0.5 -right-0.5 flex justify-center items-center border border-border-1 rounded-full">
            <Star fill="white" className="w-1 h-1 text-card-2 -mt-0.5 -ml-px" />
          </div>
          <img
            src={user.avatar}
            alt="Dribbble"
            className="w-3 h-3 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesGraph;

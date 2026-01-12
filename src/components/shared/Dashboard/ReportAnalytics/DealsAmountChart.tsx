import { ChevronDown, AlignLeft, ListFilter, ShoppingBag } from "lucide-react";
import { Bar, BarChart, LabelList, Rectangle } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { name: "Behance", solid: 34, striped: 20, icon: '/icons/behance.svg' },
  { name: "Dribbble", solid: 72, striped: 0, icon: '/icons/dribbble.svg' },
  { name: "Google", solid: 43, striped: 0, icon: '/icons/google.svg' },
  { name: "Instagram", solid: 30, striped: 0, icon: '/icons/instagram.svg' },
  { name: "Other", solid: 0, striped: 62, icon: <ShoppingBag size={16} className="!w-3 !h-3 text-foreground" /> },
];

const chartConfig = {
  solid: {
    label: "deal closed",
    color: "#333333",
  },
  striped: {
    label: "projected",
    color: "#999999",
  },
};

// Custom shape for solid bar - rounded bottom corners, flat top if striped exists
const SolidBarShape = (props: any) => {
  const { x, y, width, height, index } = props;
  const hasStriped = chartData[index]?.striped > 0;
  const r = 12; // radius
  
  if (height <= 0) return null;
  
  // Build path: start top-left, go clockwise
  // If hasStriped: flat top, rounded bottom
  // If no striped: all corners rounded
  const topR = hasStriped ? 0 : r;
  const bottomR = r;
  
  const path = `
    M ${x + topR} ${y}
    L ${x + width - topR} ${y}
    ${topR > 0 ? `Q ${x + width} ${y} ${x + width} ${y + topR}` : `L ${x + width} ${y}`}
    L ${x + width} ${y + height - bottomR}
    Q ${x + width} ${y + height} ${x + width - bottomR} ${y + height}
    L ${x + bottomR} ${y + height}
    Q ${x} ${y + height} ${x} ${y + height - bottomR}
    L ${x} ${y + topR}
    ${topR > 0 ? `Q ${x} ${y} ${x + topR} ${y}` : `L ${x} ${y}`}
    Z
  `;
  
  return (
    <path
      d={path}
      fill="white"
      stroke="#e5e5e5"
      strokeWidth={1}
    />
  );
};

// Custom shape for striped bar - rounded top corners, flat bottom if solid exists  
const StripedBarShape = (props: any) => {
  const { x, y, width, height, index } = props;
  const hasSolid = chartData[index]?.solid > 0;
  const r = 12; // radius
  
  if (height <= 0) return null;
  
  // Build path: start top-left, go clockwise
  // If hasSolid: rounded top, flat bottom
  // If no solid: all corners rounded
  const topR = r;
  const bottomR = hasSolid ? 0 : r;
  
  const path = `
    M ${x + topR} ${y}
    L ${x + width - topR} ${y}
    Q ${x + width} ${y} ${x + width} ${y + topR}
    L ${x + width} ${y + height - bottomR}
    ${bottomR > 0 ? `Q ${x + width} ${y + height} ${x + width - bottomR} ${y + height}` : `L ${x + width} ${y + height}`}
    L ${x + bottomR} ${y + height}
    ${bottomR > 0 ? `Q ${x} ${y + height} ${x} ${y + height - bottomR}` : `L ${x} ${y + height}`}
    L ${x} ${y + topR}
    Q ${x} ${y} ${x + topR} ${y}
    Z
  `;
  
  return (
    <path
      d={path}
      fill="url(#stripePattern)"
      stroke="#e5e5e5"
      strokeWidth={1}
    />
  );
};

const DealsAmountChart = () => {
  return (
    <div className="w-full bg-card flex flex-col h-fit rounded-4xl p-4 border border-border-2/20 shadow-xs">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1.5 text-foreground hover:bg-black/5 p-1 rounded-md transition-colors ml-1">
          <AlignLeft className="w-5 h-5" />
          <ChevronDown className="w-4 h-4 ml-0.5" />
        </button>

        <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-2 border-border-2/50 bg-card hover:bg-card/20 transition-colors text-xs font-medium text-foreground cursor-pointer font-hubot">
          Filters
          <ListFilter className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex-1 w-full">
        <ChartContainer config={chartConfig} className="w-full h-fit">
          <BarChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} barGap={0} barCategoryGap="0%">
            <defs>
              <pattern id="stripePattern" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
                <rect width="3" height="6" transform="translate(0,0)" fill="white" />
                <rect width="3" height="6" transform="translate(3,0)" fill="#e0e0e0" />
              </pattern>
            </defs>
            <ChartTooltip
            label="Deals"
              cursor={{ fill: "transparent" }}
              content={<ChartTooltipContent indicator="dot" hideLabel/>}
            />

            <Bar
              dataKey="solid"
              stackId="a"
              shape={<SolidBarShape />}
              isAnimationActive={true}
              maxBarSize={44}
              fill="#fefefe"
            />

            <Bar
              dataKey="striped"
              stackId="a"
              shape={<StripedBarShape />}
              maxBarSize={44}
              fill="#e0e0e0"
            >
              <LabelList 
                dataKey="icon" 
                position="top" 
                content={({ x, y, width, index }) => {
                  const icon = chartData[index as number].icon;
                  const yPos = Number(y) + 24;
                  return (
                    <g transform={`translate(${Number(x) + Number(width)/2}, ${yPos})`}>
                      {typeof icon === 'string' ? (
                        <image href={icon} x="-8" y="-12" width="16" height="16" />
                      ) : (
                        <g transform="translate(-8, -12)">{icon}</g>
                      )}
                    </g>
                  );
                }}
              />
            </Bar>

          </BarChart>
        </ChartContainer>
      </div>

      <div className="mt-2.5 z-10">
        <p className="text-muted-foreground text-sm font-medium font-hubot">Deals amount</p>
        <button className="flex items-center gap-1 text-foreground text-sm font-bold hover:opacity-80 transition-opacity font-hubot">
            by referrer category
            <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default DealsAmountChart;
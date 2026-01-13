import { ChevronDown } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import {
  ChartContainer,
} from "@/components/ui/chart";
import dashboardData from "@/data/dashboard.json";

const PlatformValue = () => {
  // Get Dribbble data from platformValue (index 0 based on JSON inspection)
  const platformData = dashboardData.platformValue.find(
    (p) => p.platform === "Dribbble"
  );
  const details = platformData?.details;

  if (!platformData || !details) return null;

  // Get revenue stats
  const revenueStats = dashboardData.revenueStats.find(
    (r) => r.id === details.revenueStats
  );

  // Transform data for chart
  // We need to map months to an array: [{ month: 'Sep', user1: val, user2: val, ... }]
  // And we need user info for avatars
  const monthsOrder = ["Sep", "Oct", "Nov"];

  const chartData = monthsOrder.map((month) => {
    const monthData =
      revenueStats?.months[month as keyof typeof revenueStats.months] || [];
    // Sort by userId or assume order? JSON shows array. Let's assume order matches users 1, 2, 3
    // We'll flatten it
    const entry: any = { month };
    monthData.forEach((d: any) => {
      // Find user to get avatar
      const user = dashboardData.users.find((u) => u.id === d.userId);
      entry[`user${d.userId}`] = d.amount;
      entry[`user${d.userId}_avatar`] = user?.avatar;
      entry[`user${d.userId}_name`] = user?.name;
    });
    return entry;
  });

  const chartConfig = {
    user1: { label: "User 1", color: "#e6e6e6" },
    user2: { label: "User 2", color: "#e6e6e6" },
    user3: { label: "User 3", color: "#e6e6e6" },
  };

  // Custom Tick for Y Axis to right align values
  const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={50}
          y={0}
          dy={4}
          textAnchor="end"
          fill="#9ca3af"
          fontSize={12}
          fontWeight={500}
        >
          ${payload.value.toLocaleString()}
        </text>
      </g>
    );
  };

  // Custom Tick for X Axis to just show Month name
  const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#9ca3af"
          fontSize={12}
          fontWeight={500}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const tabs = [
    { id: 1, label: "Revenue" },
    { id: 2, label: "Leads" },
    { id: 3, label: "W/L" },
  ];

  return (
    <div className="w-full bg-card rounded-4xl border border-border-2/20 shadow-xs overflow-hidden">

      <div className="p-4 pb-0 mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-hubot gap-3">
            <img src="/icons/dribbble.svg" alt="Dribbble" className="w-6 h-6 sm:w-8 sm:h-8" />
            <div>
              <div className="text-muted-foreground text-xs sm:text-sm font-medium">
                Platform value
              </div>
              <button className="flex items-center gap-1 text-foreground text-xs sm:text-sm font-bold hover:opacity-80">
                {platformData.platform}
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="flex bg-card-2 rounded-xl p-0.5 gap-0.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={` px-2 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium  ${
                  tab.id === 1
                    ? "bg-black text-white shadow-sm"
                    : "bg-muted text-muted-foreground hover:text-foreground transition-colors"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:gap-4">

        <div className="relative bg-accent w-full sm:w-fit p-6  text-secondary flex flex-col sm:flex-row justify-between rounded-b-2xl sm:rounded-none sm:rounded-se-4xl pt-8 sm:pt-6">
          <p className="absolute h-fit text-white/20 font-hubot font-medium whitespace-nowrap -rotate-90 top-24 right-17 hidden sm:block">
            Average monthly
          </p>
          <p className="absolute bg-card text-foreground text-sm sm:text-base h-fit font-hubot font-medium whitespace-nowrap sm:hidden top-0 left-0 px-4 py-1 rounded-ee-md">
            Average monthly
          </p>

          <div className="flex sm:flex-col gap-4 w-full h-full ml-7 sm:ml-9 font-hubot font-medium">
            <div>
              <div className="text-white/50 text-sm">Revenue</div>
              <div className="text-sm font-bold">
                ${details.monthly_revenue.toLocaleString()}
              </div>
            </div>

            <div>
              <div className="text-white/60 text-sm">Leads</div>
              <div className="flex items-end gap-2">
                <span className="text-sm font-bold">{details.leads}</span>
                <span className="text-white/60 text-sm">97/276</span>
              </div>
            </div>

            <div>
              <div className="text-white/60 text-sm">Win/lose</div>
              <div className="flex items-end gap-2">
                <span className="text-sm font-bold">
                  {details.winPercentage}%
                </span>
                <span className="text-white/60 text-sm">
                  {details.winLoss}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-0 px-4 sm: px-0 sm:pr-4  font-hubot">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart
              data={chartData}
              margin={{ top: 30, right: 0, bottom: 16, left: 0 }}
              barGap={12}
            >
              <defs>
                <pattern
                  id="diagonalStripes"
                  patternUnits="userSpaceOnUse"
                  width="6"
                  height="6"
                  patternTransform="rotate(45)"
                >
                  <rect
                    width="3"
                    height="6"
                    transform="translate(0,0)"
                    fill="#e5e7eb"
                  />
                  <rect
                    width="3"
                    height="6"
                    transform="translate(0,0)"
                    fillOpacity={0.5}
                    fill="white"
                  />
                </pattern>
                <pattern
                  id="stripePattern2"
                  patternUnits="userSpaceOnUse"
                  width="6"
                  height="6"
                  patternTransform="rotate(45)"
                >
                  <rect
                    width="3"
                    height="6"
                    transform="translate(0,0)"
                    fill="#e0e0e0"
                  />
                  <rect
                    width="3"
                    height="6"
                    transform="translate(3,0)"
                    fill="white"
                  />
                </pattern>
              </defs>
              <CartesianGrid
                horizontal={true}
                vertical={false}
                stroke="#ffffff"
                strokeWidth={1}
              />
              <XAxis
                dataKey="month"
                tickLine={true}
                axisLine={false}
                tick={(props) => <CustomXAxisTick {...props} />}
              />
              <YAxis
                orientation="right"
                tickLine={false}
                axisLine={false}
                tick={(props) => <CustomYAxisTick {...props} />}
                ticks={[4000, 7500, 11000, 14500]}
                domain={[0, 14500]}
              />

              {[
                { key: "user1", fill: "url(#stripePattern2)", showLabel: true },
                { key: "user2", fill: "#d6d6d6", showLabel: false },
                { key: "user3", fill: "#d6d6d6", showLabel: false },
              ].map((user) => (
                <Bar
                  key={user.key}
                  dataKey={user.key}
                  fill={user.fill}
                  radius={[6, 6, 6, 6]}
                  barSize={28}
                >
                  {user.showLabel && (
                    <LabelList
                      dataKey={user.key}
                      position="top"
                      content={(props: any) => {
                        const { x, y, width, value } = props;
                        return (
                          <g transform={`translate(${(x + width/2) + 6}, ${y - 14})`}>
                            <rect
                              x="-30"
                              y="-12"
                              width="48"
                              height="20"
                              rx="6"
                              fill="#d6255d"
                            />
                            <text
                              x="-6"
                              y="2"
                              textAnchor="middle"
                              fill="white"
                              fontSize="10"
                              fontWeight="semibold"
                            >
                              ${value.toLocaleString()}
                            </text>
                          </g>
                        );
                      }}
                    />
                  )}
                  <LabelList
                    dataKey={`${user.key}_avatar`}
                    position="bottom"
                    content={(props: any) => {
                      const { x, y, width, height, index } = props;
                      const avatar = chartData[index][`${user.key}_avatar`];
                      return (
                        <g
                          transform={`translate(${x + width / 2 - 8}, ${
                            y + height - 8
                          })`}
                        >
                          <circle cx="8" cy="8" r="8" fill="none" stroke="#fefefe" strokeWidth="1" />
                          <clipPath id={`clip-${user.key}-${index}`}>
                            <circle cx="8" cy="8" r="8" />
                          </clipPath>
                          <image
                            href={avatar}
                            width="16"
                            height="16"
                            clipPath={`url(#clip-${user.key}-${index})`}
                            preserveAspectRatio="xMidYMid slice"
                          />
                        </g>
                      );
                    }}
                  />
                </Bar>
              ))}
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

export default PlatformValue;

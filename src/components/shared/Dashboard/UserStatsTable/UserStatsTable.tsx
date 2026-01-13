import { useState } from "react";
import { ChevronUp, ChevronsUp } from "lucide-react";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import dashboardData from "@/data/dashboard.json";
import PlatformRevenueBento from "./PlatformRevenueBento";
import SalesGraph from "./SalesGraph";

const tableHeadItem = ["Sales", "Revenue", "Leads", "KPI", "W/L"];

const UserStatsTable = () => {
  // Only user with id 3 (Mikasa) has the accordion open by default
  const [openRowId, setOpenRowId] = useState<number | null>(3);

  // Get only users with actual data (not team)
  const users = dashboardData.users.filter((u) => !u.isTeam && u.name);

  // Sort users: Mikasa (id=3) second, Armin (id=1) first, Eren (id=2) third
  const sortedUsers = [...users].sort((a, b) => {
    const order = [1, 3, 2];
    return order.indexOf(a.id) - order.indexOf(b.id);
  });

  const platformDistribution = dashboardData.platformDistribution;

  const toggleRow = (id: number) => {
    setOpenRowId(openRowId === id ? null : id);
  };

  return (
    <div className="w-full xl:w-1/2 h-fit overflow-hidden font-hubot">
      <Table className="border-separate border-spacing-0">
        <TableHeader>
          <TableRow className="!border-b-0 border-0">
            {tableHeadItem.map((item, index) => (
              <TableHead
                key={index}
                className="text-muted-foreground font-medium text-xs pb-2 h-auto border-0"
              >
                {item}
              </TableHead>
            ))}
            <TableHead className="w-10 pb-2 h-auto border-0 hidden sm:block"></TableHead>
          </TableRow>
        </TableHeader>

        {sortedUsers.map((user, index) => (
          <div className="contents" key={user.id}>
            <Collapsible
              open={openRowId === user.id}
              onOpenChange={() => toggleRow(user.id)}
              asChild
            >
              <tbody
                className={`group transition-all ${
                  openRowId === user.id
                    ? "bg-[linear-gradient(135deg,var(--color-card-2)_0%,#ffeaf2_60%)]"
                    : "bg-card-2"
                }`}
              >
                <TableRow
                  className={` transition-colors ${
                    openRowId === user.id ? "" : "shadow-xs"
                  } border-0 rounded-3xl bg-transparent`}
                >
                  {/* User Avatar + Name + Sales */}
                  <TableCell
                    className={`py-1.5 ${
                      openRowId === user.id
                        ? "rounded-tl-3xl "
                        : "rounded-l-3xl"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-6 h-6 rounded-full object-cover "
                        />
                      </div>
                      <span className="font-medium text-xs sm:text-sm text-foreground hidden sm:block">
                        {user.name}
                      </span>
                    </div>
                  </TableCell>

                  {/* Revenue */}
                  <TableCell className="font-medium text-xs sm:text-sm py-1.5">
                    ${user.revenue.toLocaleString()}
                  </TableCell>

                  {/* Sales + Leads */}
                  <TableCell className="py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="bg-foreground text-secondary text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                        {user.sales}
                      </span>
                      <span className="bg-muted text-foreground text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                        {user.leads}
                      </span>
                    </div>
                  </TableCell>

                  {/* KPI */}
                  <TableCell className="text-xs sm:text-smtext-foreground font-medium py-1.5">
                    {user.kpi?.toFixed(2)}
                  </TableCell>

                  {/* W/L */}
                  <TableCell className="py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm text-foreground font-medium">
                        {user.winRate}
                      </span>
                      <span className="bg-foreground text-secondary text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full min-w-8 text-center">
                        {user.closed}
                      </span>
                      <span className="bg-muted text-foreground text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                        {user.pending}
                      </span>
                    </div>
                  </TableCell>

                  {/* Expand Button */}
                  <TableCell
                    className={` ${
                      openRowId === user.id ? "rounded-tr-3xl" : "rounded-r-3xl"
                    }`}
                  >
                    <CollapsibleTrigger asChild>
                      <button
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          openRowId === user.id
                            ? "bg-accent text-white"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        <ChevronUp
                          className={`w-4 h-4 transition-transform ${
                            openRowId === user.id ? "" : "rotate-180"
                          }`}
                        />
                      </button>
                    </CollapsibleTrigger>
                  </TableCell>
                </TableRow>

                {/* Expanded Content */}
                <CollapsibleContent asChild>
                  <tr className="bg-transparent border-0">
                    <td colSpan={6} className="p-0 rounded-b-3xl">
                      <div className="px-4 pb-4 pt-2">
                        {/* Badges */}
                        {user.badges && user.badges.length > 0 && (
                          <div className="flex items-center gap-2 mb-2">
                            {user.badges.map((badge, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-card-2 rounded-full text-xs font-medium text-foreground shadow-xs"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Work with platforms */}
                        <div className="mb-2">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-sm font-semibold text-foreground">
                              Work with platforms
                            </h4>
                            {user.highlight && (
                              <div className="flex items-center gap-2">
                                <span className="font-medium text-xs bg-accent text-secondary py-1.5 px-2 rounded-full flex items-center justify-center gap-1 leading-3">
                                  <ChevronsUp className="w-3 h-3" />
                                  {user.highlight.rank}
                                </span>
                                <span className="font-medium text-xs bg-accent text-secondary py-1 px-2 rounded-full">
                                  ${user.highlight.bonus.toLocaleString()}
                                </span>
                              </div>
                            )}
                          </div>

                          {/* Platform Revenue Bento */}
                          <PlatformRevenueBento
                            platformDistribution={platformDistribution}
                          />
                        </div>

                        {/* Sales dynamic chart */}
                        <SalesGraph user={user} />
                      </div>
                    </td>
                  </tr>
                </CollapsibleContent>
              </tbody>
            </Collapsible>

            {/* Spacer Body */}
            {index < sortedUsers.length - 1 && (
              <tbody className="border-0 bg-transparent">
                <tr className="h-2 border-0 bg-transparent">
                  <td colSpan={6} className="p-0 border-0"></td>
                </tr>
              </tbody>
            )}
          </div>
        ))}
      </Table>
    </div>
  );
};

export default UserStatsTable;

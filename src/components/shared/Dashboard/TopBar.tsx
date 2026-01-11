import { Download, Plus, Settings2, Share } from "lucide-react";
import data from "../../../data/dashboard.json";
import type { User } from "@/types";
import { Button } from "@/components/ui/button";
import TooltipWrapper from "@/components/utils/TooltipWrapper";

const UserOptions = [
  { name: "settings", icon: Settings2 },
  { name: "download", icon: Download },
  { name: "share", icon: Share },
];
// Getting user from predifined JSON data in dashboard.json
const { users }: { users: User[] } = data;

const TopBar = () => {
  return (
    <div className="h-fit flex justify-between items-center mb-2">
      <div className="flex items-center gap-3">
        <TooltipWrapper content="Add member">
          <button className="bg-pill flex items-center justify-center border-2 border-border-2/50 rounded-full p-1 hover:bg-pill/20 cursor-pointer">
            <Plus size={16} strokeWidth={1.5} className="text-primary" />
          </button>
        </TooltipWrapper>

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-pill flex items-center justify-center gap-2 border-2 border-border-2/50 rounded-full px-0.5 py-0.5"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-5 h-5 rounded-full"
            />
            {!user.isTeam && (
              <p className="text-foreground text-xs mr-2 font-medium leading-0 font-hubot">
                {user.name}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        {UserOptions.map((option) => (
        <TooltipWrapper content={option.name} key={option.name}>
          <button
            className="bg-pill flex items-center justify-center border-2 border-border-2/50 rounded-full !p-1 hover:bg-pill/20 cursor-pointer"
          >
            <option.icon size={16} strokeWidth={1.5} className="text-primary"/>
          </button>
        </TooltipWrapper>
        ))}
      </div>
    </div>
  );
};

export default TopBar;

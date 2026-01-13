import { Download, Plus, Settings2, Share,MoreHorizontal } from "lucide-react";
import data from "../../../data/dashboard.json";
import type { User } from "@/types";
import TooltipWrapper from "@/components/utils/TooltipWrapper";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const UserOptions = [
  { name: "settings", icon: Settings2 },
  { name: "download", icon: Download },
  { name: "share", icon: Share },
];
// Getting user from predifined JSON data in dashboard.json
const { users }: { users: User[] } = data;

const TopBar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="h-fit flex justify-between items-baseline mb-2 gap-2">
      <div className="flex items-center gap-1 xs:gap-3 overflow-x-auto pb-1">
        <TooltipWrapper content="Add member">
          <button className="bg-pill flex items-center justify-center border-2 border-border-2/50 rounded-full p-1 hover:bg-pill/20 cursor-pointer">
            <Plus size={16} strokeWidth={1.5} className="text-primary" />
          </button>
        </TooltipWrapper>

        {users.map((user, index) => (
          <div
            key={user.id}
            className={`bg-pill items-center justify-center gap-2 border-2 border-border-2/50 rounded-full px-0.5 py-0.5 ${
              index >= 2 ? "hidden xs:flex" : "flex"
            }`}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-5 h-5 rounded-full"
            />
            {!user.isTeam && (
              <p className="text-foreground text-xs mr-2 font-medium leading-0 font-hubot whitespace-nowrap">
                {user.name}
              </p>
            )}
          </div>
        ))}
        {users.length > 2 && (
          <div className="bg-pill xs:hidden flex items-center justify-center border-2 border-border-2/50 rounded-full px-1.5 py-1">
            <span className="text-xs font-medium text-foreground">
              +{users.length - 2}
            </span>
          </div>
        )}
      </div>
      <div className="hidden sm:flex gap-3">
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

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="sm:hidden bg-pill flex items-center justify-center border-2 border-border-2/50 rounded-full p-1 hover:bg-pill/20 cursor-pointer">
            <MoreHorizontal size={16} strokeWidth={1.5} className="text-primary" />
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-auto rounded-t-3xl">
          <div className="flex flex-col gap-2 py-4">
            {UserOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 hover:bg-card-2 rounded-lg transition-colors"
              >
                <option.icon size={20} strokeWidth={1.5} className="text-primary" />
                <span className="text-sm font-medium capitalize text-foreground">
                  {option.name}
                </span>
              </button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default TopBar;

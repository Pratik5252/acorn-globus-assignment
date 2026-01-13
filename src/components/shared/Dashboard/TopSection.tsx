import { reportsItems } from "@/constants/sidebar";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeframe = [{ item: "Sep 1 - Nov 30, 2023" }];

const TopSection = () => {
  const activeItem = reportsItems
    .flatMap((item) => item.subItems ?? [])
    .find((subitem) => subitem.isActive === true);

  return (
    <div className="flex flex-col sm:flex-row justify-between py-3.5">
      <p className="text-[2rem] sm:text-[1.75rem] text-secondary-foreground font-hubot font-semibold">{activeItem?.title}</p>
      <div className="h-fit flex items-center gap-3 mt-3 sm:mt-0">
        <div className="flex items-center space-x-2">
          <Switch id="timeframe" defaultChecked={true} />
          <label htmlFor="timeframe" className="font-hubot text-sm">
            Timeframe
          </label>
        </div>
        <Select defaultValue={timeframe[0].item}>
          <SelectTrigger size="sm" className="">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectGroup>
              <SelectLabel>Timeframe</SelectLabel>
              {timeframe.map((time) => (
                <SelectItem key={time.item} value={time.item}>
                  {time.item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TopSection;

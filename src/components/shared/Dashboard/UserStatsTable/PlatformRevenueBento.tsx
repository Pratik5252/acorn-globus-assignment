import React from "react";
import { ShoppingBag } from "lucide-react";

interface Platform {
  name: string;
  percentage: number;
  value: number;
}

interface PlatformRevenueBentoProps {
  platformDistribution: Platform[];
}

const platformIcons: Record<string, string> = {
  Dribbble: "/icons/dribbble.svg",
  Instagram: "/icons/instagram.svg",
  Google: "/icons/google.svg",
  Medium: "/icons/medium.svg",
  Other: "/icons/other.svg",
};

const PlatformRevenueBento: React.FC<PlatformRevenueBentoProps> = ({
  platformDistribution,
}) => {
  return (
    <div className="w-full h-36 flex gap-1">
      {/* Left Part */}
      <div className=" w-[calc(100%-2rem)] h-full bg-card-2 rounded-xl flex ">
        <div className="flex-1 p-2.5 pb-1 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <img
              src={platformIcons.Dribbble}
              alt="Dribbble"
              className="w-5 h-5"
            />
            <span className="font-semibold text-xs">Dribbble</span>
          </div>
          <div className="flex gap-2 items-baseline">
            <span className="text-2xl font-bold tracking-tight">
              {
                platformDistribution.find((p) => p.name === "Dribbble")
                  ?.percentage
              }
              %
            </span>
            <span className="text-2xl text-secondary-foreground font-bold">
              $
              {platformDistribution
                .find((p) => p.name === "Dribbble")
                ?.value.toLocaleString()}
            </span>
          </div>
        </div>
        <div
          className="w-1/3 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 4px, #ffeaf2 4px, #ffeaf2 8px)",
          }}
        />
      </div>
      {/* Right Part */}
      <div className="w-full h-full flex flex-col gap-1">
        <div className="w-full h-full flex gap-1">
          <div className=" w-1/2 h-full bg-card-2 rounded-xl p-2.5 pb-1 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <img
                src={platformIcons.Instagram}
                alt="Instagram"
                className="w-5 h-5"
              />
              <span className="font-semibold text-xs">Instagram</span>
            </div>
            <div className="flex gap-2">
              <span className="text-sm font-bold block">
                {
                  platformDistribution.find((p) => p.name === "Instagram")
                    ?.percentage
                }
                %
              </span>
              <span className="text-sm text-secondary-foreground font-bold">
                $
                {platformDistribution
                  .find((p) => p.name === "Instagram")
                  ?.value.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-1">
            {/* Google (1x1) */}
            <div className="h-full bg-card-2 rounded-xl p-2.5 flex flex-col justify-between relative overflow-hidden gap-2">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, transparent, transparent 4px, #ffeaf2 4px, #ffeaf2 8px)",
                }}
              />
              <div className="relative z-10 flex items-center gap-2">
                <img
                  src={platformIcons.Google}
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="font-bold text-sm">Google</span>
              </div>
              <div className="relative z-10 flex gap-1">
                <span className="text-xs font-bold block">
                  {
                    platformDistribution.find((p) => p.name === "Google")
                      ?.percentage
                  }
                  %
                </span>
                <span className="text-xs text-secondary-foreground font-bold">
                  $
                  {platformDistribution
                    .find((p) => p.name === "Google")
                    ?.value.toLocaleString()}
                </span>
              </div>
            </div>
            {/* Medium/Dots (1x1) */}
            <div className=" bg-card-2 rounded-xl p-2 flex flex-col justify-center items-center">
              <div className="flex items-center gap-2 w-full justify-between h-full">
                <img
                  src={platformIcons.Medium}
                  alt="Medium"
                  className="w-5 h-5"
                />

                <div className="text-right flex items-center justify-center gap-1">
                  <span className="text-xs font-bold">
                    {
                      platformDistribution.find((p) => p.name === "Medium")
                        ?.percentage
                    }
                    %
                  </span>
                  <span className="text-xs text-secondary-foreground font-bold">
                    $
                    {platformDistribution
                      .find((p) => p.name === "Medium")
                      ?.value.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Other (1x1) */}
        <div className=" bg-card-2 rounded-xl p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <span className="font-bold text-sm">Other</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs font-bold block">
              {platformDistribution.find((p) => p.name === "Other")?.percentage}
              %
            </span>
            <span className="text-xs text-secondary-foreground font-bold">
              $
              {platformDistribution
                .find((p) => p.name === "Other")
                ?.value.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformRevenueBento;

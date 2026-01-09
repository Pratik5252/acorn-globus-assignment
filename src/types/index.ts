
export interface RevenueChange {
  percentage: number;
  amount: number;
}

export interface Revenue {
  total: number;
  change: RevenueChange;
  previousTotal: number;
  comparisonPeriod: string;
}

export interface KpiCard {
  id: string;
  title: string;
  value: string;
  change?: number;
  highlighted?: boolean;
}

export interface UserHighlight {
  rank: number;
  bonus: number;
}

export interface User {
  id: number;
  name: string;
  avatar: string | null;
  sales: number | null;
  revenue: number;
  leads: number | null;
  kpi: number | null;
  winRate: string | null;
  closed: number | null;
  pending: number | null;
  badges: string[];
  highlight: UserHighlight | null;
  percentage: number;
  isTeam?: boolean;
}


export interface Platform {
  name: string;
  icon: string;
  revenue: number;
  percentage: number;
}

export interface PlatformDistribution {
  name: string;
  percentage: number;
  value: number;
}

export interface SalesDynamicPoint {
  week: string;
  value: number;
}

export interface PlatformDetails {
  monthly_revenue: number;
  winPercentage: number;
  winLoss: string;
  leads: number;
  revenueStats: string;
}

export interface PlatformValue {
  platform: string;
  details: PlatformDetails;
}


export interface MonthlyUserRevenue {
  userId: number;
  amount: number;
}

export interface RevenueStatMonths {
  [month: string]: MonthlyUserRevenue[];
}

export interface RevenueStat {
  id: string;
  months: RevenueStatMonths;
}

export interface DashboardData {
  revenue: Revenue;
  kpiCards: KpiCard[];
  users: User[];
  platforms: Platform[];
  platformDistribution: PlatformDistribution[];
  salesDynamic: SalesDynamicPoint[];
  platformValue: PlatformValue[];
  revenueStats: RevenueStat[];
}
export type Act = {
  id: string;
  userId: string;
  date: string;
  type: string;
  amount: number;
};

export type ChargesSetting = {
  userId: string;
  percentage: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
};

// Placeholder data store for the MVP skeleton.
export const acts: Act[] = [];
export const users: User[] = [];
export const charges: ChargesSetting[] = [];

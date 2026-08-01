export type PriceOption = {
  label: string;
  price: number;
  stripePriceId: string;
  currency?: string;
};

export type City = {
  name: "OSLO" | "DRAMMEN" | "VILNIUS";
  imageUrl: string;
  options: PriceOption[];
  imagePosition?: string;
};
export type PriceOption = {
  label: string;
  price: number;
  stripePriceId: string;
};

export type City = {
  name: "OSLO" | "DRAMMEN";
  imageUrl: string;
  options: PriceOption[];
  imagePosition?: string;
};

export interface IMobileStoreModal {
  model: string;
  avatar: string;
  speciality: string;
  brand: string;
  price: number;
  features: { display: string; battery?: string; cam?: string };
}

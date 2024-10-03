export interface Pond {
  id: string; // Assuming it's a string
  pondId: string; // Assuming it's a string; change to number if needed
  temperature: number;
  pH: number;
  rain: number;
  dissolvedOxygen: number;
  waterLevel: number;
}

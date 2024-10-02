export interface User {
  id?: string;
  username: string;
  password: string;
  role: 'USER' | 'ADMIN'; // Adjust based on your role design
}

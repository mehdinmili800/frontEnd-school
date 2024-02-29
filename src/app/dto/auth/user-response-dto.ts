// user-response-dto.ts
export interface UserResponseDTO {
  id?: number; // Assuming the id is optional, adjust it according to your backend response
  username: string;
  password: string;
  fullName: string;
  role: string;
}

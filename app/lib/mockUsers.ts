export type MockUser = {
  id: string;
  username: string;
  password: string;
  role: "admin" | "user";
};

export const MOCK_USERS: MockUser[] = [
  {
    id: "1",
    username: "admin",
    password: "admin",
    role: "admin",
  },
  {
    id: "2",
    username: "user@test.com",
    password: "user123",
    role: "user",
  },
];

export type ResponseAPIType<T> = {
  status: number;
  message?: string;
  error?: string | string[];
  data?: T;
};

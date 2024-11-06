import { Timestamp } from "firebase/firestore";
import dayjs from "dayjs";

export const convertTimestampToDate = (timestamp: Timestamp) => {
  const { seconds, nanoseconds } = timestamp;
  return new Date(seconds * 1e3 + nanoseconds / 1e6);
};

export const displayTime = (date?: Date) => {
  if (!date) return "";

  return dayjs(date).format("H.mm");
};

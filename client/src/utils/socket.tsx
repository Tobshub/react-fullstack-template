import { serverUrl } from "@/data/url";
import io from "socket.io-client";

const socket = io(serverUrl, {});

export function useSocketEmit<D>(
  event: string,
  data: D,
  ack?: (...args: any[]) => any
) {
  socket.emit(event, data, ack);
}
export function useSocketOn(
  event: string,
  fn: (...args: any[]) => void | Promise<void>
) {
  socket.on(event, fn);
}

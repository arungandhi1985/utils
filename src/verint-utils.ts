import { Subject } from "rxjs";

const eventSubject = new Subject<any>();

export const sendMessage = (message: any) => {
  eventSubject.next(message);
};

export const getMessage = () => eventSubject.asObservable();

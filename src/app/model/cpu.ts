import { Socket } from '../model/socket';

export class Cpu {
    id: string;
	brand: string;
	model: string;
	clockspeed: string;
	cores_amount: string;
	threads_amount: string;
	tdp: string;
	price: string;

	socket: Socket;
}
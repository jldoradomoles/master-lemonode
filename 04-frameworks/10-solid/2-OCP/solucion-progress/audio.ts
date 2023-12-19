import {Measurable} from "./measurable.interface";

export class Audio implements Measurable {
    private _duration: number;
    private _played: number;


    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get played(): number {
        return this._played;
    }

    set played(value: number) {
        this._played = value;
    }

    getCurrent(): number {
        return this._played;
    }

    getTotal(): number {
        return this._duration;
    }
}

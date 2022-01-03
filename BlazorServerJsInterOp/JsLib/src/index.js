import { getCurrentTime } from './time_lib';
import {initializeMap} from "./map_lib";

export function GetCurrentTime() {
    return getCurrentTime();
}

export function GetToday() {
    return getCurrentTime();
}

export function InitializeMap(options) {
    return initializeMap(options);
}
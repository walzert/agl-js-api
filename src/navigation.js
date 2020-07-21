import { call as api_call, subscribe as api_subscribe } from './api';


export function broadcast_status(state) {
    return api_call("navigation/broadcast_status", {"state":state});
}

export function broadcast_position() {
    return api_call("navigation/frequency", { broadcast_position});
}


export function broadcast_waypoints() {
    return api_call("navigation/broadcast_waypoints", {});
}



export function status(handler) {
    return api_subscribe("navigation/subscribe", {
        value: "status"
    }, handler);
}


export function position(handler) {
    return api_subscribe("navigation/subscribe", {
        value: "position"
    }, handler);
}

export function waypoints(handler) {
    return api_subscribe("navigation/subscribe", {
        value: "waypoints"
    }, handler);
}

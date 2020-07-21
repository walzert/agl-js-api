import { call as api_call, subscribe as api_subscribe } from './api';


export function get_playlist() {
    return api_call("gstreamer/playlist", {});
}

export function set_playlist() {
    return api_call("gstreamer/playlist", {});
}



export function set_controls(value,position) {
    return api_call("gstreamer/controls", {"value":value, "position" :position});
}


export function on_position_event(handler) {
    return api_subscribe("gstreamer/subscribe", {
        value: "position_event"
    }, handler);
}

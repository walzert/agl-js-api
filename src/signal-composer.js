import { call as api_call, subscribe as api_subscribe } from './api';


export function get(signal) {
    return api_call("signal-composer/get", {"signal":signal});
}

export function list() {
    return api_call("signal-composer/list", {});
}

export function addObjects(file) {
    return api_call("signal-composer/addObjects", { "file" : file });
}

export function subscribe_by_signal(handler,signal) {
    return api_subscribe("signal-composer/subscribe", {
        "signal": signal
    }, handler);
}
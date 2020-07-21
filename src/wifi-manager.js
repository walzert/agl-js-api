import { call as api_call, subscribe as api_subscribe } from './api';


export function activate() {
    return api_call("wifi-manager/activate", {});
}

export function deactivate() {
    return api_call("wifi-manager/deactivate", {});
}

export function scan() {
    return api_call("wifi-manager/scan", {});
}

export function scan_result() {
    return api_call("wifi-manager/scan_result", {});
}

export function connect(network) {
    return api_call("wifi-manager/connect", {"network":network});
}

export function status() {
    return api_call("wifi-manager/status", {});
}

export function disconnect(network) {
    return api_call("wifi-manager/disconnect", {"network":network});
}

export function insertpasskey(passkey) {
    return api_call("wifi-manager/insertpasskey", {"passkey": passkey});
}

export function ask_for_passkey(handler) {
    return api_subscribe("wifi-manager/subscribe", {
        value: "passkey"
    }, handler);
}

export function wifiListChanged(handler) {
    return api_subscribe("wifi-manager/subscribe", {
        value: "networkList"
    }, handler);
}

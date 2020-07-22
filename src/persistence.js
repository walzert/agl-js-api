import { call as api_call, subscribe as api_subscribe } from './api';


export function insert(key,value) {
    return api_call("persistence/insert", { "key": key, "value":value});
}

export function update(key,value) {
    return api_call("persistence/update", {key,value});
}

export function delete(key) {
    return api_call("persistence/delete", {"key":key});
}

export function read(key) {
    return api_call("persistence/read", {"key":key});
}



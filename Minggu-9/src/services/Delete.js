import { domainPath } from "./Config";

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/${data}`, {method: 'DELETE'})  //alamat url domain + path untuk mengakses full alamat API yang di-request 
            .then(
                (result) => {
                resolve(result);            // jika success menerima response dari server maka resolve response ke user
            }, (err) => {
                reject(err);                // jika terjadi error dari server (server down, dll),
            })
    })
    return promise;
}
export default DeleteAPI;
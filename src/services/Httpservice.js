
export class Httpservice {
    static get(cmd) {
        const getsettings = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
        };
        const fetchdata = async() => {
            return await( await fetch(global.config.host + cmd + '?t=' + Date.now(), getsettings)).json();
        }
        return fetchdata();
    }
}

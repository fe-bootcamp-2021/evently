export function getUrl(){
    const url = window.location.hostname;
    const port = window.location.port? `:${window.location.port}`:"";
    
    return url + port;
}
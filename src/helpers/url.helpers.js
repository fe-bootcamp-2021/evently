export function getUrl() {
  const protocol = window.location.protocol;
  const host = window.location.host;
  const url = `${protocol}//${host}`;
  return url;
}

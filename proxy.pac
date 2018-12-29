function FindProxyForURL(url, host) {
if (dnsDomainIs(url, host) || 
    dnsDomainIs(host, "dev.com")) {
  return "PROXY 192.168.1.80:8081";
}
  return "DIRECT";
}
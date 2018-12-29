function FindProxyForURL(url, host) {
if (dnsDomainIs(url, host) || 
    dnsDomainIs(host, "dev.com")) {
  return "PROXY mobile.lovego.com";
}
  return "DIRECT";
}

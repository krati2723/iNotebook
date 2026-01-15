const response = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: JSON.stringify({ username: "example" }),
  // …
});
return response.json();
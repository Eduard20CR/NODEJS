function routesHandler(req, res) {
  const url = req.url;
  const method = req.method;
  console.log(url, method);

  res.setHeader("Content-Type", "text/html");
  if (url == "/users") {
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write(
      "<body><ul><li>Manuel</li><li>Valery</li><li>Jose</li><li>Joshe</li></ul></body>"
    );
    res.write("</html>");
    res.end();
  }

  if (url == "/create-user") {
    const body = [];
    req.on("data", (chunck) => {
      body.push(chunck);
    });

    req.on("end", () => {
      const parsedBodyReques = Buffer.concat(body).toString();
      const mesage = parsedBodyReques.split("=")[1];
      console.log(mesage);
    });
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write("<body><h1>User created</h1></body>");
    res.write("</html>");

    res.end();
  }

  if (url == "/") {
    res.write("<html>");
    res.write("<head><title>Hello World</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input name='username'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    res.end();

    //   res.write("<body><h1>Buenos dias Bebe</h1></body>");
  }
}

module.exports = routesHandler;

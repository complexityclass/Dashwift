import Vapor

Route.get("/") { request in
	return View(path: "index.html")
}

let server = Server()
server.run(port: 9000)
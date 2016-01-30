import Vapor

Route.get("/") { request in
	return View(path: "index.html")
}

Route.get("project") { request in 
	let projectModel = ProjectModel(name: "Codename one project", buildStatus: .Passed)
	return projectModel.serializeToJSON()
}

let server = Server()
server.run(port: 9000)
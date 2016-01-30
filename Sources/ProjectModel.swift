enum BuildStatus: String {
	case Passed = "green"
	case Failed = "red"
}

struct ProjectModel {

	var name: String?
	var buildStatus: BuildStatus?

	init(name: String, buildStatus: BuildStatus) {
		self.name = name
		self.buildStatus = buildStatus
	}

	func serializeToJSON() -> [String: Any] {

		guard let name = name, let status = buildStatus else {
			return ["name" : "no_project", "status" : "no_status"]
		}
		
		return ["name" : name, "status" : status.rawValue]
	}
	
}
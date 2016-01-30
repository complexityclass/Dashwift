
var ProjectBox = React.createClass({

	getInitialState: function() {
		return {model: {name: "default project", status: "purple"}}
	},

	loadDataFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: 'false',
			success: function(data) {
				this.setState({model: data});
				this.layoutBoxWithModel(data);
			}.bind(this),
			error: function() {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	layoutBoxWithModel: function(model) {

		var model = this.state.model;
		var element = document.querySelector("#project_block");
		
		console.log(model);

		if (model.status == "green") {
			element.style.background = "#05BD3A";
		} else {
			element.style.background = "#F53704";
		}

	},

	componentDidMount: function() {
		this.loadDataFromServer();
	},

	render: function() {
		return (
			<div id="project_block">
			  <p>{this.state.model.name}</p>
			</div>
		);
	}
});


ReactDOM.render(
  <ProjectBox url="http://localhost:9000/project"/>,
  document.getElementById('content')
);
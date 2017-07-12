var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');
// var PropTypes = require('prop-types');

//state
//lifecycle event
//UI



ReactDOM.render(
	<App />,
	document.getElementById('app')
);

// class Users extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Friends</h1>
//         <ul>
//           {this.props.list.filter(function(user){
//           	return user.friend===true
//           }).map(function(user){
//           	return <li key={user.name}>{user.name}</li>
//           })}
//         </ul>
        
//         <hr />
        
//         <h1> Non Friends </h1>
//         <ul>
//           {this.props.list.filter(function(user){
//           	return user.friend!==true
//           }).map(function(user){
//           	return <li key={user.name}>{user.name}</li>
//           })}
//         </ul>        
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Users list={[
//     { name: 'Tyler', friend: true },
//     { name: 'Ryan', friend: true },
//     { name: 'Michael', friend: false },
//     { name: 'Mikenzi', friend: false },
//     { name: 'Jessica', friend: true },
//     { name: 'Dan', friend: false } ]} 
//   />,
//   document.getElementById('app')
// );


// class Badge extends React.Component {
// 	render() {
// 		return (
// 				<div>
// 					<img
// 						src={this.props.img}
// 						alt='Avatar'
// 						style={{width: 100, height:100}}
// 					/>
// 					<h1>Name: {this.props.name}</h1>
// 					<h3>UserName: {this.props.username}</h3>
// 				</div>	
// 			)
// 	}
// }

// Badge.propTypes = {
// 	img: PropTypes.string.isRequired,
// 	name: PropTypes.string.isRequired,
// 	username: PropTypes.string.isRequired
// }

// ReactDOM.render(
// 	<Badge
// 		name='Pranav'
// 		username='pc'
// 		img='https://avatars1.githubusercontent.com/u/20149620?v=3&u=35f0ff1f8537fb16ddb609e4210439299cc163ad&s=400'
// 	/>,
// 	document.getElementById('app')
// 	);
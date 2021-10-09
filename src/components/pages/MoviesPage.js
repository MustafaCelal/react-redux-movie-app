import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

import MoviesList  from '../MoviesList';
import { connect } from 'react-redux'

 class MoviesPage extends Component {
	static propTypes= {
		movies:PropTypes.array.isRequired
	};

	render() {
		return (
			<div>
				<h2>Movies Page</h2>
				<MoviesList movies={this.props.movies}></MoviesList>
			</div>
		)
	}
}
const mapStateToProps= state =>{
	return {movies:state.movies}
}

export default connect(mapStateToProps)(MoviesPage)
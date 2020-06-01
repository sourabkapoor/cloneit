import React from 'react';

const Filter = ({tagChange}) => {
	return (
		<div className='flex'> 
		<p className='f6 pa2'>Search </p>  
			 <select className='box o-60'>
			 <option value='story'>Stories</option> 
			 <option value='comment'>Comments</option> 
			 </select> 
		<p className='f6 pa2'> by </p>
			 <select className='box o-60'>
			 <option>Popularity</option> 
			 <option>Date</option>
			 </select> 
		<p className='f6 pa2'> for </p>   
			<select className='box o-60'>
			<option>All time</option> 
			<option>Last 24h</option> 
			<option>Past week</option> 
			<option>Past Month</option> 
			<option>Past Year</option> 
			</select> 
		</div>
	);
}

export default Filter;
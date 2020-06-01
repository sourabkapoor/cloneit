import React from 'react';

const Main = ({myName, searchChange}) => {
	return(
		<div className='flex w-100 ph3 pv2 pb1 mr2 bg-orange o-90'>
			<div className='w-20 mr2 pl3'>
				<h2 className='ttu'>{myName}</h2>
			</div>

			<div className='w-80 mr2'>
				<input className='pa3 ba w-90 b--white bg-white'
				 type= 'search' placeholder= 'Search Stories by title, url or author' 
				 onChange={searchChange}/>
			</div>
		</div>
	);
}

export default Main;
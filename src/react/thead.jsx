import React, { Component } from 'react'

import headData from './headData.json'

function TableHead(value, i) {
	return (
		<th key={i} className="">
			<div>{value.name}</div>
			{(value.note ? <a href={value.note} target="_blank" rel="noopener noreferrer">共筆</a> : '')}
			{(value.live ? <a href={value.live} target="_blank" rel="noopener noreferrer">直播</a> : '')}
		</th>
	)
}

function Thead() {
	return (
		<thead>
			<tr>
				<th />
				{headData.map(TableHead)}
			</tr>
		</thead>
	)
}

export default Thead

import React, { Component } from 'react'

import bodyData from './bodyData.json'
import speakersData from './speakersData.json'


function TimeCell(data, i) {
	return (
		<td key={i} className="time-slot">
			<div className="time ">
				{data.start ? <div className="time-start">{data.start.substr(0, 2)}<small>{data.start.substr(2, 2)}</small></div> : ''}
			</div>
			<div className="time">
				{data.end ? <div className="time-end">{data.end.substr(0, 2)}<small>{data.end.substr(2, 2)}</small></div> : ''}
			</div>
		</td>
	)
}

function Speaker(speaker, i) {
	let image = ''
	let name = speaker
	if (speakersData[speaker]) {
		name = speakersData[speaker].name
		const url = `http://sitcon.org/2016/image/${speakersData[speaker].type}/${speaker}.jpg`
		image = <div style={{backgroundImage: `url(${url})`}} className="profile-img" />
	}

	return (
		<div key={i} className="speaker">
			{image}
			<span>{name}</span>
		</div>
	)
}

function EventCell(data, i) {
	return (
		<td key={i} colSpan={data.col || 1} rowSpan={data.row || 1} className="forum-slot">
			<div className="title">{data.title}</div>
			{typeof data.speaker === 'object' ? data.speaker.map(Speaker) : Speaker(data.speaker)}
			{(data.slides ? <a href={data.slides} target="_blank" rel="noopener noreferrer" className="slides">#簡報連結</a> : '')}
		</td>
	)
}

function TableRow(rowData, index) {
	return (
		<tr key={index}>
			{rowData.map((v, i) => (
				v.type === 'time' ? TimeCell(v, i) :
				v.type === 'empty' ? <td key={i} /> :
				EventCell(v, i)
			))}
		</tr>
	)
}

function Tbody() {
	return (
		<tbody>
			{bodyData.map(TableRow)}
		</tbody>
	)
}

export default Tbody

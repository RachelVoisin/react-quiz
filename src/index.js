import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/loader.css';

import questions from './questions';
import guildInfo from './guildInfo';

let winner;
let winner2;

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
		currentQuestion: 0,
		selectedOption: null,
		GG: 0,
		GR: 0,
		AZ: 0,
		BR: 0,
		IZ: 0,
		SM: 0,
		OZ: 0,
		DM: 0,
		RK: 0,
		SL: 0
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}
	handleClick() {
		if(this.state.selectedOption === null){
			document.getElementById('alert').classList.add('alert-show');
			return;
		}
		var points = questions[this.state.currentQuestion].points[this.state.selectedOption];
		var GG = this.state.GG,
		    GR = this.state.GR,
		    AZ = this.state.AZ,
		    BR = this.state.BR,
		    IZ = this.state.IZ,
			SM = this.state.SM,
			OZ = this.state.OZ,
			DM = this.state.DM,
			RK = this.state.RK,
			SL = this.state.SL;
		
		var guilds = ["GG", "GR", "AZ", "BR", "IZ", "SM", "OZ", "DM", "RK", "SL"];
		var guildPoints = [GG, GR, AZ, BR, IZ, SM, OZ, DM, RK, SL];
		
		var i = 0;
		
		guilds.forEach(function(guild){
			if(points.includes(guild)){
				guildPoints[i]++;
			}
			i++;
		});
		
		this.setState({
			GG: guildPoints[0],
			GR: guildPoints[1],
			AZ: guildPoints[2],
			BR: guildPoints[3],
			IZ: guildPoints[4],
			SM: guildPoints[5],
			OZ: guildPoints[6],
			DM: guildPoints[7],
			RK: guildPoints[8],
			SL: guildPoints[9]
		});
		
		if(this.state.currentQuestion === questions.length -1){
			this.calculateWinner(guildPoints);
			return;
		}
		var next = this.state.currentQuestion + 1;
		this.setState({
			currentQuestion: next,
			selectedOption: null
		});
		document.getElementById('alert').classList.remove('alert-show');
		document.getElementById('btn').classList.remove("ready");
	}
	handleOptionChange(select) {
		select = parseInt(select, 10);
		this.setState({
			selectedOption: select
		});
		document.getElementById('btn').classList.add("ready");
	}
	calculateWinner(guildPoints) {
		var highest = Math.max(...guildPoints);
		winner = guildPoints.indexOf(highest);
		
		guildPoints.splice(winner, 1);
		var secondHighest = Math.max(...guildPoints);
		
		if(highest === secondHighest){
			winner2 = guildPoints.indexOf(secondHighest) + 1;
			ReactDOM.render(
			  <Tie />,
			  document.getElementById('root')
			); 
		} else {
			ReactDOM.render(
			  <Winner />,
			  document.getElementById('root')
			);
		}
	}
	render() {
		return (
			<div className="container" id="container">
				<h2 className="question">{questions[this.state.currentQuestion].question}</h2>
				<div className="option-list">
					<Options
						currentQuestion={this.state.currentQuestion}
						selectedOption={this.state.selectedOption}
						onChange={this.handleOptionChange}
					/>
				</div>
				<br />
				<Next 
					onClick={() => this.handleClick()}
				/>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	createList = () => {
		var questionLength = questions[this.props.currentQuestion].options.length;
		var list = []
		for(let i = 0; i < questionLength; i++){
			list.push(<div className="option" onClick={() => this.handleClick(i)}>
			<input className="radio-btn" type="radio" name="option" checked={this.props.selectedOption === i} onChange={this.handleChange} value={i} />
			<span className="radio-custom"></span>
			{questions[this.props.currentQuestion].options[i]}
			</div>)
		}
		return list
	}
	handleChange = (e) => {
		var select = e.target.value;
		this.props.onChange(select);
	}
	handleClick = (i) => {
		this.props.onChange(i);
	}
	render() {
		return(
			<div>
				{this.createList()}
			</div>
		);
	}
}

function Next(props) {
	return (
		<div>
			<button className="next-btn" id="btn" onClick={props.onClick}>
				Next Question
			</button>
			<p className="alert" id="alert">Please choose one.</p>
		</div>
	);
}

class Winner extends React.Component {
	render() {
		return (
			<div>
				<div className="loading-container">
					<br /><br /><br />
					<div className="loader" id="loader"></div>
					<div className="loader" id="loader2"></div>
					<div className="loader" id="loader3"></div>
					<div className="loader" id="loader4"></div>
					<span id="text">CALCULATING...</span><br />
				</div>
				<div className="winner-container">
					<h1 className="question">{guildInfo[winner].name}</h1>
					<div className="img-container">
						<img src={guildInfo[winner].image} alt={guildInfo[winner].name}/>
					</div>
					<p className="description">{guildInfo[winner].description}</p>
				</div>
			</div>
		);
	}
}

class Tie extends React.Component {
	render() {
		return (
			<div>
				<div className="loading-container">
					<br /><br /><br />
					<div className="loader" id="loader"></div>
					<div className="loader" id="loader2"></div>
					<div className="loader" id="loader3"></div>
					<div className="loader" id="loader4"></div>
					<span id="text">CALCULATING...</span><br />
				</div>
				<div className="tie-container">
					<h1 className="question">We have a tie!</h1>
					<div className="tie-position-container">
						<div className="tie">
							<div className="tie-img">
								<img src={guildInfo[winner].image} alt={guildInfo[winner].name}/>
							</div>
							<h2 className="question">{guildInfo[winner].name}</h2>
							<p className="description">{guildInfo[winner].description}</p>
						</div>
						<div className="tie">
							<div className="tie-img">
								<img src={guildInfo[winner2].image} alt={guildInfo[winner2].name}/>
							</div>
							<h2 className="question">{guildInfo[winner2].name}</h2>
							<p className="description">{guildInfo[winner2].description}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <Quiz />,
  document.getElementById('root')
);

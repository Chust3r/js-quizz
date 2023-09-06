import { Question } from './types'

const questions: Question[] = [
	{
		question: 'Can you guess the result?',
		code: `console.log(("b" + "a" + +"a" + "a").toLowerCase())`,
		answers: [
			{ id: 1, value: 'bananna' },
			{ id: 2, value: 'baaa' },
			{ id: 3, value: 'banana' },
			{ id: 4, value: 'ananas' },
		],
		answerID: 3,
	},
	{
		question: 'Can you guess what will be the output of the code below?',
		code: `console.log(typeof NaN)`,
		answers: [
			{
				id: 1,
				value: 'Nan',
			},
			{
				id: 2,
				value: 'number',
			},
			{ id: 3, value: 'undefined' },
			{ id: 4, value: 'string' },
		],
		answerID: 2,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `console.log(false == '0')`,
		answers: [
			{
				id: 1,
				value: 'true',
			},
			{ id: 2, value: 'false' },
		],
		answerID: 1,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `const isTrue = true == []
const isFalse = true == ![];
console.log(isTrue + isFalse)`,
		answers: [
			{ id: 1, value: '1' },
			{ id: 2, value: '0' },
			{ id: 3, value: '"true"' },
			{ id: 4, value: 'true' },
		],
		answerID: 2,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `console.log(typeof typeof undefined)`,
		answers: [
			{ id: 1, value: 'number' },
			{ id: 2, value: 'null' },
			{ id: 3, value: 'string' },
			{ id: 4, value: 'undefined' },
		],
		answerID: 3,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `function DoThing(){
const name = "Jhon"
}	
console.log(name)`,
		answers: [
			{ id: 1, value: 'null' },
			{ id: 2, value: 'undefined' },
			{ id: 3, value: 'Jhon' },
			{ id: 4, value: '"\t"' },
		],
		answerID: 2,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `(function() {
console.log(1)
setTimeout(function(){console.log(2)}, 1000)
setTimeout(function(){console.log(3)}, 0) 
console.log(4);
})()`,
		answers: [
			{ id: 1, value: '1\t3\t4\t2' },
			{ id: 2, value: '3\t1\t4\t2' },
			{ id: 3, value: '4\t3\t2\t1' },
			{ id: 4, value: '1\t4\t3\t2' },
		],
		answerID: 4,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `console.log(NaN === NaN)`,
		answers: [
			{ id: 1, value: 'true' },
			{ id: 2, value: 'false' },
		],
		answerID: 2,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `console.log([] == 0)`,
		answers: [
			{
				id: 1,
				value: 'true',
			},
			{ id: 2, value: 'false' },
		],
		answerID: 1,
	},
	{
		question: 'Do you know what will be the output of this code?',
		code: `if(!""){
console.log("Hello world!")
}`,
		answers: [
			{
				id: 1,
				value: 'true',
			},
			{ id: 2, value: 'false' },
		],
		answerID: 1,
	},
]

export { questions }

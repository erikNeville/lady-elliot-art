import agent from '../../images/the_agent250w.jpg';
import atomicDawg from '../../images/atomic_dawg333w.jpg';
import blueDog from '../../images/balloondog_blue200w.jpg';
import blueUnicorn from '../../images/balloonicorn_blue200w.jpg';
import cassette from '../../images/cassette167w.jpg';
import cosmina from '../../images/cosmina400w.jpg';
import crystalOwl from '../../images/crystal_snowy_owl300w.jpg';
import dragon from '../../images/disco_dragon200w.jpg';
import drums from '../../images/disco_drumset400w.jpg';
import greenUnicorn from '../../images/balloonicorn_green200w.jpg';
import hexagon from '../../images/hexagon_spectra183w.jpg';
import imposter from '../../images/imposter_syndrome333w.jpg';
import kittyHendrix from '../../images/kitty_hendrix250w.jpg';
import lilacDog from '../../images/balloondog_lilac200w.jpg';
import necklace from '../../images/lips_musical_necklace167w.jpg';
import orangeUnicorn from '../../images/balloonicorn_orange200w.jpg';
import pianoCat from '../../images/cat_on_piano_moon267w.jpg';
import pinkDog from '../../images/balloondog_pink200w.jpg';
import pinkUnicorn from '../../images/balloonicorn_pink200w.jpg';
import planets from '../../images/balloon_planets200w.jpg';
import purpleUnicorn from '../../images/balloonicorn_purple200w.jpg';
import roboHorses from '../../images/robot_horse_race667w.jpg';
import saoirse from '../../images/saoirse667w.jpg';
import writersBlock from '../../images/writers_block267w.jpg';
import yellowDog from '../../images/balloondog_yellow200w.jpg';
import yellowUnicorn from '../../images/balloonicorn_yellow200w.jpg';
import zebra from '../../images/drippy_zebra400w.jpg';

const initState = {
	images: [	
		{src: dragon, title: 'Disco Dragon', category: 'music', medium: 'Acrylic on Canvas', w: '12', h: '36',},
		{src: kittyHendrix, title: 'Kitty Hendrix', category: 'neb', medium: 'Acrylic on Canvas', w: '15', h: '30',},
		{src: cosmina, title: 'Cosmina', category: 'neb', medium: 'Acrylic on Canvas', w: '24', h: '48',},
		{src: crystalOwl, title: 'Snowy Owl', category: 'crystal', medium: 'Acrylic on Canvas', w: '18', h: '24',},
		{src: pianoCat, title: 'Cat on a Piano Moon', category: 'music', medium: 'Acrylic on Canvas', w: '16', h: '20',},
		{src: agent, title: 'The Agent', category: 'misc', medium: 'Acrylic on Canvas', w: '15', h: '30',},
		{src: atomicDawg, title: 'Atomic Dawg', category: 'music', medium: 'Acrylic on Canvas', w: '20', h: '20',},	
		{src: drums, title: 'Disco Drumset', category: 'neb', medium: 'Acrylic on Canvas', w: '24', h: '30',},
		{src: necklace, title: 'Lips With Musical Necklace', category: 'music', medium: 'Acrylic on Canvas', w: '10', h: '20',},
		{src: saoirse, title: 'Saoirse', category: 'music', medium: 'Acrylic on Canvas', w: '40', h: '16',},		
		{src: cassette, title: 'Cassette Tape', category: 'music', medium: 'Acrylic on Canvas', w: '10', h: '20',},
		{src: planets, title: 'Balloon Planets', category: 'cosmic', medium: 'Acrylic on Canvas', w: '12', h: '36',},		
		{src: writersBlock, title: 'Writers Block', category: 'misc', medium: 'Acrylic on Canvas', w: '16', h: '40',},
		{src: zebra, title: 'Drippy Zebra', category: 'misc', medium: 'Acrylic on Canvas', w: '24', h: '30',},
		{src: roboHorses, title: 'Robo Horse Race', category: 'msic', medium: 'Acrylic on Canvas', w: '40', h: '16',},
		{src: imposter, title: 'Imposter Syndrome', category: 'misc', medium: 'Acrylic on Canvas', w: '20', h: '16',},
		{src: hexagon, title: 'Hexagon Spectra', category: 'misc', medium: 'Acrylic on Canvas', w: '10', h: '20',},
		{src: blueDog, title: 'Blue Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: lilacDog, title: 'Lilac Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: pinkDog, title: 'Pink Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: yellowDog, title: 'Yellow Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: blueUnicorn, title: 'Blue Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: greenUnicorn, title: 'Green Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: orangeUnicorn, title: 'Orange Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: pinkUnicorn, title: 'Pink Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: purpleUnicorn, title: 'Purple Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
		{src: yellowUnicorn, title: 'Yellow Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
	]
};

// const initState = {
// 	images: {	
// 		category: {
// 			music: [
// 				{src: dragon, title: 'Disco Dragon', category: 'music', medium: 'Acrylic on Canvas', w: '12', h: '36',},
// 				{src: pianoCat, title: 'Cat on a Piano Moon', category: 'music', medium: 'Acrylic on Canvas', w: '16', h: '20',},
// 				{src: atomicDawg, title: 'Atomic Dawg', category: 'music', medium: 'Acrylic on Canvas', w: '20', h: '20',},	
// 				{src: necklace, title: 'Lips With Musical Necklace', category: 'music', medium: 'Acrylic on Canvas', w: '10', h: '20',},
// 				{src: saoirse, title: 'Saoirse', category: 'music', medium: 'Acrylic on Canvas', w: '40', h: '16',},		
// 				{src: cassette, title: 'Cassette Tape', category: 'music', medium: 'Acrylic on Canvas', w: '10', h: '20',},		
// 			],
// 			neb: [
// 				{src: kittyHendrix, title: 'Kitty Hendrix', category: 'neb', medium: 'Acrylic on Canvas', w: '15', h: '30',},
// 				{src: cosmina, title: 'Cosmina', category: 'neb', medium: 'Acrylic on Canvas', w: '24', h: '48',},
// 				{src: drums, title: 'Disco Drumset', category: 'neb', medium: 'Acrylic on Canvas', w: '24', h: '30',},		
// 			],
// 			crystal: [
// 				{src: crystalOwl, title: 'Snowy Owl', category: 'crystal', medium: 'Acrylic on Canvas', w: '18', h: '24',},
// 			],
// 			misc: [
// 				{src: agent, title: 'The Agent', category: 'misc', medium: 'Acrylic on Canvas', w: '15', h: '30',},
// 				{src: planets, title: 'Balloon Planets', category: 'misc', medium: 'Acrylic on Canvas', w: '12', h: '36',},		
// 				{src: writersBlock, title: 'Writers Block', category: 'misc', medium: 'Acrylic on Canvas', w: '16', h: '40',},
// 				{src: zebra, title: 'Drippy Zebra', category: 'misc', medium: 'Acrylic on Canvas', w: '24', h: '30',},
// 				{src: roboHorses, title: 'Robo Horse Race', category: 'misc', medium: 'Acrylic on Canvas', w: '40', h: '16',},
// 				{src: imposter, title: 'Imposter Syndrome', category: 'misc', medium: 'Acrylic on Canvas', w: '20', h: '16',},
// 				{src: hexagon, title: 'Hexagon Spectra', category: 'misc', medium: 'Acrylic on Canvas', w: '10', h: '20',},		
// 			],
// 			balloon: [
// 				{src: blueDog, title: 'Blue Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: lilacDog, title: 'Lilac Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: pinkDog, title: 'Pink Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: yellowDog, title: 'Yellow Balloon Dog', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: blueUnicorn, title: 'Blue Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: greenUnicorn, title: 'Green Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: orangeUnicorn, title: 'Orange Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: pinkUnicorn, title: 'Pink Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: purpleUnicorn, title: 'Purple Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 				{src: yellowUnicorn, title: 'Yellow Balloonicorn', category: 'balloon', medium: 'Acrylic on Canvas', w: '12', h: '12',},
// 			],
// 		},
// 	},
// };

const imageReducer = (state = initState) => {
	return state;
};

export default imageReducer;

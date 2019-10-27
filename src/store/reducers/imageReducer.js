import planets from '../../images/balloon_planets200w.jpg';
import blueDog from '../../images/balloondog_blue200w.jpg';
import lilacDog from '../../images/balloondog_lilac200w.jpg';
import pinkDog from '../../images/balloondog_pink200w.jpg';
import yellowDog from '../../images/balloondog_yellow200w.jpg';
import blueUnicorn from '../../images/balloonicorn_blue200w.jpg';
import greenUnicorn from '../../images/balloonicorn_green200w.jpg';
import orangeUnicorn from '../../images/balloonicorn_orange200w.jpg';
import pinkUnicorn from '../../images/balloonicorn_pink200w.jpg';
import purpleUnicorn from '../../images/balloonicorn_purple200w.jpg';
import yellowUnicorn from '../../images/balloonicorn_yellow200w.jpg';
import cassette from '../../images/cassette167w.jpg';
import cat from '../../images/cat_on_piano_moon267w.jpg';
import cosmina from '../../images/cosmina400w.jpg';
import dragon from '../../images/disco_dragon200w.jpg';
import drums from '../../images/disco_drumset400w.jpg';
import zebra from '../../images/drippy_zebra400w.jpg';
import hexagon from '../../images/hexagon_spectra183w.jpg';
import imposter from '../../images/imposter_syndrome333w.jpg';
import necklace from '../../images/lips_musical_necklace167w.jpg';
import saoirse from '../../images/saoirse667w.jpg';
import agent from '../../images/the_agent250w.jpg';
import writersBlock from '../../images/writers_block267w.jpg';



const initState = {
	images: [	
		{
			id: 0,
			src: dragon,
			title: 'Disco Dragon',
		},
		{
			id: 1,
			src: cosmina,
			title: 'Cosmina',
		},
		{
			id: 2,
			src: drums,
			title: 'Disco Drumset',
		},
		{
			id: 3,
			src: cat,
			title: 'Cat on a Piano Moon',
		},
		{
			id: 4,
			src: cassette,
			title: 'Cassette Tape',
		},
		{
			id: 5,
			src: necklace,
			title: 'Lips With Musical Necklace',
		},
		{
			id: 6,
			src: saoirse,
			title: 'Saoirse',
		},		
		{
			id: 7,
			src: agent,
			title: 'The Agent',
		},
		{
			id: 8,
			src: writersBlock,
			title: 'Writers Block',
		},
		{
			id: 9,
			src: zebra,
			title: 'Drippy Zebra',
		},	
		{
			id: 10,
			src: planets,
			title: 'Balloon Planets',
		},		
		{
			id: 11,
			src: imposter,
			title: 'Imposter Syndrome',
		},
		{
			id: 12,
			src: hexagon,
			Title: 'Hexagon Spectra',
		},
		{
			id: 13,
			src: blueDog,
			title: 'Blue Balloon Dog',
		},
		{
			id: 14,
			src: lilacDog,
			title: 'Lilac Balloon Dog',
		},
		{
			id: 15,
			src: pinkDog,
			title: 'Pink Balloon Dog',
		},
		{
			id: 16,
			src: yellowDog,
			title: 'Yellow Balloon Dog',
		},
		{
			id: 17,
			src: blueUnicorn,
			title: 'Blue Balloonicorn',
		},
		{
			id: 18,
			src: greenUnicorn,
			title: 'Green Balloonicorn',
		},
		{
			id: 19,
			src: orangeUnicorn,
			title: 'Orange Balloonicorn',
		},
		{
			id: 20,
			src: pinkUnicorn,
			title: 'Pink Balloonicorn',
		},
		{
			id: 21,
			src: purpleUnicorn,
			title: 'Purple Balloonicorn',
		},
		{
			id: 22,
			src: yellowUnicorn,
			title: 'Yellow Balloonicorn',
		},
	]
};

const imageReducer = (state = initState) => {
	return state;
};

export default imageReducer;

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
			w: '12',
			h: '36',
		},
		{
			id: 1,
			src: cosmina,
			title: 'Cosmina',
			w: '24',
			h: '48',
		},
		{
			id: 2,
			src: drums,
			title: 'Disco Drumset',
			w: '24',
			h: '30',
		},
		{
			id: 3,
			src: cat,
			title: 'Cat on a Piano Moon',
			w: '16',
			h: '20',
		},
		{
			id: 4,
			src: cassette,
			title: 'Cassette Tape',
			w: '10',
			h: '20',
		},
		{
			id: 5,
			src: necklace,
			title: 'Lips With Musical Necklace',
			w: '10',
			h: '20',
		},
		{
			id: 6,
			src: saoirse,
			title: 'Saoirse',
			w: '40',
			h: '16',
		},		
		{
			id: 7,
			src: agent,
			title: 'The Agent',
			w: '15',
			h: '30',
		},
		{
			id: 8,
			src: writersBlock,
			title: 'Writers Block',
			w: '16',
			h: '40',
		},
		{
			id: 9,
			src: zebra,
			title: 'Drippy Zebra',
			w: '24',
			h: '30',
		},	
		{
			id: 10,
			src: planets,
			title: 'Balloon Planets',
			w: '12',
			h: '36',
		},		
		{
			id: 11,
			src: imposter,
			title: 'Imposter Syndrome',
			w: '20',
			h: '16',
		},
		{
			id: 12,
			src: hexagon,
			title: 'Hexagon Spectra',
			w: '10',
			h: '20',
		},
		{
			id: 13,
			src: blueDog,
			title: 'Blue Balloon Dog',
			w: '12',
			h: '12',
		},
		{
			id: 14,
			src: lilacDog,
			title: 'Lilac Balloon Dog',
			w: '12',
			h: '12',
		},
		{
			id: 15,
			src: pinkDog,
			title: 'Pink Balloon Dog',
			w: '12',
			h: '12',
		},
		{
			id: 16,
			src: yellowDog,
			title: 'Yellow Balloon Dog',
			w: '12',
			h: '12',
		},
		{
			id: 17,
			src: blueUnicorn,
			title: 'Blue Balloonicorn',
			w: '12',
			h: '12',
		},
		{
			id: 18,
			src: greenUnicorn,
			title: 'Green Balloonicorn',
			w: '12',
			h: '12',
		},
		{
			id: 19,
			src: orangeUnicorn,
			title: 'Orange Balloonicorn',
			w: '12',
			h: '12',
		},
		{
			id: 20,
			src: pinkUnicorn,
			title: 'Pink Balloonicorn',
			w: '12',
			h: '12',
		},
		{
			id: 21,
			src: purpleUnicorn,
			title: 'Purple Balloonicorn',
			w: '12',
			h: '12',
		},
		{
			id: 22,
			src: yellowUnicorn,
			title: 'Yellow Balloonicorn',
			w: '12',
			h: '12',
		},
	]
};

const imageReducer = (state = initState) => {
	return state;
};

export default imageReducer;

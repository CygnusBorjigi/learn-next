import LayeredMain from './svg_background/LayeredMain.svg';
import LayeredMainTurned from './svg_background/LaryedMainTurned.svg';

function App() {
  return (
	<div>
	    <div style={{ backgroundImage: `url(${LayeredMain})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-screen h-[1000px]">
	 	 <h1 className="text-center z-20">Tailwind is working</h1>
	    </div>
	    <div style={{ backgroundImage: `url(${LayeredMainTurned})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="w-screen h-[1000px]">
		  <h1 className="text-center z-20">Tailwind is working</h1>
	    </div>
	  </div>
  );
}

export default App;

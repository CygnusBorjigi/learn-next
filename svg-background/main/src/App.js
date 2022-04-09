import LayeredMain from './svg_background/LayeredMain.svg';

function App() {
  return (
    <div style={{ backgroundImage: `url(${LayeredMain})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="h-screen">
	  <h1 className="text-center z-20">Tailwind is working</h1>
    </div>
  );
}

export default App;

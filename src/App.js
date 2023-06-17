import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Nielson"
          description="Gato goleiro!"
          music="Música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={444}
          messages={555}
          shares={689}
          name="Mathias"
          description="Gatinho dançando"
          music="fun cat"
          url="https://firebasestorage.googleapis.com/v0/b/video-2db61.appspot.com/o/X2Download.app-Que%20Bonito%20Gatito%20%23Shorts%20%23top-(720p60).mp4?alt=media&token=538b050d-b480-4995-a3a8-2ba5dcecc808"
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Greice"
          description="Gato louco!"
          music="Happy"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;

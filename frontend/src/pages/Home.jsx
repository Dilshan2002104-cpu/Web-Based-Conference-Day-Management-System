import SpeakerCard from "../componenets/SpeakerCard";
import './Styles/Home.css'

function Home() {
  return (
    <div className="app">
      <div className="speakercard-container">
      <SpeakerCard 
        name="John Doe" 
        image="https://via.placeholder.com/300x140" 
        bio="John Doe is an expert in AI and sustainable ." 
        sessionDetails={{
          title: "AI in Sustainable Engineering",
          time: "10:00 AM - 11:00 AM",
          venue: "Hall A"
        }}
      />

      </div>
    </div>
  );
}

export default Home;

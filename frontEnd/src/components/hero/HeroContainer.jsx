import GetCard from "../cards/GetCard";
import PostCard from "../cards/PostCard";
import "./hero.css";

// Functional component for rendering the hero container with sections for posting and getting data
const HeroContainer = () => {
  return (
    <div className="hero-container">
      <h2>Explore My API Showcase</h2>

      <div className="form-section">
        <PostCard onSubmit={(data) => console.log(data)} />
      </div>

      <div className="data-section">
        <GetCard
          title="Sample Item 1"
          description="This is a sample description."
        />
      </div>
    </div>
  );
};

export default HeroContainer;

import Carousel from "react-bootstrap/Carousel";
import "./LiveCampaign.css";
function LcCarousel({ Item }) {
  return (
    <Carousel>
      <Carousel.Item>{Item}</Carousel.Item>
    </Carousel>
  );
}

export default LcCarousel;

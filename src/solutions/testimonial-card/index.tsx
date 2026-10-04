import profileThumbnail from "@/assets/profile-thumbnail.webp";

function TestimonialCard() {
  return (
    <div className="container">
      <figure className="testimonial-card">
        <figcaption className="testimonial-card__author">
          <img src={profileThumbnail} alt="" width="48" height="48" />
          <div className="testimonial-card__author-info">
            <div className="testimonial-card__author-name truncate">Sarah Dole</div>
            <div className="testimonial-card__author-username truncate">@sarahdole</div>
          </div>
        </figcaption>
        <blockquote className="testimonial-card__testimonial">
          <p>
            I've been searching for high-quality abstract images for my design projects, and I'm
            thrilled to have found this platform. The variety and depth of creativity are
            astounding!
          </p>
        </blockquote>
      </figure>
    </div>
  );
}

export default TestimonialCard;

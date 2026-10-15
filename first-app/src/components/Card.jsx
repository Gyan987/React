import './Card.css'

const Card = ({ title, description, image }) => {
  return (
    <article className="card">
      <div
        className="card__media"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      />
      <div className="card__body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Card

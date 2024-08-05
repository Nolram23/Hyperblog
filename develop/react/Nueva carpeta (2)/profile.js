import { getImageUrl } from './utils.js';

function Profile ({ name, imageId, profession, awards, discovery, imageSize = 70 }) {

  return (
    <section className="profile">
    <h2>{name}</h2>
    <img
      className="avatar"
      src={getImageUrl(imageId)}
      alt={name}
      width={imageSize}
      height={imageSize}
    />
    <ul>
          <li>
            <b>Profesión: </b> 
            {profession}
          </li>
          <li>
            <b>Premios: {awards.length} </b> 
            ({awards.join(', ')})
          </li>
          <li>
            <b>Descubrió: </b>
            {discovery}
          </li>
        </ul>
      </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Científicos Notables</h1>
      <Profile
        imageId = 'szV5sdG'
        name = "Maria Skłodowska-Curie"
        profession = "física y química"
        discovery = "polonio (elemento químico)"
        awards = {['Premio Nobel de Física', 'Premio Nobel de Química', 'Medalla Davy', 'Medalla Matteucci']}
      />

      <Profile
        imageId = 'YfeOqp2'
        name = "Katsuko Saruhashi"
        profession = "geoquímica"
        discovery = "un método para medir el dióxido de carbono en el agua de mar"
        awards = {['Premio Miyake de geoquímica', 'Premio Tanaka']}
        />
    </div>
  );
}



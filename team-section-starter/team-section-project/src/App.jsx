import PropTypes from "prop-types";

const teamData = [
  {
    id: 1,
    name: "Joe Jackson",
    photo: "img/joe.jpg",
    title: "Founder & CEO",
    bio: "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
  },
  {
    id: 2,
    name: "Ash Karter",
    photo: "img/ash.png",
    title: "Founder & CFO",
    bio: "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
  },
  {
    id: 3,
    name: "Farias Amed",
    photo: "img/farias.png",
    title: "Front End AI Engineer",
    bio: "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
  },
  {
    id: 4,
    name: "Sarah Haust",
    photo: "img/sarah.png",
    title: "Dev Ops",
    bio: "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
  },
];

function App() {
  return <TeamSection />;
}

function TeamSection() {
  return (
    <section className="container">
      <span className="container-label">Team</span>
      <h2 className="container-title">Meet our Team</h2>

      {teamData.length > 0 ? (
        <>
          <p className="container-body">
            From skilled designers to tech-savvy developers, each member brings
            a unique perspective and expertise to the table.
          </p>

          <ul className="cards">
            {teamData.map((person) => {
              return <Card person={person} key={person.id} />;
            })}
          </ul>
        </>
      ) : (
        <p className="container-alt-body">
          We're building one of the most innovative minds of the world, stay
          tuned!
        </p>
      )}
    </section>
  );
}

function Card({ person }) {
  return (
    <li className="card">
      <img src={person.photo} alt={person.name} />
      <h3>{person.name}</h3>
      <h4>{person.title}</h4>
      <p>{person.bio}</p>
    </li>
  );
}

export default App;

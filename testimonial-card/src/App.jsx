function App() {
  return (
    <div className="wrapper">
      <ProfileCard
        thumbnail="images/profile-thumbnail.png"
        title="Sarah Dole"
        username="@sarahdole"
        bio={`I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`}
      />
      <ProfileCard
        thumbnail="https://avatars.githubusercontent.com/u/118931775?v=4"
        title="Bhavik Thakur"
        username="@bhavikthakur"
        bio={`Frontend Developer | MVP Builder for Startups | React, Tailwind, Firebase, Framer Motion | I build sleek, fast, client-ready web apps.`}
      />
    </div>
  );
}

function ProfileCard({ thumbnail, title, username, bio }) {
  console.log(thumbnail, title, username, bio);
  return (
    <main className="card">
      <div className="profile-info">
        <img src={thumbnail} alt={title} className="profile-thumbnail" />
        <div className="profile-id">
          <h1 className="title">{title}</h1>
          <p className="username">{username}</p>
        </div>
      </div>
      <p className="profile-bio">{bio}</p>
    </main>
  );
}

export default App;

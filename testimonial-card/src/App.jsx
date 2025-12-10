const userData = [
  {
    thumbnail: "images/profile-thumbnail.png",
    title: "Sarah Dole",
    bio: `I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!`,
    username: "@sarahdole",
    id: 1,
  },

  {
    thumbnail: "https://avatars.githubusercontent.com/u/118931775?v=4",
    title: "Bhavik Thakur",
    bio: `Frontend Developer | MVP Builder for Startups | React, Tailwind, Firebase, Framer Motion | I build sleek, fast, client-ready web apps.`,
    username: "@bhavikthakur",
    id: 2,
  },
  {
    thumbnail:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANChAQEBAJEBAJCAoNDQkJDRsICQcKIB0iIiAdHx8kKDQsJCYxJx8fLTstMSs3MDAwIys/RD9APzQ5QzcBCgoKDg0OFQ4PFSsZFSU3Ky03NzcrKzcyKzQrNysrKysyLTc3LTcrKy0rLSstKysyMysrLSsrKysrKysrNystLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABBEAABAwIEAwUFBgMFCQAAAAABAAIDBBEFEiExQVFxBhMiYYEyUpGhsQcjQnLB8BQz0VNikuHxFSRDRHOCk5Si/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACQRAQEAAgICAgEFAQAAAAAAAAABAhEDIRIxE0EEIjJCUVIF/9oADAMBAAIRAxEAPwD2FCRKkQQhKgBCEIAQmySBrSXFoDRq5xytaFy/aHtbHAwiJzHuto5vijB6oDppp2s9pzRfa5tdZuJdoaanBDpIy8MLu6a4FxXkeLY5NUSF0kjnXOn4QxvlyWVLM5xuSTrudSVWi29Pk+0SMD+RIDfT7wOasDFe3U8uYR2ja8ADXM9h8iuKM4It578lE6Uj+qNDbUmxCWQEOc4jMXG+uZ3mVG2cjjax3G6oNqBb0Sd5yPomTrcF7Uz05FnucMwu15zghd5h/asva0ujJD23D4jmsV4y2Sx9fRbmBYqWyMYXWb3g1OoYEjeyUmKxyuyglrrA5JBkcr4K42rlaaeFwID43OtI3Xw2uuowyYy07HneRgKRraEBAQAhCEAJEqRIBCRKgGBKkSoACVIlQAq9fWMp4XSPNmsaT5vPIKdeZ/aJiLjKGZnZWDNl2DSdgnAo9pu1b6t+UZmxMP8AKY6wefMrk5pL3uTa5sCbmyhmlsdPLoq00v1+CpKwJBY8cp28lBPMfhp1Vfvdf3smmT5oCTvP3zRnKgJPySMeb/s2Qackcf8AJOa/T9QoJXi+n9Exj+CAuh/0To5bH1CqNf8AVPDvqgOqwfFz3rI3PcInvYH31MTb62XtlIGiJoZYtyNy21GVfOUTtPVeqfZpjzpmGnkNzBHeMncs5JUPQAnJAUqRhCEIASFKkKAEIQkDAlSICYKhCEBUxSs/h6d0mV7gwXLWe0GrybHMfE73hzGkSEHKW27sL1PtAwuoZmtAJdC6zSbBy8KxAFsjrgix1G1inCqlUyC+mnl5KnI5SzG6rPKZGk6pWnh/qEgagxnkls9HnbgfqE02HX5JWQEqzFR891NyipjaplpKVoWn/AFKzDST6+iXnFfHWc0KVoWzTYG93TpZWDghA13+JKPkh/HWLCeC18Crn01UyRhs6N4NvwvbxCrVGFvbqB6c07C4g+Zgc4N8YuToLK5lKzyxs9voCgqBNAyQaCSNrgDu0KyFVw9obTxhtsoiZltsQrQSAQhCAEiVIgBCChII0qRKmCoKRKgK9bG18Tmu9lzTmO1mrxDtZWiSctYX5IzlBc4vc/4r3OePOxzffY5vmAV5d9omCx00THRxkB5eHS73cnA83lKSGAvPknSs1W1g9JeO9tx8UsrqHhjuqlHQZnAW4+gW03BmEAWO2/G6tU9Nl6k/ALRpornyXJnndu3DCSMf/YRtp9N00YQRtvytuushi0UvdN5BLdPTlYsJdfUW+Zsr0WGNaON/NbfchNdEErVaUI220A48E58YVruwopGckbLSu6AObYjguWrqQwVIAtZxBC64LI7RRaRvHB2VbcV7Y82PT1PsxJnw6A3ue4aCeRGi1lgdhnA4RD0kB8zmK31u5QhCEAJEqRABQhCAjQhCAVCRLdACxO2OGfxeGTMHtNZ3rPzjX6XHqttNdseh9UB81zN19bLsMNp8sTfyBc/isGStkYABkq3tsNQ3VdfBH4QOTQp5GnEjDblWoDZUpK6FhsXC4PWyRtfGdnX025LkyldeOUdBBKNtNuqkfb97rAbWt0sdz6BWGVZ53U7W1bpbXWUK038rfNStq9N0z0uvtbRVZDqmOqRbUqMVjL7jfnsgqcVQx1v3I/OFoCojcbBwvoq2OR3gFtzKwBa8fthyXcd52JiMeFQggi7XO14glbyrYdD3VPGz+yhY34BWV0uQIQgoASIQgAoQhARJUiEAqEIQAkcbAnyQub7a4k+mhiylwbLK5ryw5HDTRK3UVjN3TyjGHxmsmf8AeAipqXfd2Ia78O/nunBlWYWvfNIO+BtE3w2Z5p+PRB03eA375upOjnG4W1iDMrBb8LdlOWXW144atlcq+NzWuBkkAeW5mZy1rzwuFUlYOB+ZVieF7nXIdYnV34lTmon30BIcD4i4XCUpZTRBM4bOePyuV2nxGRouS53ibqXZWtas98RYANbga8i5PjfYG/ulOyVOOVl6dDDi4INyAWmx1uCVBPjLtmajNbOdQCs+iwiaWJ0rGvLdRcDR1lUiaRpY6F2nG6zmGO295M9L01fITYPktZu/hN+KbE55Pt29dVUAvf2r20HmpqaFziB4wbjxH2bLWSMLlbWnG2TQh9/ktuOve5sTXxTPbDJHI8xnvZHMbqdLBYlKwtkt5izwLNceRXTQzSQPilh7sOa57byguY1pHl0S32rVsd3hfbGjqALPkZ4g208ZYA7lcXHzXQRvDmggghwBDmnM17V5t2VwBk+J1Bmb4Yo4ZRBGTBF3rxcaA8r6ea9Hhiaxga0ANja1rWjQMarZpEFIlQCFBQhAIlSIQESLpEIByEiEALA7bUhmw82GsUzH9Bt+q31HPEJI3NO0jHNPRKzcVjdWV41VUueUsBv3dPIRyDrWWxERLCx2hzxNd8kx8Hd4gWnfuZAeBvcKOk+6eYjsHOdFycwnb0J+ixy/bp0fy2q1+Hl+oNljTUUg03ynRdU+TW3Hko3RE75R0FysZlY28Zfbk34ZI45jYAnibElU6ulIlZEPakc2/G19l1NWWxgucfYFy9xvYLGweN09f3xDsoPhuNAVpMr7Z3jx6kd1hFII6ZrANI2tHmVyHaSjEWJNIADakHTYd5+7LvsPHgPRc722oXSQh7AS+nlD2hupI4qMb20zx3NOXlw7Kbi/rupIKR/AfotnDXtqIQdDcatOpY5WxRAG7SR01Crzv2z+Oe1SkoyGjMBz6FbFLR98Wxj8c0bb+6L6/JV4ybW4334hWhVmBoLLd454ZED+KU6BVj3SynjHWdlIgX1cwFmz1xij5GGMZR+q6BU8IpBT0kUQNxFE0F3vu3J9TdXF0OQqEl0IBUiEIAQkSoCAJbpqEA5CS6LoBUEpt0XQHnfbNggxaN4uBURuze7mWdWsa8eIBzXW0PArp/tHpM+HiUDxUsrXBw3DToVxVFVh8YBOuUdbrLkx6234svqpYoXtFxNOPJ+WoAH/AHAlK90tv552/sWA/RNfLb5qrUVYYLk2/VYbromMJJEJJmmZznAOaPHZjGDnYAC/mtt9fTNYGNMYybNbuFyc+IMcLE2F7E8Ssh9WA8iwIzbndV4W+y+THH09MpcVaBof80lVirBZzyAL7k2BK4KDEBbR1rDYn2U6qxJrwLm9ufAKfju9KvJjrbpKprO+72ncG97Z0jAM8UrvMf0UsU8/KlOnvOi/QrBpsSY0DXwnS/FpWzTVLXC4NwU7uFvG+lyN8x1yUrbncvL/AJWCe6I54rkOkkqIo2EDKGa8AkEgDfQk+Sm7N/7zjELRctpQ+V1uDht87LTj3ay5dSPT2CwA5AJyYE663cpyE26LoBUJLoQC3QmoQEN0XUZemOkSCe6aZAq5eUhcmFjvEuZVcyaXoBcUhbNTSRv1bJE4EcwvDg50MpY7R0Mjmlp0IK9vJuLHiCvLvtGw3uazv2izakNzeU1v1/ql7OXTMNTcjXeyxMbqSZLcGj5oZNc7nh6qKrhMkg8wL8wFlMdVvcrlNKTZS7jsNipWRE68x1WzDg4ygWA/vcQUj8NLDpqAdxoj5Ic4r9stlG4gm7el9VG6ne3caX3GoWyykPn8VYioMx1FxzOoCPNfxTTni/KPTZb/AGZmvnvswA+QUWI4O0MJbu3fldVKF5ijdr7Vr+YT3Moz8bhltvVuIXJAPNd59mdBkpX1Dh4qp9gTuIwvLcOiNTVRxDeaZrb7ho5r3jD2shgZG0ACKNrQByAV4zUZZ5brQBS3UbXJbqkH3S3TAUt0A5Cai6AW6El0iAzyUXUeZGZIH3SXTMyTMgHkpCUwuTS5MH3WT2lwUV1NlvYtuW6ZvEtFzwASSAACSToGhcjjH2iRRl0VNG+aS5a158MWfpuUtqmNrzeqgNPUyRO3gmezNawcQbK/h7GvcLa6634lR9o80jzK4APeS+TKLAPO6yqCvMLwfMdCFnl+qdNZ+i6ruG05LenoFkYmx8fs36DXKtGhx6MgXy3I56KWsxGNwFiPE6193WXPJZe3T5SzpyMlTKHcR6bq/ROlcPadvtsFPVhjxcBvgLh6KWhqo2+E76fFa29dRlJZe6mkaTFrfUa34FYFQQDYe9w4rYxjEmsaQCL6bLnGyPA70bMlbq4ZwXJ8c+6XLd9R3f2fYQ7v3TvbYRtAjJ1JdxXorXLh+yna+GWBrJ3MjlBLc2Xu4nt4dF2UcgIBBBBAIIN2uC2257jZ7aVPPwKtByyGuV+CS4TStAp11FdKHICS6Lpl0XQD7oTLoQHk1RVSzVMkzKqnYZJXhoMpY5kQOg6aJRPV8K2n/wDZtdc7Dhkm73hmt8jfE5WRTRtH43HmXE3U3OR1Yfh8mXfpuNnr72FVAbAf8yDcJJavEYxczw2/67XkrFDWt2DR6WclLgNTr11UXl/p0Y/gf6rSbj1YPanA9A64Tz2lqQ2/e3sN8ot9FgVMtyqxcTz6KfO104/i8WP1tqYnjc74HF8spu02ZmysLj5KnhNGI4RIfbmGbMdSGqpWm8X5S2/RbDmFsLB7sbR00UZ5dM+XCTKSIMQZdt+a5Wupiw3G1/guylZeL0WPNGDuAeuoKnDPTDk45Y5ts5bx/VS/x7tNdtvJXKnDmu9nQ/EKjJQPB2vrwW8zlc148onZWnmbHnrqnisI8tfW6rspH7Brj6aK/RYO57rvNgDrbVzk7ljCmOVR0sD6mUDXK32n8GhdL/BMbB3dhlI2OpKdS0zYxZoAF/UlSycOoXPlybvTqw4pjO3JV9E6CS27TqHc2rp+xfaeWna6N33kbS0hjzYxi/BQ45GDC08cx+Cx8Mblkfy7v5rXHPcTjxy5yfT1qLtPTkA3kF+Bbq0q1B2ppWnWRw/MwheYNl1I8+t1bje0tsQR08TT6FVOT+22X4Ev7a9RZ2ooz/xmerSP0UzO0NIdp4vW4Xl0EcV9Wki27CWWT5WQt17moc33opc1h8FcylcnJ+LyYfW3qjcbpjtPB/jspW4pAdpqf/yBePCto/drh0kDrfJPbV0fvYgP8LlTmr2FtbEdpYD0kBQvHxU0vCatHVgd+qE9BXdMSkulNgoJHrkenkOkkA+CiMxKjIv+9k/KLJHpC8801juCSXQJkZ1TRZ2snW496M9DotiMh8LSOMbfOxWGXHccD8lp4JUMd93bKbmw4FRl6Yc+G+40omeADyWTXQZXHqukbALfBVquizC/0WO9OdykjLFIGrQqacgnqqoZrtxWkyLRsTLlaMLbCygjjIKuxs4KbTkDFK9uyeyKye5miQZGNm0TRxzH4LOpG2ZfjI7/AOVbxZ2aWxNmx6C2pcVWabjQWDQAByC3x9NOHjvl5VOH636/BSd9yVdjSp2Msh2yJoHEG+yvtmDtwAeY8OZUGpcyNq8VqenZJ7QF/e9l49VnTYS7eMh3913hcr7JbjVGex9VUzsYcv4vHn7jENJKD/Lk091uYBC6WnrpI3BzHOaQPaYcrrIWk5XBl/zrvq9MiWRQE3+KELF9Y8bIL0ISNFK24VcAg+qEJlYkL/3umtcWuDm6FpFjsShCE2OswPExO3K4gSNG23eBaxbohCxynbh5JqsurpM17KmaYMFuPE80IUbQiyeLoVZh305boQqNMfDr+wsXEsVNy1h02zcXIQqxacWMt7Z0cRebuOnzKmIDdBzQhaO7HGHt/RPBshCSjg7RJmQhMJY36JwclQgiSy2H06oQhOJr/9k=",
    title: "Sanket Bhujbal",
    bio: `Trader | Shop owner | philosopher-trader`,
    username: "@sabketbhujbal",
    id: 3,
  },
];

function App() {
  const numUsers = userData.length;
  // console.log(numUsers);
  return (
    <div className="wrapper">
      {numUsers > 0 ? (
        <ul>
          {userData.map((user) => {
            return <ProfileCard user={user} key={user.id} />;
          })}
        </ul>
      ) : (
        <p>No users found!</p>
      )}
    </div>
  );
}

function ProfileCard({ user }) {
  return (
    <li className="card">
      <div className="profile-info">
        <img
          src={user.thumbnail}
          alt={user.title}
          className="profile-thumbnail"
        />
        <div className="profile-id">
          <h1 className="title">{user.title}</h1>
          <p className="username">{user.username}</p>
        </div>
      </div>
      <p className="profile-bio">{user.bio}</p>
    </li>
  );
}

export default App;

import cnetechImage from "../assets/cnetech.png";
const HomePage = () => {
  const styles = {
    container: {
      backgroundImage: `url(${cnetechImage})`,
      backgroundSize: "contain", // You can use 'contain' or a specific size as well
      height: "400px", // Adjust the height as needed
      // You can add more styling properties as per your requirements
    },
  };
  return (
    <>
      <main
        className="hero min-h-screen object-scale-down bg-white"
        style={styles.container}
      >
        <div className="hero-overlay bg-opacity-80">
          <div className="hero-content text-center">
            <div className="max-w-md font-serif">
              <h1 className="text-4xl font-bold text-white font-mono italic mt-8">
                CNETECH SYSTEMS
              </h1>
              <p className="py-8 text-white font-mono font-semibold">
                CNETECH SYSTEMS: Revolutionizing the digital landscape with
                cutting-edge ingenuity! We're not just developers; we're
                architects of seamless experiences. Specializing in MERN stack
                technology, we sculpt web and mobile apps that transcend
                expectations. Elevate your digital presence with our
                innovation-driven solutions, where user-centric design meets
                robust functionality. Your vision, our expertise—unleash the
                power of possibilities with CNETECH SYSTEMS!
              </p>
              <a
                to="/"
                className="rounded-md text-md font-mono font-bold bg-yellow-500 text-gray-900 hover:text-[#800000] hover:bg-gray-200 py-4 px-4"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;


const Hero = () => {
    return (
      <section id="hero" className="bg-pink-100 h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-pink-600 mb-8">
          Showcasing my best work and skills.
        </p>
        <a href="#portfolio" className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600">
          See My Work
        </a>
      </section>
    );
  };
  
  export default Hero;
  
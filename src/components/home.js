import React from 'react';
// import './home.css';

const Home = () => (
  <section>
    <div className="homeContainer">
      <h2>Welcome to our page!</h2>
      <br />
      <p className="homeP">
        Maths Magician is a website that provides a fun and interactive way for
        children to practice and improve their math skills. The website offers a variety
        of math games and activities designed to help students learn and understand basic
        math concepts such as addition, subtraction, multiplication, division, and more.
      </p>
      {' '}
      <p>
        The games on Maths Magician are designed to be both engaging and educational,
        providing students with immediate feedback on their progress and encouraging them
        to continue practicing their math skills. The website is designed for children in grades K-8
        and offers games and activities at a variety of difficulty levels,
        so children can progress at their own pace. The quotes can serve many purposes,
        such as inspiring and motivating students to learn math,
        conveying the beauty and elegance of mathematical concepts, or
        providing insight and wisdom about the role of math in our lives and the world around you.
      </p>
      <p className="homeP">
        Overall, Maths Magician is a great resource for parents and teachers who
        are looking for ways to help their children improve their math skills in
        a fun and interactive way.
      </p>
    </div>
  </section>

);

export default Home;

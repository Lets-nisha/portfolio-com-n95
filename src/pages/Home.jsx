import React from 'react'
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () =>{
  return (
    <div className="p-8">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          We Build Modern Websites
        </h1>
        <Button text="Get Started" />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Web Development" description="Modern and scalable websites." />
        <Card title="UI/UX Design" description="Clean and user-friendly designs." />
        <Card title="SEO Optimization" description="Improve your online visibility." />
      </section>
    </div>
  );
}

export default Home;
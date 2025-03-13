import React, { JSX } from "react";

interface HeroProps {
  heading: string;
  subheading: string;
  actions: Array<{
    title: string;
    link: string;
    target: string;
  }>;
  promotion?: string;
}

const Hero = ({
  heading,
  subheading,
  actions,
  promotion,
}: HeroProps): JSX.Element => {
  return (
    <section className="relative h-[600px] flex flex-col justify-center items-center">
      <img
        className="absolute top-0 left-0 w-full h-full opacity-40 z-10 object-cover"
        src="/hero-bg.svg"
      />
      <div className="relative container z-20">
        <div className="flex flex-col justify-center items-center gap-12">
          <h1 className="lg:text-7xl font-bold"> {heading} </h1>
          <p className="lg:text-2xl"> {subheading} </p>
          <div className="flex gap-4">
            {actions !== undefined &&
              actions.length &&
              actions.map((action, index) => (
                <a
                  key={`hero-action-${index}`}
                  className="bg-emerald-500 text-white px-4 py-2.5 rounded text-lg font-semibold"
                  href={action.link}
                  target={action.target}
                >
                  {action.title}
                </a>
              ))}
          </div>
          {promotion && (
            <div className="bg-gray-100 px-6 py-4 rounded font-semibold">
              {promotion}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

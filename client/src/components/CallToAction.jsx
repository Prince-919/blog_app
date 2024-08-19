import { Button } from "flowbite-react";

const CallToaction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 50+ JavaScript Projects
        </p>
        <Button className="gradient-bg border-none hover:opacity-80 transition-opacity ease-in-out rounded-tl-xl rounded-bl-none">
          <a
            href="https://prince-sharma-0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            50+ JavaScript Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s"
          alt="javascript"
        />
      </div>
    </div>
  );
};

export default CallToaction;

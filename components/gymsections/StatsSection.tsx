"use client";

import { useEffect, useState } from "react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return <span>{count}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-red-600 text-white py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center">

        <div>
          <h2 className="text-4xl font-bold">
            <Counter target={50} />+
          </h2>
          <p className="text-sm mt-2">Expert Trainers</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            <Counter target={2379} />
          </h2>
          <p className="text-sm mt-2">Happy Members</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">
            <Counter target={20} />+
          </h2>
          <p className="text-sm mt-2">Fitness Programs</p>
        </div>

      </div>
    </section>
  );
}
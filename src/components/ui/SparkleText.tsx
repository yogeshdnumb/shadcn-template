import { useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";

export default function SparkleText({ children }: { children: string }) {
  useEffect(() => {
    let index = 0;
    const interval = 1300;

    const rand = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star: HTMLElement) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-20, 60)}%`);
    };

    const stars = Array.from(document.getElementsByClassName("magic-star"));
    for (const star of stars) {
      const htmlStar = star as HTMLElement;
      setTimeout(
        () => {
          animate(htmlStar);
          setInterval(() => animate(htmlStar), 2000);
        },
        index++ * (interval / 2),
      );
    }
  }, []);

  return (
    <span className="magic relative inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      <span>{children}</span>

      <PiStarFourFill className="magic-star absolute left-[--star-left] top-[--star-top] block h-[--size] w-[--size] animate-starScale text-purple-500 [--size:0.3em]" />
      <PiStarFourFill className="magic-star absolute left-[--star-left] top-[--star-top] block h-[--size] w-[--size] animate-starScale text-purple-500 [--size:0.3em]" />
      <PiStarFourFill className="magic-star absolute left-[--star-left] top-[--star-top] block h-[--size] w-[--size] animate-starScale text-pink-500 [--size:0.3em]" />
      <PiStarFourFill className="magic-star absolute left-[--star-left] top-[--star-top] block h-[--size] w-[--size] animate-starScale text-pink-500 [--size:0.3em]" />
    </span>
  );
}

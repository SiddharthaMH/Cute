"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "../assets/first.jpg";
import styles from "../styles/home.module.css";
import balloons from "../assets/balloons.png";
import { Rampart_One } from "next/font/google";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const router = useRouter();
  const [hearts, setHearts] = useState([]);

  // Redirect to /intro on first visit
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visitedIntro");

    if (!hasVisited) {
      sessionStorage.setItem("visitedIntro", "true"); // Mark as visited
      router.replace("/intro"); // Redirect only once per session
    }
  }, [router]);

  useEffect(() => {
    const generateHearts = () => {
      const heartArray = [];
      for (let i = 0; i < 20; i++) {
        heartArray.push({
          id: i,
          left: Math.random() * 100 + "vw",
          animationDelay: Math.random() * 10 + "s",
          size: Math.random() * 40 + 20 + "px",
        });
      }
      setHearts(heartArray);
    };
    generateHearts();
  }, []);

  const handleno = () => {
    router.push("/page1");
  };

  const handleyes = () => {
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={rampartOne.className} style={{ fontSize: "60px" }}>
          <p>Heyy Cutiee,</p>
          <p>Will you be my Valentine?</p>
        </div>
        <Image src={img1} className={styles.img} alt="new" />
      </div>

      <div className={styles.btn}>
        <button className={styles.btn1} onClick={handleyes}>
          YES
        </button>
        <button className={styles.btn2} onClick={handleno}>
          NOT INTERESTED
        </button>
      </div>

      {/* Floating Hearts Animation */}
      <div className={styles.heartContainer}>
        {hearts.map((heart) => (
          <Image
            key={heart.id}
            src={balloons}
            alt="Floating Heart"
            width={40}
            height={40}
            className={styles.heart}
            style={{
              left: heart.left,
              animationDelay: heart.animationDelay,
              width: heart.size,
              height: heart.size,
            }}
          />
        ))}
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import introImg from "../../assets/hehe.jpg"; // Change this to your image
import styles from "../../styles/home.module.css";

export default function IntroPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/"); // Move to the main page after 4 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={styles.container}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>
        Heyy, who is that cutiee?? 😍 <br />
        Wait, lemme ask her out! ❤️
      </h1>
      <Image src={introImg} className={styles.img} alt="Intro Image" />
    </div>
  );
}

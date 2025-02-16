"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "../../assets/manni.jpg";
import styles from "../../styles/home.module.css";
import { Rampart_One } from "next/font/google";
import { useState } from "react";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Page2() {
  const router = useRouter();
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleyes = () => {
    router.push("/home");
  };

  const handleNoHover = () => {
    setNoButtonStyle({
      position: "absolute",
      left: `${Math.random() * 80}vw`,
      top: `${Math.random() * 80}vh`,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={rampartOne.className} style={{ fontSize: "60px" }}>
          Ab kya karegi??
        </div>
        <Image src={img1} className={styles.img} alt="new" />
      </div>

      <div className={styles.btn}>
        <button className={styles.btn1} onClick={handleyes}>
          YES
        </button>
        <button
          className={styles.btn2}
          onMouseEnter={handleNoHover}
          style={noButtonStyle}
        >
          NOT INTERESTED
        </button>
      </div>
    </div>
  );
}

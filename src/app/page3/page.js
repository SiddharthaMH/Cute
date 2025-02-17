"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "../../assets/bike.jpg";
import styles from "../../styles/home.module.css";
import { Rampart_One } from "next/font/google";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Page1() {
  const router = useRouter();

  const handleno = () => {
    router.push("/page2");
  };

  const handleyes = () => {
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={rampartOne.className} style={{ fontSize: "60px" }}>
        <p>Me tujhe pura duniya dikhaunga 🥺</p>
        <p>Aajana meere sath babyyy</p>
        </div>
        <Image
          src={img1}  // Change img1 to the correct image variable
          alt="New"
          width={450}  // Increase width (change this value)
          height={450} // Increase height (change this value)
          className={styles.img}
        />

      </div>

      <div className={styles.btn}>
        <button className={styles.btn1} onClick={handleyes}>
          YES
        </button>
        <button className={styles.btn2} onClick={handleno}>
          NOT INTERESTED
        </button>
      </div>
    </div>
  );
}

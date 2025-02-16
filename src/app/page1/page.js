"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "../../assets/cry.jpg";
import styles from "../../styles/home.module.css";
import { Rampart_One } from "next/font/google";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Page1() {
  const router = useRouter();

  const handleno = () => {
    router.push("/page3");
  };

  const handleyes = () => {
    router.push("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <div className={rampartOne.className} style={{ fontSize: "60px" }}>
          Maine kya kiya?? 
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
    </div>
  );
}

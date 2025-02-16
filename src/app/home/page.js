"use client";
import { Rampart_One } from "next/font/google";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import styles from "../../styles/home.module.css";

// Import multiple floating images
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpg";
import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpg";
import img18 from "../../assets/18.jpg";
import img19 from "../../assets/19.jpg";
import img20 from "../../assets/20.jpg";
import img21 from "../../assets/21.jpg";
import img22 from "../../assets/22.jpg";
import img23 from "../../assets/23.jpg";
import img24 from "../../assets/24.jpg";
import img25 from "../../assets/25.jpg";
import img26 from "../../assets/26.jpg";
import img27 from "../../assets/27.jpg";
import img28 from "../../assets/28.jpg";
import img29 from "../../assets/29.jpg";
import img30 from "../../assets/30.jpg";
import img31 from "../../assets/31.jpg";
import img32 from "../../assets/32.jpg";

const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

// Store images in an array
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32
];

export default function HomePage() {
  const [floatingImages, setFloatingImages] = useState([]);

  useEffect(() => {
    const generateFloatingImages = () => {
      const imageArray = [];
      const totalImages = images.length;
      const amplitude = 15; // Controls horizontal wave spread
      const verticalGap = 100; // Adjusts vertical spacing
  
      for (let i = 0; i < totalImages; i++) {
        const xOffset = amplitude * Math.sin(i * 0.7); // Creates wave motion
        const leftPosition = i % 2 === 0 ? 30 + xOffset : 70 - xOffset; // N-S pattern
        const topOffset = i * verticalGap; // Adds vertical spacing
  
        imageArray.push({
          id: i,
          left: `${leftPosition}vw`, // Alternates between left & right
          top: "100vh", // Start at the very bottom (off-screen)
          animationDelay: `${i * 0.5}s`, // Staggered start times
          size: "100px",
          img: images[i],
        });
      }
  
      setFloatingImages(imageArray);
    };
  
    generateFloatingImages();
  }, []);

  
  
  
  

  return (
    <div className={styles.container}>
      <h1 className={rampartOne.className} style={{ fontSize: 50, zIndex: 10 }}>
        Yayyy I knew it
      </h1>
      <div className={rampartOne.className} style={{ fontSize: 80, zIndex: 10 }}>
        I LOVE U THE MOSTTTTTTT 😘😘
      </div>

      {/* Floating Images - Moving from Bottom to Top */}
      <div className={styles.floatingContainer}>
        {floatingImages.map((img) => (
          <Image
            key={img.id}
            src={img.img}
            alt="Floating"
            width={120}
            height={120}
            className={styles.floating}
            style={{
              left: img.left,
              top: img.top,
              animationDelay: img.animationDelay,
              width: img.size,
              height: img.size,
              position: "absolute",
            }}
          />
        ))}
      </div>

      {/* React Player for YouTube */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Nnop2walGmM"
        playing
        loop
        width="0px"
        height="0px"
      />
    </div>
  );
}

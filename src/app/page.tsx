"use client";

import Image from "next/image";
import { useState } from "react";
import charlieBrown from "@/app/pic/charlie-brown-happy-valentines-cute-greetings-animated-gif-2.gif";
import { Position } from "@/app/type/type";

export default function Home() {
  const [position, setPosition] = useState<Position>(null); // เริ่มต้นเป็น null
  const [name, setName] = useState("");
  const [greetings, setGreetings] = useState("");
  const [greetings2, setGreetings2] = useState("");

  const handleClick = () => {
    setGreetings(`Hello ${name}! 💖`);
  };

  const handleClickYes = () => {
    setGreetings2(`LOVE YOU TOOOOOOO AS UNIVERSE ${name}! 💖`);
  };

  const moveButtonRandomly = () => {
    const windowWidth = window.innerWidth; // ความกว้างของหน้าจอ
    const windowHeight = window.innerHeight; // ความสูงของหน้าจอ

    // สุ่มตำแหน่งใหม่
    const randomTop = Math.floor(Math.random() * windowHeight);
    const randomLeft = Math.floor(Math.random() * windowWidth);

    // อัปเดตตำแหน่ง
    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-5">
      {/* รูปภาพ */}
      <Image src={charlieBrown} alt="Charlie Brown" width={250} height={250} />

      {/* ข้อความหลัก */}
      <h1 className="text-2xl font-bold text-pink-200">
        Can you be my valentine?
      </h1>

      {/* ฟอร์ม Input */}
      {!greetings ? (
        <div className="flex flex-col items-center space-y-3">
          <label htmlFor="name" className="text-lg font-semibold">
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg text-black"
            required
          />
          <button
            onClick={handleClick}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            Submit
          </button>
        </div>
      ) : (
        // แสดงข้อความเมื่อมี Greeting แล้ว
        <div className="text-base text-center space-y-3 m-4">
          {/* ถ้า greetings2 มีค่า ให้แสดงเฉพาะ greetings2 */}
          {greetings2 ? (
            <>
            <p className="text-xl font-semibold text-red-500">{greetings2}</p>
            <p className="text-xl font-semibold text-red-500">created by jrd.mov_</p>
            </>
          ) : (
            // ถ้า greetings2 ไม่มีค่า ให้แสดงข้อความอื่น
            <>
              <p className="text-xl font-semibold text-red-500">{greetings}</p>
              <p className="text-base font-semibold text-gray-300">
                I dont know, what is that day but just a normal day to wake up,
                study, and sleep.
              </p>
              <p className="text-base font-semibold text-gray-300">
                Please know that someday, someone will love you. 💖
              </p>
              <p className="text-base font-semibold text-gray-300">
                Pls accept my love. 💖
              </p>
              <div className="gap-6">
                <button
                  onClick={handleClickYes}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition mr-4"
                >
                  Yes
                </button>
                {/* ปุ่ม No */}
                <button
                  onClick={moveButtonRandomly}
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition mr-4"
                  style={{
                    position: position ? "absolute" : "static", // ใช้ absolute เมื่อมีตำแหน่ง
                    top: position ? `${position.top}px` : "auto",
                    left: position ? `${position.left}px` : "auto",
                  }}
                >
                  No
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
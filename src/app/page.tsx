"use client";
import { useState } from "react";
import Card from "@/components/Card";
import FadeInOut from "@/components/FadeInOut";

export default function Home() {
  const [cardVisible, setCardVisible] = useState(false);
  return (
    <main className="p-4">
      <div className="mb-4">
        <button
          className="border rounded shadow-sm px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          onClick={() => setCardVisible(!cardVisible)}
        >
          Toggle card
        </button>
      </div>

      <FadeInOut visible={cardVisible}>
        <Card setCardVisible={setCardVisible} />
      </FadeInOut>
    </main>
  );
}

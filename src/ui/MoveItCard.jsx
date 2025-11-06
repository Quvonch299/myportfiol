import ElectricBorder from "@/components/ElectricBorder";
import React from "react";

export default function MoveItCard() {
  return (
    <div >
    <ElectricBorder
        color="#7df9ff"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 16 }}
      >
    <div className="bg-[#0f0f1a] text-white w-full rounded-2xl p-6 shadow-lg        ">
        <div>
          <h2 className="text-xl font-bold mb-2">Move.it</h2>
          <p className="text-gray-400 text-sm mb-4">
            Aplicação da NLW#04 da Rocketseat. Desenvolvida com React.
            Plataforma de Pomodoro com exercícios.
          </p>

          <div className="flex gap-2 mb-4 mt-[20px] text-[#7B4AE2] flex-wrap">
            <span className="bg-[#7B4AE21A] text-sm px-4 flex items-center py-2 rounded-lg">React JS</span>
            <span className="bg-[#7B4AE21A] text-sm px-4 flex items-center py-1 rounded-lg">Typescript</span>
          </div>

          <div className="bg-[#2a2a44] rounded-xl overflow-hidden">
            <img
              src="./cart.png"
              alt="Move.it preview"
              className="w-full"
            />
          </div>
        </div>
    </div>
      </ElectricBorder>
      </div>
  );
}

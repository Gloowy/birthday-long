"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Home() {
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [daysLived, setDaysLived] = React.useState<number | null>(null);
  const [showResult, setShowResult] = React.useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setShowResult(false);
  };

  const handleCalculate = () => {
    if (selectedDate) {
      const today = new Date();
      const timeDiff = today.getTime() - selectedDate.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLived(daysDiff);
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-800">生命计时器</h1>
          <p className="text-gray-600">探索你在这个世界上的每一天</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            className="rounded-md border shadow p-3"
            disabled={(date) => date > new Date()}
          />

          {selectedDate && (
            <button
              onClick={handleCalculate}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              计算生命时光
            </button>
          )}

          {showResult && daysLived !== null && selectedDate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <p className="text-lg text-gray-700">
                从 {selectedDate.toLocaleDateString('zh-CN')} 至今
              </p>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-purple-600">
                  {daysLived.toLocaleString()}
                </span>
                <span className="text-gray-600">天的精彩人生</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                每一天都是独特的礼物，继续创造属于你的精彩故事
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
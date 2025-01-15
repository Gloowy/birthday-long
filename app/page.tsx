"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";

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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Hero />
      <div className="py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-8"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-800">Life Journey Timer</h1>
            <p className="text-gray-600">Discover the Story of Your Days</p>
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
                Calculate My Life Journey
              </button>
            )}

            {showResult && daysLived !== null && selectedDate && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <p className="text-lg text-gray-700">
                  From {selectedDate.toLocaleDateString('en-US')} until today
                </p>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-purple-600">
                    {daysLived.toLocaleString()}
                  </span>
                  <span className="text-gray-600">Days of Beautiful Journey</span>
                </div>
                <p className="text-sm text-gray-500 max-w-xs mx-auto">
                  Every day is a unique gift. Continue writing your extraordinary story.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
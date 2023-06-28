import React, { useEffect, useState } from "react";
import axios from "axios";

const WordOfTheDay = (props) => {
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "669fb5a7cfmshfccebf89c05d2d6p184121jsncae20f5cb47f"; // Replace 'YOUR_API_KEY' with your actual API key
        const response = await axios.get(
          "https://word-of-the-day2.p.rapidapi.com/word/today",
          {
            headers: {
              "X-RapidAPI-Key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );
        const wordData = response.data;

        // Filter out items without a word
        const filteredWordList = wordData.filter((item) => item.word);

        // Slice the first four items from the filtered word list
        const slicedWordList = filteredWordList.slice(0, 4);

        setWordList(slicedWordList);
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false); // Set loading to false in case of an error
    };

    fetchData();
  }, []);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * 4) + 1; // Generate a random index between 1 and 4
    return wordList[randomIndex - 1];
  };

  const selectedWord = getRandomWord();

  return (
    <div className={` ${props.className} + flex justify-center items-center`}>
      {loading ? (
        <p>Loading...</p>
      ) : selectedWord ? (
        <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Word of the Day</h1>
          <p className="text-xl mb-2">Word: {selectedWord.word}</p>
          <p className="text-gray-600">Meaning: {selectedWord.mean}</p>
        </div>
      ) : (
        <p>No word available.</p>
      )}
    </div>
  );
};

export default WordOfTheDay;

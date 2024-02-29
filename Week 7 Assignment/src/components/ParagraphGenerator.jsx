import { useState } from "react"

function ParagraphGenerator() {
    const [inputWord, setWord] = useState(0);
    const [paragraph, setParagraph] = useState('');

    const generatePara = () => {
        const words = [
            "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", 
            "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", 
            "incididunt", "ut", "labore", "et", "dolore", "magna", 
            "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", 
            "nostrud", "exercitation", "ullamco", "laboris", "nisi", 
            "ut", "aliquip", "ex", "ea", "commodo", "consequat", 
            "Duis", "aute", "irure", "dolor", "in", "reprehenderit", 
            "in", "voluptate", "velit", "esse", "cillum", "dolore", 
            "eu", "fugiat", "nulla", "pariatur", "Excepteur", "sint", 
            "occaecat", "cupidatat", "non", "proident", "sunt", 
            "in", "culpa", "qui", "officia", "deserunt", "mollit", 
            "anim", "id", "est", "laborum"
        ];
    
    
        let para = '';
        for (let i = 0; i < inputWord; i++) {
            const randomIndex = Math.floor(Math.random() * words.length);
            para += words[randomIndex] + ' ';
        }
        setParagraph(para);
    }

  return (
    <>
    <div className="flex flex-col items-center mt-20">
        <h1 className="font-bold text-3xl mb-4">Para Generator</h1>
        <div className="flex">
        <input className="border border-2 border-black w-full py-2 pl-4 pr-80" 
        type="text" placeholder="Enter number of words"
        onChange={(e) => {
            setWord(e.target.value);
        }} />
        <button className="ml-4 text-white bg-black rounded-2xl p-4"
        onClick={generatePara}>Generate</button>
        </div>

        {paragraph !== '' &&
            <div className="bg-gray-200 py-8 px-12 m-8">
                {paragraph}
            </div>
        }
        </div>
    </>
  )
}

export default ParagraphGenerator
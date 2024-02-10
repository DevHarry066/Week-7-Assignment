import { useState } from "react"
function BackgroundChange() {
  const allColors = [
    {
    colorName: "Red",
    id: 1
  },{
    colorName: "Yellow",
    id: 2
  },
  {
    colorName: "Black",
    id: 3
  },
  {
    colorName: "Purple",
    id: 4
  },
  {
    colorName: "Green",
    id: 5
  },{
    colorName: "Blue",
    id: 6
  }];
  const [color, setColor] = useState('yellow');
  const colorChangeEvent = (colorEl) => {
    setColor(colorEl);
  }

  return (
    <>
    <div style={{backgroundColor: color}} className="min-h-screen">
    <div className={`flex-row mx-2 p-2 px-6 rounded-xl ${color === 'Black' ? 'text-white' : 'text-black'}`} 
    >BackgroundChange</div>
    <div className="bg-white p-3 m-4 border border-3 shadow-xl">
    {allColors.map(colorEl => {
     return <>
      <button 
      onClick={() => colorChangeEvent(colorEl.colorName)}
      key={colorEl.id}
        style={{backgroundColor: colorEl.colorName}} 
        className={`flex-row mx-2 p-2 px-6 rounded-xl ${colorEl.colorName === 'Black' ? 'text-white' : 'text-black'}`} 
         type="button">
          {colorEl.colorName === 'black' ? 'Change Color' : colorEl.colorName}
          </button>
      </>
    })}
    </div>
    </div>
    </>


  )
}

export default BackgroundChange
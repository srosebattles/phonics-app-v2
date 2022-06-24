export const LetterTray = () => {
  const tempLetterArray: string[] = ["a","b","c","d","e"]

  const dragstartHandler = (e: React.DragEvent<HTMLDivElement>) => {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

window.addEventListener('DOMContentLoaded', () => {
  // Get the element by id
  const element = document.getElementByClassName("draggableLetter");
  // Add the ondragstart event listener
  element.addEventListener("dragstart", dragstartHandler);
});

  return (
    <div style={{backgroundColor: "darkgray", color: "whitesmoke", width: "70%"}}>
      tempLetterArray.map((letter, index) => {
        <span className="draggableLetter" key={index}>{letter}</span>
      }
    </div>
  )
}

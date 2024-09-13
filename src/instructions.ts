import './styles/instructions.css'
import arrowUp from "./styles/assets/arrow_up.svg";
import arrowDown from "./styles/assets/arrow_down.svg";
import arrowLeft from "./styles/assets/arrow_left.svg";
import arrowright from "./styles/assets/arrow_right.svg";

export function instructionsHTML() {
  const container = document.createElement("div");
  
  container.innerHTML = `
  <div id="instructions">
    <div class="keys">
      <div class="words">
        <div class="z-x">
          <div class="key__button" style="margin-right: 25px">Z</div>
          <p style="margin-right: 25px">Press the Z key to inhale enemies and shoot stars</p>
        </div>
        <div class="z-x">
          <div class="key__button">X</div>
          <p>Press the X key to jump and double jump</p>
        </div>
      </div>
      <div class="arrows">
        <div style="display: flex">
          <div class="arrow-buttons" style="margin-top: 25px">
            <img src="${arrowLeft}" alt="" />
          </div>
          <div class="arrow-keys">
            <div class="arrow-buttons" style="margin-bottom: 10px">
              <img src="${arrowUp}" alt="" />
            </div>
            <div class="arrow-buttons">
              <img src="${arrowDown}" alt="" />
            </div>
          </div>
          <div class="arrow-buttons up-down" style="margin-top: 25px">
            <img src="${arrowright}" alt="" />
          </div>
        </div>
        <div class="instructions">
          <p style="width: 100%">Use the arrow keys to move</p>
        </div>
      </div>
    </div>
    <p class="enter">Press Enter ⏎ to continue</p>
   
     </div>
     `;
  document.body.appendChild(container);
  
}




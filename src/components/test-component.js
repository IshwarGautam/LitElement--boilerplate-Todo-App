import { LitElement, html, css } from '../../node_modules/lit';

export class TestComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
        max-width: 800px;
      }

      .container .btn{
        width: 70px;
        height: 30px;
        font-size: 20px;
        cursor:pointer;
        border-radius:5px;
      }
      
      .container{
        padding: 10px;
        border: 3px solid blueviolet;
        width: 50%;
        margin: auto;
        border-radius: 10px;
      }
      
      .container .input{
        width: 90%;
        height: 30px;
        border-radius:10px;
        margin-bottom:7px;
      }
      
      .container ul{
        list-style:none;
        padding: 0px;
      }
      
      .container li{
        color: rgb(48, 17, 226);
      }
      
      .container li a{
        float: right;
        text-decoration: none;
        font-weight: bold;
      }
      
      .container #error{
        color: red;
        font-size: 15px;
      }
    `;
  }

  render() {
    return html`

    <div class="container">
      <ul id="box"></ul>
      <input type="text" id="name" placeholder = "Type your Todo" class="input"/>

      <input type="button" value="Add" id="btnClick" class="btn" @click="${this.addData}"/>
    </div>

    `;
  }

  addData(){

    // Get name from input text field
    let name = this.shadowRoot.getElementById('name').value;

    // check if the text field is empty or not
    if (name === ''){
      // display message
      alert('Please fill data');
      return;
    }
    else{
      let box = this.shadowRoot.getElementById('box');

      let li = document.createElement('li');
      li.textContent = name; //Get user input

      box.appendChild(li);

      let a = document.createElement('a');
      a.textContent = "X"; //create remove icon

      a.href = "javascript:void(0)";
      a.className = "remove";

      a.addEventListener('click', function(){
        box.removeChild(li);
      })

      li.appendChild(a);

      let pos = box.firstElementChild; //get the position of first element child

      if (pos === null){
        box.appendChild(li); // when first list will be added
      }
      else{
        box.insertBefore(li, pos); // insert new list (TODO) at the top
      }
    }

    this.shadowRoot.getElementById('name').value = ""; // remove the user input when the button is clicked 
  }
}

customElements.define('test-component', TestComponent);

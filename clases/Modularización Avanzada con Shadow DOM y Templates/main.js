class MiMenu extends HTMLElement{
  constructor(){
    super();
  }
  
  static get observedAttribute(){
    return ['nombre']
  };

  connectedCallback(){
    const shadowRoot = this.attachShadow({mode:'open'});
    const html = 
    `  
    <strong id="nombre-menu">Nombre</strong>
    <button> Boton </button>
    <div id="menu">
      <div class="item-menu">item 1</div>  
      <div class="item-menu">item 2</div>  
    </div>
    <slot></slot>
    `
    const css=
    `
    <style>
      #menu{
        border: 1px solid blue;
        background: grey;
        padding: 10px;
      }
      #nombre-menu{
        display:block;
      }
      .item-menu{
        background: white;
        margin-bottom: 4px;
        padding: 0px 4px 0px 4px;
      }
    </style>
    
    `
    this.shadowRoot.innerHTML = html + css;
    const btn = this.shadowRoot.querySelector('button');
    btn.addEventListener('click',()=>{
      const evento = new CustomEvent("evento-custom", {detail:"Evento Detonado"})
      this.dispatchEvent(evento);
    })
  }
}
customElements.define('mi-menu',MiMenu);

const miMenu = document.querySelector('mi-menu');


for(const item of miMenu.shadowRoot.querySelectorAll('.item-menu')){
  item.addEventListener('click',()=>{
    alert(item.textContent)
  })
}

miMenu.addEventListener("evento-custom",event =>{
  console.log(event.detail)
})
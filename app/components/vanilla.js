class VanillaComponent extends HTMLElement {
  static get is() { return 'vanilla-component'; }

  constructor() {
    super()
    this.companyName = "Scott Logic"
    this.render();    
  }

  render() {
    var shadowRoot = this.shadowRoot || this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `<h2>Hello ${this.title} welcome to ${this.companyName}</h2>`
  }

  static get observedAttributes() {
    return ['title'];
  }

  get title() {
    return this.hasAttribute('title') ? this.getAttribute('title') : 'vanilla component users';
  }

  set title(val) {
    if (val) {
      this.setAttribute('title', val);
    } else {
      this.removeAttribute('title');
    }
  }

  attributeChangedCallback(name, old, change) {
    this.render();
  }
}

window.customElements.define(VanillaComponent.is, VanillaComponent);

export default VanillaComponent;
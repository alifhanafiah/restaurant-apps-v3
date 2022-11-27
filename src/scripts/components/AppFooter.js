class AppFooter extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
      <p>Copyright © 2020 - Hunger Apps</p>
    `;
  }
}

customElements.define('app-footer', AppFooter);

import { LitElement, html} from '../node_modules/lit';
import './components/test-component';

export class MyApp extends LitElement {

  render() {
    return html`<main><test-component></test-component></main>`;
  }
}

customElements.define('my-app', MyApp);

import { LitElement, html} from 'lit';
import './components/test-component';

export class MyApp extends LitElement {

  render() {
    return html`<main><test-component></test-component></main>`;
  }
}

customElements.define('my-app', MyApp);


import '../../../lib/components/shared/action-card.js';
import '../components/page-body.js';
import "../components/page-panel.js";
import '../../../lib/components/widgets/text-widget.js';
import '../../../lib/components/widgets/number-widget.js';
import '../../../lib/components/widgets/account-widget.js';
import DOM from "../../../lib/components/shared/dom";
import DappLib from "@decentology/dappstarter-dapplib";
import { LitElement, html, customElement, property } from "lit-element";

@customElement("cappuccino-page")
export default class HelloDevPage extends LitElement {
    @property()
    title;
    @property()
    category;
    @property()
    description;
  
    createRenderRoot() {
      return this;
    }
  
    constructor(args) {
      super(args);
    }
  
    render() {
      /*>>>>>>>>>>>>>>>>>>>>>>>>>>> EXAMPLES: HELLO DEV  <<<<<<<<<<<<<<<<<<<<<<<<<<*/
      return html`
        it workx
      `;
    }
}


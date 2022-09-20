export var AttributeHomeBar;
(function (AttributeHomeBar) {
    AttributeHomeBar["user"] = "user";
})(AttributeHomeBar || (AttributeHomeBar = {}));
class HomeBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttribute() {
        const attrs = {
            user: null,
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            `;
        }
    }
}
customElements.define("my-homebar", HomeBar);
export default HomeBar;

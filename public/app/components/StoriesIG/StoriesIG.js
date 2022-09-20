export var AttributeStories;
(function (AttributeStories) {
    AttributeStories["username"] = "username";
    AttributeStories["pic"] = "pic";
    AttributeStories["viewed"] = "viewed";
})(AttributeStories || (AttributeStories = {}));
class StoriesIG extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            username: null,
            pic: null,
            viewed: null
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
            
            <link href="./app/components/website.css" rel="stylesheet">
            <section class= "storyHeader">
            <div class = "story">
            <li><img src="${this.pic}"><h1>${this.username}</h1></li>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("stories-ig", StoriesIG);
export default StoriesIG;

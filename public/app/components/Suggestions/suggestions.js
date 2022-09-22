export var AttributeSuggestions;
(function (AttributeSuggestions) {
    AttributeSuggestions["username"] = "username";
    AttributeSuggestions["pic"] = "pic";
    AttributeSuggestions["peopleFollowed"] = "peopleFollowed";
})(AttributeSuggestions || (AttributeSuggestions = {}));
class Suggestions extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttribute() {
        const attrs = {
            username: null,
            pic: null,
            peopleFollowed: null
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
            <link href="./app/components/website.css"  rel="stylesheet">
            
            <section class= "suggestions">
                <div class = "mainprofile">
                    <img src=${this.pic} alt="pic"> 
                    <h1>${this.username} </h1>
                    <p>${this.username} </p>
                    <h2> Suggestions for you </h2>
                    <p class="ppinformation">
                    <b>${this.username}</b><br>
                    ${this.peopleFollowed}
                  </p>
                </div>

                <div class = "suggestedProfiles">
                <img src=${this.pic} alt="picSuggested"> 
                <p>${this.username} </p>
                <p>New to Instagram</p>
                </div>
            </section>
            `;
        }
    }
}
customElements.define("my-suggestions", Suggestions);
export default Suggestions;

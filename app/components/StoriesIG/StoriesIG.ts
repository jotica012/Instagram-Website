export enum AttributeStories{
    "username" = "username",
    "pic" = "pic",
    "viewed" = "viewed",
}

class StoriesIG extends HTMLElement {
    username?:string;
    pic?:string;
    viewed?:string;

    static get observedAttributes(){
        const attrs: Record<AttributeStories,null> = {
            username: null,
            pic: null,
            viewed: null
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(
        propName: AttributeStories, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }
    render(){
        if (this.shadowRoot){
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
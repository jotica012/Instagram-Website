export enum AttributeHomeBar{   
    "user" = "user",
}

class HomeBar extends HTMLElement {
    user?:string;
    
    static get observedAttribute(){
        const attrs: Record<AttributeHomeBar,null> = {
            user: null,
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
        propName: AttributeHomeBar, 
        oldValue: string | undefined, 
        newValue: string | undefined) {
        if(this[propName] === newValue) return;
        this[propName] = newValue;
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            `;
        }
    }
}
customElements.define("my-homebar", HomeBar);
export default HomeBar;
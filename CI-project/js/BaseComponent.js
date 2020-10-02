class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this.props = {};
        this.state = {};
    }
    connectedCallback(){
        this.render();
        this.componentDidMount();
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.render();
        this.componentDidUpdate();
    }
    disconnectedCallback() {
        this.componentWillUnmount();
    }
    setState(newState) {
        this.state = newState;
        this.render();
        this.componentDidUpdate();
    }
    /**
     * In htmk ra ngoài màn hình
     * Gán sự kiện cho các thẻ bên trong component
     */
    render() {

    }
    /**
     * được gọi sau khi component được sinh ra
     * được gọi 1 lần duy nhất
     */
    componentDidMount() {

    }
    /**
     * Được gọi khi props hoặc state được thay đổi, sau khi render
     */
    componentDidUpdate() {

    }
    /**
     * được gọi trước khi component biến mất
     */
    componentWillUnmount() {

    }
}
export {BaseComponent};
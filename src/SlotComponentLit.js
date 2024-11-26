import { html, css, LitElement } from 'lit';

export class SlotComponentLit extends LitElement {
  static styles = css`
    :host {
            display: block;
        }
        div {
            display: none;
        }
        span {
          display: block;
          background-color: cadetblue;
          padding: 0.5rem;
          color: white;
          font-weight: 100;
          border-radius: 5px;
        }
        p:hover {
          cursor: pointer;
          text-decoration: underline;
        }

        :host([is-show]) div {
            display: block;
            transition: ease-in-out ;
            border: 2px solid aqua;
            border-radius: 5px;
            padding: 0.5rem;
        }
  `;

  static properties = {
    isShow: {
      type: Boolean,
      //* refleja el valor que cambia en el componente en el propiedad del tag
      reflect: true,
      //* Toma el valor mediante el attirbuto de una etiqueta html
      attribute: 'is-show'
    }
  };

  /**
   * Si usamos reflect podemos ver el valor en el atributo del tag html
   * y con ello podemos hacer algo como esto mediante este atributo 
   * realizar este efecto
   */
  constructor() {
    super();
    this.isShow = false;
  }

  _change() {
    this.isShow = !this.isShow;
  }


  /**
   * @description render template html for component
   * @returns html
   */
  render() {
    return html`
      <p @click="${this._change}">Mostrar / Ocultar</p>
      ${ this.isShow 
        ? html`<div>Este contenido se ve algunas veces si y otras no...</div>`
        : html`<span class="show-div"> Has Click para mostrar el contenido!!</span>`
      }
    `;
  }
}

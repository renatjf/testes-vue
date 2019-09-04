import Vue from 'vue';
import 'document-register-element/build/document-register-element';
import 'document-register-element';
import vueCustomElement from 'vue-custom-element';
import wrap from '@vue/web-component-wrapper';
import MeuWebcomponent from './src/components/*.vue';

Vue.use(vueCustomElement);

Vue.component('meu-webcomponent', MeuWebcomponent);

const CustomElement = wrap(Vue, MeuWebcomponent);

window.customElements.define('meu-webcomponent', CustomElement);

export default{MeuWebcomponent};
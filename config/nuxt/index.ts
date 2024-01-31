export {typescript} from './TypescriptConfig';
export {css} from './Style';
export {devServer} from './DevServer';
export {plugins} from './Plugins';
export {modules} from './Modules';
export {vite} from './Vite';
export {dir, srcDir, buildDir} from './Directories';
export {alias} from './Alias';

export const app = {
  head: {
    link: [{rel: 'stylesheet', href: '/fonts/fonts.css'}]
  }
};

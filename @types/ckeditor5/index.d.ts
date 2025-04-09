declare module '@ckeditor/*' {
  const classes: any;
  export default classes;
}

declare module 'ckeditor5/*' {
  import translations from 'ckeditor5/translations/ko.js';
}

import React, { useState, useEffect, useRef, useMemo } from 'react';
import CKEditor from './components/CKEitor';

import './App.css';

export default function App() {
  const config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'emoji',
        'link',
        'mediaEmbed',
        'insertTable',
        'blockQuote',
        '|',
        'bulletedList',
        'numberedList',
        'todoList',
        'outdent',
        'indent'
      ],
      shouldNotGroupWhenFull: false
    },
    heading: {
      options: [
        {
          model: 'paragraph',
          title: 'Paragraph',
          class: 'ck-heading_paragraph'
        },
        {
          model: 'heading1',
          view: 'h1',
          title: 'Heading 1',
          class: 'ck-heading_heading1'
        },
        {
          model: 'heading2',
          view: 'h2',
          title: 'Heading 2',
          class: 'ck-heading_heading2'
        },
        {
          model: 'heading3',
          view: 'h3',
          title: 'Heading 3',
          class: 'ck-heading_heading3'
        },
        {
          model: 'heading4',
          view: 'h4',
          title: 'Heading 4',
          class: 'ck-heading_heading4'
        },
        {
          model: 'heading5',
          view: 'h5',
          title: 'Heading 5',
          class: 'ck-heading_heading5'
        },
        {
          model: 'heading6',
          view: 'h6',
          title: 'Heading 6',
          class: 'ck-heading_heading6'
        }
      ]
    },
    image: {
      toolbar: [
        'toggleImageCaption',
        'imageTextAlternative',
        '|',
        'imageStyle:inline',
        'imageStyle:wrapText',
        'imageStyle:breakText',
        '|',
        'resizeImage'
      ]
    },
    initialData:
      '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>config 정보를 전달해서 뿌려주는 예제샘플 <br/> config 속성을 전달하면 전달한 옵션으로 적용</p>\n<p>아래의 예제는 기본 config로 적용하는 샘플<br/> config를 전달 하지 않으면 기본 옵션으로 적용 <== 단 이경우는 모든 플러그인을 태우기 때문에 원하는 형태가 안나올수 있음</p>',
    licenseKey: 'GPL',
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: 'https://',
      decorators: {
        toggleDownloadable: {
          mode: 'manual',
          label: 'Downloadable',
          attributes: {
            download: 'file'
          }
        }
      }
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true
      }
    },
    mention: {
      feeds: [
        {
          marker: '@',
          feed: [
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
          ]
        }
      ]
    },
    placeholder: 'Type or paste your content here!',
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    }
  };

  return (
    <div className="main-container">
      {/* LICENSE_KEY는 기본 GPL로 전달. 개인 라이센스키가 있으면 입력해서 전달 */}
      {/* config 속성을 전달하면 전달한 옵션으로 적용 */}
      <CKEditor LICENSE_KEY="GPL" config={config}/>
      {/* 속성전달을 하지 않으면 기본 옵션으로 적용 <== 단 이경우는 모든 플러그인을 태우기 때문에 원하는 형태가 안나올수 있음 */}
      <br/><br/><br/><br/><br/>
      <CKEditor LICENSE_KEY="GPL"/>
    </div>
  );
}

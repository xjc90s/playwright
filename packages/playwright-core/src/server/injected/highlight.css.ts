/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const highlightCSS = `
x-pw-tooltip {
  backdrop-filter: blur(5px);
  background-color: white;
  color: #222;
  border-radius: 6px;
  box-shadow: 0 0.5rem 1.2rem rgba(0,0,0,.3);
  display: none;
  font-family: 'Dank Mono', 'Operator Mono', Inconsolata, 'Fira Mono',
              'SF Mono', Monaco, 'Droid Sans Mono', 'Source Code Pro', monospace;
  font-size: 12.8px;
  font-weight: normal;
  left: 0;
  line-height: 1.5;
  max-width: 600px;
  position: absolute;
  top: 0;
}
x-pw-tooltip-body {
  align-items: center;
  padding: 3.2px 5.12px 3.2px;
}
x-pw-highlight {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}
x-pw-action-point {
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 10px;
  margin: -10px 0 0 -10px;
  z-index: 2;
}
x-pw-separator {
  height: 1px;
  margin: 6px 9px;
  background: rgb(148 148 148 / 90%);
}
x-pw-tool-gripper {
  height: 28px;
  width: 24px;
  margin: 2px 0;
  cursor: grab;
}
x-pw-tool-gripper:active {
  cursor: grabbing;
}
x-pw-tool-gripper > x-div {
  width: 100%;
  height: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: 20px;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 16px;
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' /></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' /></svg>");
  background-color: #555555;
}
x-pw-tools-list {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dddddd;
}
x-pw-tool-item {
  pointer-events: auto;
  cursor: pointer;
  height: 28px;
  width: 28px;
  border-radius: 3px;
}
x-pw-tool-item:not(.disabled):hover {
  background-color: hsl(0, 0%, 86%);
}
x-pw-tool-item > x-div {
  width: 100%;
  height: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: 20px;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: 16px;
  background-color: #3a3a3a;
}
x-pw-tool-item.disabled > x-div {
  background-color: rgba(97, 97, 97, 0.5);
  cursor: default;
}
x-pw-tool-item.active > x-div {
  background-color: #006ab1;
}
x-pw-tool-item.record.active > x-div {
  background-color: #a1260d;
}
x-pw-tool-item.accept > x-div {
  background-color: #388a34;
}
x-pw-tool-item.cancel > x-div {
  background-color: #e51400;
}
x-pw-tool-item.record > x-div {
  /* codicon: circle-large-filled */
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M8 1a6.8 6.8 0 0 1 1.86.253 6.899 6.899 0 0 1 3.083 1.805 6.903 6.903 0 0 1 1.804 3.083C14.916 6.738 15 7.357 15 8s-.084 1.262-.253 1.86a6.9 6.9 0 0 1-.704 1.674 7.157 7.157 0 0 1-2.516 2.509 6.966 6.966 0 0 1-1.668.71A6.984 6.984 0 0 1 8 15a6.984 6.984 0 0 1-1.86-.246 7.098 7.098 0 0 1-1.674-.711 7.3 7.3 0 0 1-1.415-1.094 7.295 7.295 0 0 1-1.094-1.415 7.098 7.098 0 0 1-.71-1.675A6.985 6.985 0 0 1 1 8c0-.643.082-1.262.246-1.86a6.968 6.968 0 0 1 .711-1.667 7.156 7.156 0 0 1 2.509-2.516 6.895 6.895 0 0 1 1.675-.704A6.808 6.808 0 0 1 8 1z'/></svg>");
}
x-pw-tool-item.pick-locator > x-div {
  /* codicon: inspect */
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 3l1-1h12l1 1v6h-1V3H2v8h5v1H2l-1-1V3zm14.707 9.707L9 6v9.414l2.707-2.707h4zM10 13V8.414l3.293 3.293h-2L10 13z'/></svg>");
}
x-pw-tool-item.assert > x-div {
  /* codicon: check-all */
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M15.62 3.596L7.815 12.81l-.728-.033L4 8.382l.754-.53 2.744 3.907L14.917 3l.703.596z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M7.234 8.774l4.386-5.178L10.917 3l-4.23 4.994.547.78zm-1.55.403l.548.78-.547-.78zm-1.617 1.91l.547.78-.799.943-.728-.033L0 8.382l.754-.53 2.744 3.907.57-.672z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path fill-rule='evenodd' clip-rule='evenodd' d='M15.62 3.596L7.815 12.81l-.728-.033L4 8.382l.754-.53 2.744 3.907L14.917 3l.703.596z'/><path fill-rule='evenodd' clip-rule='evenodd' d='M7.234 8.774l4.386-5.178L10.917 3l-4.23 4.994.547.78zm-1.55.403l.548.78-.547-.78zm-1.617 1.91l.547.78-.799.943-.728-.033L0 8.382l.754-.53 2.744 3.907.57-.672z'/></svg>");
}
x-pw-tool-item.accept > x-div {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/></svg>");
}
x-pw-tool-item.cancel > x-div {
  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
  mask-image: url("data:image/svg+xml;utf8,<svg width='16' height='16' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='currentColor'><path d='M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
}
x-pw-overlay {
  position: absolute;
  top: 0;
  max-width: min-content;
  z-index: 2147483647;
  background: transparent;
  pointer-events: auto;
}
x-pw-overlay x-pw-tools-list {
  background-color: #ffffffdd;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px;
  border-radius: 3px;
  border-bottom: none;
}
x-pw-overlay x-pw-tool-item {
  margin: 2px;
}
x-div {
  display: block;
}
* {
  box-sizing: border-box;
}
*[hidden] {
  display: none !important;
}`;
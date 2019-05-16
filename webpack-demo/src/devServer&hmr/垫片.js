// index.js

import _ from 'lodash'
// import $ from 'jquery'
import {
  ui
} from './jquery.ui.js'

ui()

const dom = $('div')
dom.html(_.join(['CM', 'Dora'], '---1111111'))
$('body').append(dom)



// jquery.ui.js
export function ui() {
  $('body').css('background', _join(['blue'], ''))
}
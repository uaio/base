
require('../css/main.scss')
import {$$} from './func';
import Preloader from 'preloader.js'

/**
 * init
 */

function init() {
  console.log('init ok')
}

/**
 * preloader && start
 */
var preloader = new Preloader({
  resources: ['https://img.shields.io/npm/v/elf-cli.svg?style=flat-square'],
  concurrency: 4,
  perMinTime: 1000 // 加载每个资源所需的最小时间，一般用来测试 loading
})
preloader.addProgressListener(function (loaded, length) {
  console.log('loaded', loaded, length, loaded / length)
})
preloader.addCompletionListener(function () {
$$('#o2_loading').classList.add("hide")
$$('#o2_main').classList.remove('hide')

  init()
})
document.addEventListener('DOMContentLoaded', function () {
    preloader.start();
}, false)

import {load} from './onload';
window.onload = load;


const url = require('url')
const fs = require('fs-extra')
const $ = require('jquery')
const showdown  = require('showdown')
const URL = url.URL

var urlObj = new URL(global.location.href)
var markdownPath = urlObj.searchParams.get('md')

fs.readFile(markdownPath)
.then((markdownContent)=>{  
    var converter = new showdown.Converter()
    var html      = converter.makeHtml(markdownContent.toString())
    $('.markdown-body').html(html)
})
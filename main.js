const $ = require('jquery')

let Ajax = {}

Ajax.request = (url, params, dataType, method) => {
    return {
        url : url,
        method : method,
        data : params,
        dataType : dataType
    }
}

Ajax.post = (url, params = {}, dataType = 'json') => {
    return new Promise ((resolve, reject) => {
        $.ajax(Ajax.request(url, params, dataType, 'POST'))
            .done(resolve)
            .fail(reject)
    })
}

Ajax.get = (url, params = {}, dataType = 'json') => {
    return new Promise ((resolve, reject) => {
        $.ajax(Ajax.request(url, params, dataType, 'GET'))
            .done(resolve)
            .fail(reject)
    })
}

Ajax.callDataUrl = (elt, params = {}, dataType = 'json') => {
    return Ajax.get($(elt).data('url'), params, dataType)
}

module.exports = Ajax
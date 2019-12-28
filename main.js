const $ = require('jquery')

let Ajax = {}

Ajax.request = (url, params, dataType, method, isformData = false) => {
    let config = {
        url : url,
        method : method,
        data : params,
        dataType : dataType
    }

    if (isformData) {
        let formData = new FormData()
        for (const [key, value] of Object.entries(params)) {
            formData.append(key, value)
        }
        config.data = formData
        config.contentType = false
        config.processData = false
    }

    return config
}

Ajax.post = (url, params = {}, dataType = 'json', isformData = false) => {
    return new Promise ((resolve, reject) => {
        $.ajax(Ajax.request(url, params, dataType, 'POST', isformData))
            .done(resolve)
            .fail(reject)
    })
}

Ajax.get = (url, params = {}, dataType = 'json', isformData = false) => {
    return new Promise ((resolve, reject) => {
        $.ajax(Ajax.request(url, params, dataType, 'GET', isformData))
            .done(resolve)
            .fail(reject)
    })
}

Ajax.callDataUrl = (elt, params = {}, dataType = 'json', isformData = false) => {
    return Ajax.get($(elt).data('url'), params, dataType, isformData)
}

Ajax.callDataUrlPost = (elt, params = {}, dataType = 'json', isformData = false) => {
    return Ajax.post($(elt).data('url'), params, dataType, isformData)
}

module.exports = Ajax